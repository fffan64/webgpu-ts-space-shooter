struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
  @location(1) color : vec4f,
}

@group(0) @binding(0)
var<uniform> projectionViewMatrix: mat4x4f;

// The vertex shader is called for each vertex in the vertex array.
// The vertex index is passed in as a builtin variable.
@vertex
fn vertexMain(
  @location(0) pos: vec2f, //xy
  @location(1) texCoords: vec2f, //rgb
  @location(2) color: vec3f, //rgb
) -> VertexOut
{

  var output : VertexOut;
  output.position = projectionViewMatrix * vec4f(pos, 0.0, 1.0);
  output.color = vec4f(color, 1.0);
  output.texCoords = texCoords;
  return output;
}

@group(1) @binding(0)
var texSampler: sampler;

@group(1) @binding(1)
var tex: texture_2d<f32>;

struct FragmentOut {
  @location(0) color: vec4f,
  @location(1) brightness: vec4f,
}

const brightnessthreshold: f32 = 0.4;

// The fragment shader is called for each pixel in the triangle.
@fragment
fn fragmentMain(fragData: VertexOut) -> FragmentOut
{
  var out: FragmentOut;
  var textureColor = textureSample(tex, texSampler, fragData.texCoords) * fragData.color;

  out.color = textureColor;

  var l = dot(textureColor.xyz, vec3f(0.299, 0.587, 0.114));

  if(l > brightnessthreshold) {
    out.brightness = textureColor;
  } else {
    out.brightness = vec4f(0.0, 0.0, 0.0, textureColor.a);
  }

  return out; // final color of the pixel
}