struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
}

// this is our scene texture
@group(0) @binding(0)
var texSampler0: sampler;

@group(0) @binding(1)
var tex0: texture_2d<f32>;

// time value
@group(1) @binding(0)
var<uniform> timeValue: f32;

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
    
    var tempResolution = textureDimensions(tex0);
    var resolution = vec3<f32>(f32(tempResolution.x), f32(tempResolution.y), 0.0);

    // var ChromaticAberration = 0.5  / 10.0 + 8.0;
    // var ChromaticAberration = 3.0;
    var ChromaticAberration = timeValue;

	var uv = vs_out.texCoords.xy; // / resolution.xy;
    // var uv = vs_out.texCoords;
    var texel = 1.0 / resolution.xy;
    
    var coords = (uv - 0.5) * 2.0;
    var coordDot = dot (coords, coords);
    
    var precompute = ChromaticAberration * coordDot * coords;
    var uvR = uv - texel.xy * precompute;
    var uvB = uv + texel.xy * precompute;
    
    var color: vec3<f32>;
    color.r = textureSample(tex0, texSampler0, uvR).r;
    color.g = textureSample(tex0, texSampler0, uv).g;
    color.b = textureSample(tex0, texSampler0, uvB).b;
    
	  return vec4<f32>(color, 1.0);
}