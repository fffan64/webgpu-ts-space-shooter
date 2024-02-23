import { BufferUtil } from "./buffer-util";
import { Texture } from "./texture";
// import shaderSource from "./shaders/crt-effect.wgsl?raw";
import shaderSource from "./shaders/crt-effect2.wgsl?raw";

export class CrtEffect {
  private gpuPipeline!: GPURenderPipeline;
  private gpuBuffer!: GPUBuffer;

  // screen texture
  public screenTexture!: Texture;
  private screenTextureBindGroup!: GPUBindGroup;

  // time
  public timeValue = 0.5;
  private timeValueBuffer!: GPUBuffer;
  private timeValueBindGroup!: GPUBindGroup;

  constructor(
    private device: GPUDevice,
    public width: number,
    public height: number
  ) {}

  public async initialize() {
    this.screenTexture = await Texture.createEmptyTexture(
      this.device,
      this.width,
      this.height,
      "bgra8unorm"
    );

    this.gpuBuffer = BufferUtil.createVertexBuffer(
      this.device,
      new Float32Array([
        // pos(x,y) tex(u,v)

        // first triangle
        // top left
        -1.0, 1.0, 0.0, 0.0,
        // top right
        1.0, 1.0, 1.0, 0.0,
        // bottom left
        -1.0, -1.0, 0.0, 1.0,

        // second triangle
        // bottom left
        -1.0, -1.0, 0.0, 1.0,
        // top right
        1.0, 1.0, 1.0, 0.0,
        // bottom right
        1.0, -1.0, 1.0, 1.0,
      ])
    );

    this.timeValueBuffer = BufferUtil.createUniformBuffer(
      this.device,
      new Float32Array([this.timeValue])
    );

    const textureBindGroupLayout = this.device.createBindGroupLayout({
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.FRAGMENT,
          sampler: {},
        },
        {
          binding: 1,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {},
        },
      ],
    });

    const timeValueBindGroupLayout = this.device.createBindGroupLayout({
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.FRAGMENT,
          buffer: {},
        },
      ],
    });

    this.screenTextureBindGroup = this.device.createBindGroup({
      layout: textureBindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: this.screenTexture.sampler,
        },
        {
          binding: 1,
          resource: this.screenTexture.texture.createView(),
        },
      ],
    });

    this.timeValueBindGroup = this.device.createBindGroup({
      layout: timeValueBindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: {
            buffer: this.timeValueBuffer,
            offset: 0,
            size: Float32Array.BYTES_PER_ELEMENT,
          },
        },
      ],
    });

    const shaderModule = this.device.createShaderModule({
      code: shaderSource,
    });

    const desc: GPURenderPipelineDescriptor = {
      layout: this.device.createPipelineLayout({
        bindGroupLayouts: [
          textureBindGroupLayout, // group(0)
          timeValueBindGroupLayout, // group(1)
        ],
      }),
      vertex: {
        module: shaderModule,
        entryPoint: "vertexMain",
        buffers: [
          {
            arrayStride: 4 * Float32Array.BYTES_PER_ELEMENT,
            attributes: [
              {
                shaderLocation: 0,
                offset: 0,
                format: "float32x2",
              },
              {
                shaderLocation: 1,
                offset: 2 * Float32Array.BYTES_PER_ELEMENT,
                format: "float32x2",
              },
            ],
          },
        ],
      },
      fragment: {
        module: shaderModule,
        entryPoint: "fragmentMain",
        targets: [
          {
            format: "bgra8unorm",
          },
        ],
      },
      primitive: {
        topology: "triangle-list",
      },
    };

    this.gpuPipeline = this.device.createRenderPipeline(desc);
  }

  public draw(destinationTextureview: GPUTextureView) {
    const commandEncoder = this.device.createCommandEncoder();
    const passEncoder = commandEncoder.beginRenderPass({
      colorAttachments: [
        {
          view: destinationTextureview,
          loadOp: "clear",
          storeOp: "store",
        },
      ],
    });

    this.device.queue.writeBuffer(
      this.timeValueBuffer,
      0,
      new Float32Array([this.timeValue])
    );

    passEncoder.setPipeline(this.gpuPipeline);
    passEncoder.setVertexBuffer(0, this.gpuBuffer);
    passEncoder.setBindGroup(0, this.screenTextureBindGroup);
    passEncoder.setBindGroup(1, this.timeValueBindGroup);
    passEncoder.draw(6, 1, 0, 0);

    passEncoder.end();
    this.device.queue.submit([commandEncoder.finish()]);
  }
}
