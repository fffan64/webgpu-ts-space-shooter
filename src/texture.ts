export class Texture {
  public texture!: GPUTexture;
  public sampler!: GPUSampler;
  public id!: string;
  public width!: number;
  public height!: number;

  public static async createTexture(
    device: GPUDevice,
    image: HTMLImageElement
  ): Promise<Texture> {
    const texture = device.createTexture({
      size: { width: image.width, height: image.height },
      format: "rgba8unorm",
      usage:
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.RENDER_ATTACHMENT,
    });

    const data = await createImageBitmap(image);

    device.queue.copyExternalImageToTexture(
      { source: data },
      { texture: texture },
      { width: image.width, height: image.height }
    );

    const sampler = device.createSampler({
      magFilter: "nearest",
      minFilter: "nearest",
    });

    return {
      texture,
      sampler,
      id: image.src,
      width: image.width,
      height: image.height,
    };
  }

  public static async createEmptyTexture(
    device: GPUDevice,
    width: number,
    height: number,
    format: GPUTextureFormat = "rgba8unorm"
  ) {
    const texture = device.createTexture({
      size: { width: width, height: height },
      format: format,
      usage:
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.RENDER_ATTACHMENT,
    });

    const sampler = device.createSampler({
      magFilter: "nearest",
      minFilter: "nearest",
    });

    return {
      texture,
      sampler,
      id: "",
      width: width,
      height: height,
    };
  }

  public static async createtextureFromURL(
    device: GPUDevice,
    url: string
  ): Promise<Texture> {
    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = () => resolve(image);
      image.onerror = () => {
        console.error(`Failed to load image ${url}`);
        reject();
      };
    });

    const image = await promise;
    return Texture.createTexture(device, image);
  }
}
