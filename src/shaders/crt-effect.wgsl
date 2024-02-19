const CURVATURE: vec2<f32> = vec2<f32>(3.0, 3.0);
const RESOLUTION: vec2<f32> = vec2<f32>(100.0, 100.0);
const BRIGHTNESS: f32 = 4.0;

const PI: f32 = 3.14159;

struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
}

// this is our scene texture
@group(0) @binding(0)
var texSampler0: sampler;

@group(0) @binding(1)
var tex0: texture_2d<f32>;

fn curveRemapUV(uv_in: vec2<f32>) -> vec2<f32> {
    var uv_out: vec2<f32>;

    // as we near the edge of our screen apply greater distortion using a cubic function
    uv_out = uv_in * 2.0 - 1.0;
    var offset: vec2<f32> = abs(uv_out.yx) / CURVATURE;

    uv_out = uv_out + uv_out * offset * offset;
    return uv_out * 0.5 + 0.5;
}

fn scanLineIntensity(uv_in: f32, resolution: f32, opacity: f32) -> vec4<f32> {
     var intensity: f32 = sin(uv_in * resolution * PI * 2.0);
     intensity = ((0.5 * intensity) + 0.5) * 0.9 + 0.1;
     return vec4<f32>(vec3<f32>(pow(intensity, opacity)), 1.0);
 }

fn vignetteIntensity(uv_in: vec2<f32>, resolution: vec2<f32>, opacity: f32, roundness: f32) -> vec4<f32> {
    var intensity: f32 = uv_in.x * uv_in.y * (1.0 - uv_in.x) * (1.0 - uv_in.y);
    return vec4<f32>(vec3<f32>(clamp(pow((resolution.x / roundness) * intensity, opacity), 0.0, 1.0)), 1.0);
}

@vertex
fn vertexMain(
  @location(0) pos: vec2f, //xy
  @location(1) texCoords: vec2f, //rgb
) -> VertexOut
{

  var output : VertexOut;
  output.position = vec4f(pos, 0.0, 1.0);
  output.texCoords = texCoords;
  return output;
}

@fragment
fn fragmentMain(
    vs_out: VertexOut
) -> @location(0) vec4<f32> {
    var remapped_tex_coords = curveRemapUV(vs_out.texCoords);
    var color: vec4<f32> = textureSample(tex0, texSampler0, remapped_tex_coords);
    
    color *= vignetteIntensity(remapped_tex_coords, RESOLUTION, 1.0, 2.0);
    
    color *= scanLineIntensity(remapped_tex_coords.x, RESOLUTION.y, 1.0);
    color *= scanLineIntensity(remapped_tex_coords.y, RESOLUTION.x, 1.0);
    
    return vec4<f32>(color.rgb * BRIGHTNESS, 1.0);
}