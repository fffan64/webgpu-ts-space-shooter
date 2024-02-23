var K=Object.defineProperty;var W=(a,e,t)=>e in a?K(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var n=(a,e,t)=>(W(a,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class X{constructor(e,t,i,r){this.topLeft=e,this.topRight=t,this.bottomRight=i,this.bottomLeft=r}}class G{constructor(e,t,i,r){this.x=e,this.y=t,this.width=i,this.height=r}copy(){return new G(this.x,this.y,this.width,this.height)}}class ${constructor(e,t,i){this.texture=e,this.drawRect=t,this.sourceRect=i}}class Q{constructor(e,t,i,r){this.textureCoords=e,this.size=t,this.advance=i,this.offset=r}}class J{constructor(e,t){n(this,"chars",{});this.texture=e,this.lineHeight=t}getChar(e){return this.chars[e]}createChar(e,t,i,r,s){this.chars[e]=new Q(t,i,r,s)}}class T{constructor(){n(this,"texture");n(this,"sampler");n(this,"id");n(this,"width");n(this,"height")}static async createTexture(e,t){const i=e.createTexture({size:{width:t.width,height:t.height},format:"rgba8unorm",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),r=await createImageBitmap(t);e.queue.copyExternalImageToTexture({source:r},{texture:i},{width:t.width,height:t.height});const s=e.createSampler({magFilter:"nearest",minFilter:"nearest"});return{texture:i,sampler:s,id:t.src,width:t.width,height:t.height}}static async createEmptyTexture(e,t,i,r="rgba8unorm"){const s=e.createTexture({size:{width:t,height:i},format:r,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),c=e.createSampler({magFilter:"nearest",minFilter:"nearest"});return{texture:s,sampler:c,id:"",width:t,height:i}}static async createtextureFromURL(e,t){const r=await new Promise((s,c)=>{const d=new Image;d.src=t,d.onload=()=>s(d),d.onerror=()=>{console.error(`Failed to load image ${t}`),c()}});return T.createTexture(e,r)}}var N=1e-6,L=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var a=0,e=arguments.length;e--;)a+=arguments[e]*arguments[e];return Math.sqrt(a)});function z(){var a=new L(16);return L!=Float32Array&&(a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0),a[0]=1,a[5]=1,a[10]=1,a[15]=1,a}function Z(a){return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function ee(a,e,t){var i=e[0],r=e[1],s=e[2],c=e[3],d=e[4],o=e[5],u=e[6],l=e[7],p=e[8],f=e[9],h=e[10],w=e[11],b=e[12],E=e[13],P=e[14],D=e[15],g=t[0],x=t[1],v=t[2],m=t[3];return a[0]=g*i+x*d+v*p+m*b,a[1]=g*r+x*o+v*f+m*E,a[2]=g*s+x*u+v*h+m*P,a[3]=g*c+x*l+v*w+m*D,g=t[4],x=t[5],v=t[6],m=t[7],a[4]=g*i+x*d+v*p+m*b,a[5]=g*r+x*o+v*f+m*E,a[6]=g*s+x*u+v*h+m*P,a[7]=g*c+x*l+v*w+m*D,g=t[8],x=t[9],v=t[10],m=t[11],a[8]=g*i+x*d+v*p+m*b,a[9]=g*r+x*o+v*f+m*E,a[10]=g*s+x*u+v*h+m*P,a[11]=g*c+x*l+v*w+m*D,g=t[12],x=t[13],v=t[14],m=t[15],a[12]=g*i+x*d+v*p+m*b,a[13]=g*r+x*o+v*f+m*E,a[14]=g*s+x*u+v*h+m*P,a[15]=g*c+x*l+v*w+m*D,a}function te(a,e,t,i,r,s,c){var d=1/(e-t),o=1/(i-r),u=1/(s-c);return a[0]=-2*d,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=-2*o,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2*u,a[11]=0,a[12]=(e+t)*d,a[13]=(r+i)*o,a[14]=(c+s)*u,a[15]=1,a}var re=te;function ie(a,e,t,i){var r,s,c,d,o,u,l,p,f,h,w=e[0],b=e[1],E=e[2],P=i[0],D=i[1],g=i[2],x=t[0],v=t[1],m=t[2];return Math.abs(w-x)<N&&Math.abs(b-v)<N&&Math.abs(E-m)<N?Z(a):(l=w-x,p=b-v,f=E-m,h=1/Math.hypot(l,p,f),l*=h,p*=h,f*=h,r=D*f-g*p,s=g*l-P*f,c=P*p-D*l,h=Math.hypot(r,s,c),h?(h=1/h,r*=h,s*=h,c*=h):(r=0,s=0,c=0),d=p*c-f*s,o=f*r-l*c,u=l*s-p*r,h=Math.hypot(d,o,u),h?(h=1/h,d*=h,o*=h,u*=h):(d=0,o=0,u=0),a[0]=r,a[1]=d,a[2]=l,a[3]=0,a[4]=s,a[5]=o,a[6]=p,a[7]=0,a[8]=c,a[9]=u,a[10]=f,a[11]=0,a[12]=-(r*w+s*b+c*E),a[13]=-(d*w+o*b+u*E),a[14]=-(l*w+p*b+f*E),a[15]=1,a)}function C(){var a=new L(2);return L!=Float32Array&&(a[0]=0,a[1]=0),a}function S(a,e){var t=new L(2);return t[0]=a,t[1]=e,t}function ae(a,e){return a[0]=e[0],a[1]=e[1],a}function ne(a,e){var t=e[0],i=e[1],r=t*t+i*i;return r>0&&(r=1/Math.sqrt(r)),a[0]=e[0]*r,a[1]=e[1]*r,a}function O(a,e,t,i){var r=e[0]-t[0],s=e[1]-t[1],c=Math.sin(i),d=Math.cos(i);return a[0]=r*d-s*c+t[0],a[1]=r*c+s*d+t[1],a}(function(){var a=C();return function(e,t,i,r,s,c){var d,o;for(t||(t=2),i||(i=0),r?o=Math.min(r*t+i,e.length):o=e.length,d=i;d<o;d+=t)a[0]=e[d],a[1]=e[d+1],s(a,a,c),e[d]=a[0],e[d+1]=a[1];return e}})();class B{static async initialize(e){this.playerTexture=await T.createtextureFromURL(e,"./assets/PNG/playerShip1_blue.png"),this.ufoTexture=await T.createtextureFromURL(e,"./assets/PNG/ufoRed.png"),this.uvTexture=await T.createtextureFromURL(e,"./assets/uv_test.png"),this.spriteSheetTexture=await T.createtextureFromURL(e,"./assets/Spritesheet/sheet.png"),this.backgroundTexture=await T.createtextureFromURL(e,"./assets/Backgrounds/purple.png"),this.explosionTexture=await T.createtextureFromURL(e,"./assets/explosion.png"),this.iceTexture=await T.createtextureFromURL(e,"./assets/ice03.jpg"),await this.loadSpriteSheet(),this.spriteFont=await this.loadSnowBSpriteFont(e,"./assets/SpriteFont.xml","./assets/SpriteFont.png")}static async loadSpriteSheet(){const t=await(await fetch("./assets/Spritesheet/sheet.xml")).text();new DOMParser().parseFromString(t,"text/xml").querySelectorAll("SubTexture").forEach(s=>{const c=s.getAttribute("name").replace(".png",""),d=parseInt(s.getAttribute("x")),o=parseInt(s.getAttribute("y")),u=parseInt(s.getAttribute("width")),l=parseInt(s.getAttribute("height")),p=new G(0,0,u,l),f=new G(d,o,u,l);this.sprites[c]=new $(this.spriteSheetTexture,p,f)})}static async loadSnowBSpriteFont(e,t,i){const r=await T.createtextureFromURL(e,i),c=await(await fetch(t)).text(),o=new DOMParser().parseFromString(c,"text/xml"),u=parseInt(o.querySelector("font").getAttribute("height")),l=new J(r,u);return o.querySelectorAll("char").forEach(p=>{const f=parseInt(p.getAttribute("id")),h=parseInt(p.getAttribute("x")),w=parseInt(p.getAttribute("y")),b=parseInt(p.getAttribute("width")),E=parseInt(p.getAttribute("height")),P=parseInt(p.getAttribute("xoffset")),D=parseInt(p.getAttribute("yoffset")),g=parseInt(p.getAttribute("xadvance")),x=h/r.width,v=w/r.height,m=(h+b)/r.width,q=(w+E)/r.height,k=new X(S(x,v),S(m,v),S(m,q),S(x,q));l.createChar(f,k,S(b,E),g,S(P,D))}),l}}n(B,"spriteFont"),n(B,"playerTexture"),n(B,"ufoTexture"),n(B,"uvTexture"),n(B,"spriteSheetTexture"),n(B,"backgroundTexture"),n(B,"explosionTexture"),n(B,"iceTexture"),n(B,"sprites",{});class R{static createVertexBuffer(e,t){const i=e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});return new Float32Array(i.getMappedRange()).set(t),i.unmap(),i}static createIndexBuffer(e,t){const i=e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});return new Uint16Array(i.getMappedRange()).set(t),i.unmap(),i}static createUniformBuffer(e,t){return e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}class se{constructor(e,t){n(this,"projection");n(this,"view");n(this,"projectionViewMatrix");this.width=e,this.height=t,this.projectionViewMatrix=z()}update(){this.projection=re(z(),0,this.width,this.height,0,-1,1),this.view=ie(z(),[0,0,1],[0,0,0],[0,1,0]),ee(this.projectionViewMatrix,this.projection,this.view)}}class oe{constructor(e=1,t=1,i=1){this.r=e,this.g=t,this.b=i}}const ce=`struct VertexOut {
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
}`;class F{constructor(){n(this,"pipeline");n(this,"textureBindGroup");n(this,"projectionViewBindGroup")}static create(e,t,i){const r=new F;return r.initialize(e,t,i),r}initialize(e,t,i){const r=e.createShaderModule({code:ce}),s={arrayStride:7*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"},{shaderLocation:2,offset:4*Float32Array.BYTES_PER_ELEMENT,format:"float32x3"}],stepMode:"vertex"},c={module:r,entryPoint:"vertexMain",buffers:[s]},d={module:r,entryPoint:"fragmentMain",targets:[{format:navigator.gpu.getPreferredCanvasFormat(),blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}},{format:navigator.gpu.getPreferredCanvasFormat(),blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}}]},o=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),u=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]}),l=e.createPipelineLayout({bindGroupLayouts:[o,u]});this.textureBindGroup=e.createBindGroup({layout:u,entries:[{binding:0,resource:t.sampler},{binding:1,resource:t.texture.createView()}]}),this.projectionViewBindGroup=e.createBindGroup({layout:o,entries:[{binding:0,resource:{buffer:i}}]}),this.pipeline=e.createRenderPipeline({vertex:c,fragment:d,primitive:{topology:"triangle-list"},layout:l})}}const A=1e3,he=7,_=4*he,M=6;class V{constructor(e){n(this,"vertexData",new Float32Array(A*_));n(this,"instanceCount",0);this.pipeline=e}}class ue{constructor(e,t,i){n(this,"defaultColor",new oe);n(this,"currentTexture",null);n(this,"indexBuffer");n(this,"projectionViewMatrixBuffer");n(this,"camera");n(this,"passEncoder");n(this,"v0",C());n(this,"v1",C());n(this,"v2",C());n(this,"v3",C());n(this,"rotationOrigin",C());n(this,"pipelinesPerTexture",{});n(this,"batchDrawCallPerTexture",{});n(this,"allocatedVertexBuffers",[]);this.device=e,this.width=t,this.height=i,this.camera=new se(this.width,this.height)}setupIndexBuffer(){const e=new Uint16Array(A*M);for(let t=0;t<A;t++)e[t*M+0]=t*4+0,e[t*M+1]=t*4+1,e[t*M+2]=t*4+2,e[t*M+3]=t*4+2,e[t*M+4]=t*4+3,e[t*M+5]=t*4+0;this.indexBuffer=R.createIndexBuffer(this.device,e)}initialize(){this.projectionViewMatrixBuffer=R.createUniformBuffer(this.device,new Float32Array(16)),this.setupIndexBuffer()}framePass(e){this.passEncoder=e,this.batchDrawCallPerTexture={},this.currentTexture=null,this.camera.update(),this.device.queue.writeBuffer(this.projectionViewMatrixBuffer,0,this.camera.projectionViewMatrix)}drawSprite(e,t){if(this.currentTexture!==e){this.currentTexture=e;let c=this.pipelinesPerTexture[e.id];c||(c=F.create(this.device,e,this.projectionViewMatrixBuffer),this.pipelinesPerTexture[e.id]=c),this.batchDrawCallPerTexture[e.id]||(this.batchDrawCallPerTexture[e.id]=[])}const i=this.batchDrawCallPerTexture[e.id];let r=i[i.length-1];r||(r=new V(this.pipelinesPerTexture[e.id]),this.batchDrawCallPerTexture[e.id].push(r));let s=r.instanceCount*_;if(r.vertexData[0+s]=t.x,r.vertexData[1+s]=t.y,r.vertexData[2+s]=0,r.vertexData[3+s]=0,r.vertexData[4+s]=1,r.vertexData[5+s]=1,r.vertexData[6+s]=1,r.vertexData[7+s]=t.x+t.width,r.vertexData[8+s]=t.y,r.vertexData[9+s]=1,r.vertexData[10+s]=0,r.vertexData[11+s]=1,r.vertexData[12+s]=1,r.vertexData[13+s]=1,r.vertexData[14+s]=t.x+t.width,r.vertexData[15+s]=t.y+t.height,r.vertexData[16+s]=1,r.vertexData[17+s]=1,r.vertexData[18+s]=1,r.vertexData[19+s]=1,r.vertexData[20+s]=1,r.vertexData[21+s]=t.x,r.vertexData[22+s]=t.y+t.height,r.vertexData[23+s]=0,r.vertexData[24+s]=1,r.vertexData[25+s]=1,r.vertexData[26+s]=1,r.vertexData[27+s]=1,r.instanceCount++,r.instanceCount>=A){const c=new V(this.pipelinesPerTexture[e.id]);this.batchDrawCallPerTexture[e.id].push(c)}}drawSpriteSource(e,t,i,r=this.defaultColor,s=0,c=null){if(this.currentTexture!==e){this.currentTexture=e;let w=this.pipelinesPerTexture[e.id];w||(w=F.create(this.device,e,this.projectionViewMatrixBuffer),this.pipelinesPerTexture[e.id]=w),this.batchDrawCallPerTexture[e.id]||(this.batchDrawCallPerTexture[e.id]=[])}const d=this.batchDrawCallPerTexture[e.id];let o=d[d.length-1];o||(o=new V(this.pipelinesPerTexture[e.id]),this.batchDrawCallPerTexture[e.id].push(o));let u=o.instanceCount*_,l=i.x/e.width,p=i.y/e.height,f=(i.x+i.width)/e.width,h=(i.y+i.height)/e.height;if(this.v0[0]=t.x,this.v0[1]=t.y,this.v1[0]=t.x+t.width,this.v1[1]=t.y,this.v2[0]=t.x+t.width,this.v2[1]=t.y+t.height,this.v3[0]=t.x,this.v3[1]=t.y+t.height,s!==0&&(c===null?ae(this.rotationOrigin,this.v0):(this.rotationOrigin[0]=this.v0[0]+c[0]*t.width,this.rotationOrigin[1]=this.v0[1]+c[1]*t.height),O(this.v0,this.v0,this.rotationOrigin,s),O(this.v1,this.v1,this.rotationOrigin,s),O(this.v2,this.v2,this.rotationOrigin,s),O(this.v3,this.v3,this.rotationOrigin,s)),o.vertexData[0+u]=this.v0[0],o.vertexData[1+u]=this.v0[1],o.vertexData[2+u]=l,o.vertexData[3+u]=p,o.vertexData[4+u]=r.r,o.vertexData[5+u]=r.g,o.vertexData[6+u]=r.b,o.vertexData[7+u]=this.v1[0],o.vertexData[8+u]=this.v1[1],o.vertexData[9+u]=f,o.vertexData[10+u]=p,o.vertexData[11+u]=r.r,o.vertexData[12+u]=r.g,o.vertexData[13+u]=r.b,o.vertexData[14+u]=this.v2[0],o.vertexData[15+u]=this.v2[1],o.vertexData[16+u]=f,o.vertexData[17+u]=h,o.vertexData[18+u]=r.r,o.vertexData[19+u]=r.g,o.vertexData[20+u]=r.b,o.vertexData[21+u]=this.v3[0],o.vertexData[22+u]=this.v3[1],o.vertexData[23+u]=l,o.vertexData[24+u]=h,o.vertexData[25+u]=r.r,o.vertexData[26+u]=r.g,o.vertexData[27+u]=r.b,o.instanceCount++,o.instanceCount>=A){const w=new V(this.pipelinesPerTexture[e.id]);this.batchDrawCallPerTexture[e.id].push(w)}}drawString(e,t,i,r=this.defaultColor,s=1){const c=e.texture;if(this.currentTexture!==c){this.currentTexture=c;let l=this.pipelinesPerTexture[c.id];l||(l=F.create(this.device,c,this.projectionViewMatrixBuffer),this.pipelinesPerTexture[c.id]=l),this.batchDrawCallPerTexture[c.id]||(this.batchDrawCallPerTexture[c.id]=[])}const d=this.batchDrawCallPerTexture[c.id];let o=d[d.length-1];o||(o=new V(this.pipelinesPerTexture[c.id]),this.batchDrawCallPerTexture[c.id].push(o));let u=0;for(let l=0;l<t.length;l++){const p=t[l].charCodeAt(0),f=e.getChar(p);let h=o.instanceCount*_;const w=i[0]+(f.offset[0]+u)*s,b=i[1]+f.offset[1]*s,E=f.size[0]*s,P=f.size[1]*s;this.v0[0]=w,this.v0[1]=b,this.v1[0]=w+E,this.v1[1]=b,this.v2[0]=w+E,this.v2[1]=b+P,this.v3[0]=w,this.v3[1]=b+P;const D=f.textureCoords.topLeft,g=f.textureCoords.topRight,x=f.textureCoords.bottomRight,v=f.textureCoords.bottomLeft;o.vertexData[0+h]=this.v0[0],o.vertexData[1+h]=this.v0[1],o.vertexData[2+h]=D[0],o.vertexData[3+h]=D[1],o.vertexData[4+h]=r.r,o.vertexData[5+h]=r.g,o.vertexData[6+h]=r.b,o.vertexData[7+h]=this.v1[0],o.vertexData[8+h]=this.v1[1],o.vertexData[9+h]=g[0],o.vertexData[10+h]=g[1],o.vertexData[11+h]=r.r,o.vertexData[12+h]=r.g,o.vertexData[13+h]=r.b,o.vertexData[14+h]=this.v2[0],o.vertexData[15+h]=this.v2[1],o.vertexData[16+h]=x[0],o.vertexData[17+h]=x[1],o.vertexData[18+h]=r.r,o.vertexData[19+h]=r.g,o.vertexData[20+h]=r.b,o.vertexData[21+h]=this.v3[0],o.vertexData[22+h]=this.v3[1],o.vertexData[23+h]=v[0],o.vertexData[24+h]=v[1],o.vertexData[25+h]=r.r,o.vertexData[26+h]=r.g,o.vertexData[27+h]=r.b,u+=f.advance,o.instanceCount++,o.instanceCount>=A&&(o=new V(this.pipelinesPerTexture[c.id]),this.batchDrawCallPerTexture[c.id].push(o))}}frameEnd(){let e=[];for(const t in this.batchDrawCallPerTexture){const i=this.batchDrawCallPerTexture[t];for(const r of i){if(r.instanceCount===0)continue;let s=this.allocatedVertexBuffers.pop();s?this.device.queue.writeBuffer(s,0,r.vertexData):s=R.createVertexBuffer(this.device,r.vertexData),e.push(s);const c=r.pipeline;this.passEncoder.setPipeline(c.pipeline),this.passEncoder.setIndexBuffer(this.indexBuffer,"uint16"),this.passEncoder.setVertexBuffer(0,s),this.passEncoder.setBindGroup(0,c.projectionViewBindGroup),this.passEncoder.setBindGroup(1,c.textureBindGroup),this.passEncoder.drawIndexed(6*r.instanceCount)}}for(let t of e)this.allocatedVertexBuffers.push(t)}}class de{constructor(){n(this,"keyDown",{});window.addEventListener("keydown",e=>this.keyDown[e.key]=!0),window.addEventListener("keyup",e=>this.keyDown[e.key]=!1)}isKeyDown(e){return this.keyDown[e]}isKeyUp(e){return!this.keyDown[e]}}const le=`struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
}

// The vertex shader is called for each vertex in the vertex array.
// The vertex index is passed in as a builtin variable.
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

// this is our scene texture
@group(0) @binding(0)
var texSampler0: sampler;

@group(0) @binding(1)
var tex0: texture_2d<f32>;

// this is our brightness blur texture
@group(1) @binding(0)
var texSampler1: sampler;

@group(1) @binding(1)
var tex1: texture_2d<f32>;

// The fragment shader is called for each pixel in the triangle.
@fragment
fn fragmentMain(fragData: VertexOut) -> @location(0) vec4f
{
  var screenTexture = textureSample(tex0, texSampler0, fragData.texCoords).rgb;
  var brightnessBlurTexture = textureSample(tex1, texSampler1, fragData.texCoords).rgb;

  screenTexture *= (vec3f(1.0) - clamp(brightnessBlurTexture, vec3f(0.0), vec3f(1.0)));  

  return vec4f(screenTexture + brightnessBlurTexture, 1.0); // final color of the pixel
}`,U=`struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
}

// The vertex shader is called for each vertex in the vertex array.
// The vertex index is passed in as a builtin variable.
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

@group(0) @binding(0)
var texSampler: sampler;

@group(0) @binding(1)
var tex: texture_2d<f32>;

var<private> weights: array<f32, 5> = array(
  0.204163688,  // this is sampled only once, middle pixel
  0.180173822,  // this is sampled twice, left and right pixel from middle
  0.123831536, 
  0.066282245, 
  0.027630550
);

// The fragment shader is called for each pixel in the triangle.
@fragment
fn fragmentMainHorizontal(fragData: VertexOut) -> @location(0) vec4f
{
  var horizontalTexel = 1.0 / f32(textureDimensions(tex).x);
  var result = textureSample(tex, texSampler, fragData.texCoords) * weights[0];

  for(var i = 1; i < 5; i++) {
    var offset = vec2f(horizontalTexel * f32(i), 0.0);
    var sampleCoordsRight = fragData.texCoords + offset;
    var sampleCoordsLeft = fragData.texCoords - offset;

    result += textureSample(tex, texSampler, sampleCoordsRight) * weights[i]; // smple to the right
    result += textureSample(tex, texSampler, sampleCoordsLeft) * weights[i]; // smple to the left
  }

  return vec4f(result.xyz, 1.0); // final color of the pixel
}

@fragment
fn fragmentMainVertical(fragData: VertexOut) -> @location(0) vec4f
{
  var verticalTexel = 1.0 / f32(textureDimensions(tex).y);
  var result = textureSample(tex, texSampler, fragData.texCoords) * weights[0];

  for(var i = 1; i < 5; i++) {
    var offset = vec2f(0.0, verticalTexel * f32(i));
    var sampleCoordsUp = fragData.texCoords + offset;
    var sampleCoordsDown = fragData.texCoords - offset;

    result += textureSample(tex, texSampler, sampleCoordsUp) * weights[i]; // smple to the right
    result += textureSample(tex, texSampler, sampleCoordsDown) * weights[i]; // smple to the left
  }
  
  return vec4f(result.xyz, 1.0); // final color of the pixel
}`;class pe{constructor(e,t,i){n(this,"horizontalPassPipeline");n(this,"verticalPassPipeline");n(this,"pingPongTexture");n(this,"pingPongBindGroup");n(this,"gpuBuffer");this.device=e,this.width=t,this.height=i}createPipeline(e,t,i){const r=this.device.createShaderModule({code:e}),s={layout:this.device.createPipelineLayout({bindGroupLayouts:[t]}),vertex:{module:r,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:r,entryPoint:i?"fragmentMainHorizontal":"fragmentMainVertical",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};return this.device.createRenderPipeline(s)}async initialize(){this.pingPongTexture=await T.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=R.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.pingPongBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.pingPongTexture.sampler},{binding:1,resource:this.pingPongTexture.texture.createView()}]}),this.horizontalPassPipeline=this.createPipeline(U,e,!0),this.verticalPassPipeline=this.createPipeline(U,e,!1)}draw(e,t){const i=this.device.createCommandEncoder(),r=i.beginRenderPass({colorAttachments:[{view:this.pingPongTexture.texture.createView(),loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.horizontalPassPipeline),r.setVertexBuffer(0,this.gpuBuffer),r.setBindGroup(0,t),r.draw(6,1,0,0),r.end(),this.device.queue.submit([i.finish()]);const s=this.device.createCommandEncoder(),c=s.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});c.setPipeline(this.verticalPassPipeline),c.setVertexBuffer(0,this.gpuBuffer),c.setBindGroup(0,this.pingPongBindGroup),c.draw(6,1,0,0),c.end(),this.device.queue.submit([s.finish()])}}class fe{constructor(e,t,i){n(this,"gpuPipeline");n(this,"gpuBuffer");n(this,"sceneTexture");n(this,"sceneTextureBindGroup");n(this,"brightnessTexture");n(this,"brightnessTextureBindGroup");n(this,"blurEffect");this.device=e,this.width=t,this.height=i}async initialize(){this.sceneTexture=await T.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.brightnessTexture=await T.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=R.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.sceneTextureBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.sceneTexture.sampler},{binding:1,resource:this.sceneTexture.texture.createView()}]}),this.brightnessTextureBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.brightnessTexture.sampler},{binding:1,resource:this.brightnessTexture.texture.createView()}]});const t=this.device.createShaderModule({code:le}),i={layout:this.device.createPipelineLayout({bindGroupLayouts:[e,e]}),vertex:{module:t,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:t,entryPoint:"fragmentMain",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};this.gpuPipeline=this.device.createRenderPipeline(i),this.blurEffect=new pe(this.device,this.width,this.height),await this.blurEffect.initialize()}draw(e){this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup),this.blurEffect.draw(this.brightnessTexture.texture.createView(),this.brightnessTextureBindGroup);const t=this.device.createCommandEncoder(),i=t.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});i.setPipeline(this.gpuPipeline),i.setVertexBuffer(0,this.gpuBuffer),i.setBindGroup(0,this.sceneTextureBindGroup),i.setBindGroup(1,this.brightnessTextureBindGroup),i.draw(6,1,0,0),i.end(),this.device.queue.submit([t.finish()])}}class xe{constructor(e,t,i){n(this,"horizontalPassPipeline");n(this,"horizontalPassRenderTexture");n(this,"horizontalPassBindGroup");n(this,"verticalPassPipeline");n(this,"verticalPassRenderTexture");n(this,"verticalPassBindGroup");n(this,"doHorizontalPass",!0);n(this,"doVerticalPass",!0);n(this,"gpuBuffer");this.device=e,this.width=t,this.height=i}createPipeline(e,t,i){const r=this.device.createShaderModule({code:e}),s={layout:this.device.createPipelineLayout({bindGroupLayouts:[t]}),vertex:{module:r,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:r,entryPoint:i?"fragmentMainHorizontal":"fragmentMainVertical",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};return this.device.createRenderPipeline(s)}getRenderTexture(){return this.doHorizontalPass?this.horizontalPassRenderTexture:this.doVerticalPass?this.verticalPassRenderTexture:null}async initialize(){this.horizontalPassRenderTexture=await T.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.verticalPassRenderTexture=await T.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=R.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.horizontalPassBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.horizontalPassRenderTexture.sampler},{binding:1,resource:this.horizontalPassRenderTexture.texture.createView()}]}),this.verticalPassBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.verticalPassRenderTexture.sampler},{binding:1,resource:this.verticalPassRenderTexture.texture.createView()}]}),this.horizontalPassPipeline=this.createPipeline(U,e,!0),this.verticalPassPipeline=this.createPipeline(U,e,!1)}draw(e){if(this.doHorizontalPass){const t=this.doVerticalPass?this.verticalPassRenderTexture.texture.createView():e,i=this.device.createCommandEncoder(),r=i.beginRenderPass({colorAttachments:[{view:t,loadOp:"clear",storeOp:"store"}]});r.setPipeline(this.horizontalPassPipeline),r.setVertexBuffer(0,this.gpuBuffer),r.setBindGroup(0,this.horizontalPassBindGroup),r.draw(6,1,0,0),r.end(),this.device.queue.submit([i.finish()])}if(this.doVerticalPass){const t=this.device.createCommandEncoder(),i=t.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});i.setPipeline(this.verticalPassPipeline),i.setVertexBuffer(0,this.gpuBuffer),i.setBindGroup(0,this.verticalPassBindGroup),i.draw(6,1,0,0),i.end(),this.device.queue.submit([t.finish()])}}}const ve=`struct VertexOut {
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


fn brownConradyDistortion(uv: vec2<f32>, scalar: f32) -> vec2<f32>
{
// AH!!!    uv = uv * 2.0 - 1.0;
    var uvv = (uv - 0.5 ) * 2.0;
    
    if( true )
    {
        // positive values of K1 give barrel distortion, negative give pincushion
        var barrelDistortion1 = -0.02 * scalar; // K1 in text books
        var barrelDistortion2 = 0.0 * scalar; // K2 in text books

        var r2 = dot(uvv,uvv);
        uvv *= 1.0 + barrelDistortion1 * r2 + barrelDistortion2 * r2 * r2;
        //uv *= 1.0 + barrelDistortion1 * r2;
    }
    
    // tangential distortion (due to off center lens elements)
    // is not modeled in this function, but if it was, the terms would go here
//    return uv * 0.5 + 0.5;
   return (uvv / 2.0) + 0.5;
}

fn barrelDistortion(p: vec2<f32>, amt: vec2<f32> ) -> vec2<f32>
{
    var pp = 2.0 * p - 1.0;

    var maxBarrelPower = sqrt(5.0);
    var radius = dot(pp,pp); //faster but doesn't match above accurately
    pp *= pow(vec2(radius), maxBarrelPower * amt);

    return pp * 0.5 + 0.5;
}


// var NoiseSeed: f32;

fn randomFloat() -> f32 {
  var NoiseSeed: f32;
  NoiseSeed = sin(NoiseSeed) * 84522.13219145687;
  return fract(NoiseSeed);
}

fn ACESFilm(x: vec3<f32>) -> vec3<f32>
{
    var a = 2.51;
    var b = 0.03;
    var c = 2.43;
    var d = 0.59;
    var e = 0.14;
    return (x*(a*x+b))/(x*(c*x+d)+e);
}

@fragment
fn fragmentMain(
    vs_out: VertexOut
) -> @location(0) vec4<f32> {
    // Apply barrel distortion (CRT curvature)
    var curvatureAmount: f32 = 0.22; // Adjust for desired curvature
    var center: vec2<f32> = vec2<f32>(0.5, 0.5); // Center of distortion
    var delta: vec2<f32> = vs_out.texCoords.xy - center;
    var r2: f32 = dot(delta, delta);
    var distortion: f32 = 1.0 + curvatureAmount * r2;
    var distortedCoords: vec2<f32> = center + delta * distortion;

    // Sample the scene texture with curvature
    var sceneColor: vec3<f32> = textureSample(tex0, texSampler0, distortedCoords).rgb;

    // Simulate scanlines
    var scanlineIntensity: f32 = 0.3; // Adjust as needed
    var scanlineFrequency: f32 = 1000.0; // Increase for denser scanlines
    var scanlineOffset: f32 = sin(timeValue) * 5; // Oscillate the scanline phase
    var scanlineValue: f32 = sin(distortedCoords.y * scanlineFrequency + scanlineOffset);
    sceneColor -= scanlineIntensity * vec3<f32>(scanlineValue);

    // Simulate phosphor glow (bloom)
    var bloomIntensity: f32 = 0.3; // Adjust as needed
    var bloomColor: vec3<f32> = vec3<f32>(1.0, 1.0, 0.8); // Yellowish glow
    sceneColor += bloomIntensity * bloomColor;

    // Add vignetting effect
    var vignetteIntensity: f32 = 0.00001; // Adjust for desired strength
    var vignetteDistance: f32 = length(distortedCoords.xy - center);
    var vignetteFactor: f32 = smoothstep(1.0, vignetteIntensity, vignetteDistance);
    sceneColor *= vignetteFactor * 1.1;

    return vec4<f32>(sceneColor, 1.0);
}`;class ge{constructor(e,t,i){n(this,"gpuPipeline");n(this,"gpuBuffer");n(this,"screenTexture");n(this,"screenTextureBindGroup");n(this,"timeValue",.5);n(this,"timeValueBuffer");n(this,"timeValueBindGroup");this.device=e,this.width=t,this.height=i}async initialize(){this.screenTexture=await T.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=R.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1])),this.timeValueBuffer=R.createUniformBuffer(this.device,new Float32Array([this.timeValue]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]}),t=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{}}]});this.screenTextureBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.screenTexture.sampler},{binding:1,resource:this.screenTexture.texture.createView()}]}),this.timeValueBindGroup=this.device.createBindGroup({layout:t,entries:[{binding:0,resource:{buffer:this.timeValueBuffer,offset:0,size:Float32Array.BYTES_PER_ELEMENT}}]});const i=this.device.createShaderModule({code:ve}),r={layout:this.device.createPipelineLayout({bindGroupLayouts:[e,t]}),vertex:{module:i,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:i,entryPoint:"fragmentMain",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};this.gpuPipeline=this.device.createRenderPipeline(r)}draw(e){const t=this.device.createCommandEncoder(),i=t.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});this.device.queue.writeBuffer(this.timeValueBuffer,0,new Float32Array([this.timeValue])),i.setPipeline(this.gpuPipeline),i.setVertexBuffer(0,this.gpuBuffer),i.setBindGroup(0,this.screenTextureBindGroup),i.setBindGroup(1,this.timeValueBindGroup),i.draw(6,1,0,0),i.end(),this.device.queue.submit([t.finish()])}}const me=`struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
}

// The vertex shader is called for each vertex in the vertex array.
// The vertex index is passed in as a builtin variable.
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

@group(0) @binding(0)
var texSampler: sampler;

@group(0) @binding(1)
var tex: texture_2d<f32>;

// The fragment shader is called for each pixel in the triangle.
@fragment
fn fragmentMain(fragData: VertexOut) -> @location(0) vec4f
{
  var screenTexture = textureSample(tex, texSampler, fragData.texCoords);
  var average = (screenTexture.r + screenTexture.g + screenTexture.b) / 3.0;
  return vec4f(average, average, average, 1.0); // final color of the pixel
}`;class we{constructor(e,t,i){n(this,"texture");n(this,"gpuPipeline");n(this,"gpuBuffer");n(this,"textureBindGroup");this.device=e,this.width=t,this.height=i}async initialize(){this.texture=await T.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=R.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.textureBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.texture.sampler},{binding:1,resource:this.texture.texture.createView()}]});const t=this.device.createShaderModule({code:me}),i={layout:this.device.createPipelineLayout({bindGroupLayouts:[e]}),vertex:{module:t,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:t,entryPoint:"fragmentMain",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};this.gpuPipeline=this.device.createRenderPipeline(i)}draw(e){const t=this.device.createCommandEncoder(),i=t.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});i.setPipeline(this.gpuPipeline),i.setVertexBuffer(0,this.gpuBuffer),i.setBindGroup(0,this.textureBindGroup),i.draw(6,1,0,0),i.end(),this.device.queue.submit([t.finish()])}}const ye=`struct VertexOut {
  @builtin(position) position : vec4f, // The position of the vertex in clip space
  @location(0) texCoords: vec2f,
}

// The vertex shader is called for each vertex in the vertex array.
// The vertex index is passed in as a builtin variable.
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

// this is our scene texture
@group(0) @binding(0)
var texSampler0: sampler;

@group(0) @binding(1)
var tex0: texture_2d<f32>;

// this is our combine texture
@group(1) @binding(0)
var texSampler1: sampler;

@group(1) @binding(1)
var tex1: texture_2d<f32>;

// mix value
@group(2) @binding(0)
var<uniform> mixValue: f32;


// The fragment shader is called for each pixel in the triangle.
@fragment
fn fragmentMain(fragData: VertexOut) -> @location(0) vec4f
{
  var screenTexture = textureSample(tex0, texSampler0, fragData.texCoords);
  var combineTexture = textureSample(tex1, texSampler1, fragData.texCoords);
  var mixColor = mix(screenTexture.xyz, combineTexture.xyz, mixValue);
  return vec4f(mixColor, 1.0); // final color of the pixel
}`;class be{constructor(e,t,i){n(this,"gpuPipeline");n(this,"gpuBuffer");n(this,"screenTexture");n(this,"screenTextureBindGroup");n(this,"combineTexture");n(this,"combineTextureBindGroupLayout");n(this,"combineTextureBindGroup");n(this,"mixValue",.5);n(this,"mixValueBuffer");n(this,"mixValueBindGroup");this.device=e,this.width=t,this.height=i}setCombineTexture(e){this.combineTexture=e,this.combineTextureBindGroup=this.device.createBindGroup({layout:this.combineTextureBindGroupLayout,entries:[{binding:0,resource:this.combineTexture.sampler},{binding:1,resource:this.combineTexture.texture.createView()}]})}async initialize(){this.screenTexture=await T.createEmptyTexture(this.device,this.width,this.height,"bgra8unorm"),this.gpuBuffer=R.createVertexBuffer(this.device,new Float32Array([-1,1,0,0,1,1,1,0,-1,-1,0,1,-1,-1,0,1,1,1,1,0,1,-1,1,1])),this.mixValueBuffer=R.createUniformBuffer(this.device,new Float32Array([this.mixValue]));const e=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});this.combineTextureBindGroupLayout=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});const t=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{}}]});this.screenTextureBindGroup=this.device.createBindGroup({layout:e,entries:[{binding:0,resource:this.screenTexture.sampler},{binding:1,resource:this.screenTexture.texture.createView()}]}),this.mixValueBindGroup=this.device.createBindGroup({layout:t,entries:[{binding:0,resource:{buffer:this.mixValueBuffer,offset:0,size:Float32Array.BYTES_PER_ELEMENT}}]});const i=this.device.createShaderModule({code:ye}),r={layout:this.device.createPipelineLayout({bindGroupLayouts:[e,this.combineTextureBindGroupLayout,t]}),vertex:{module:i,entryPoint:"vertexMain",buffers:[{arrayStride:4*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:2*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}]},fragment:{module:i,entryPoint:"fragmentMain",targets:[{format:"bgra8unorm"}]},primitive:{topology:"triangle-list"}};this.gpuPipeline=this.device.createRenderPipeline(r)}draw(e){const t=this.device.createCommandEncoder(),i=t.beginRenderPass({colorAttachments:[{view:e,loadOp:"clear",storeOp:"store"}]});this.device.queue.writeBuffer(this.mixValueBuffer,0,new Float32Array([this.mixValue])),i.setPipeline(this.gpuPipeline),i.setVertexBuffer(0,this.gpuBuffer),i.setBindGroup(0,this.screenTextureBindGroup),i.setBindGroup(1,this.combineTextureBindGroup),i.setBindGroup(2,this.mixValueBindGroup),i.draw(6,1,0,0),i.end(),this.device.queue.submit([t.finish()])}}class Te{constructor(e,t,i){this.device=e,this.width=t,this.height=i}async createPostProcessEffect(){const e=new we(this.device,this.width,this.height);return await e.initialize(),e}async createTextureEffect(){const e=new be(this.device,this.width,this.height);return await e.initialize(),e}async createBlurEffect(){const e=new xe(this.device,this.width,this.height);return await e.initialize(),e}async createBloomEffect(){const e=new fe(this.device,this.width,this.height);return await e.initialize(),e}async createCrtEffect(){const e=new ge(this.device,this.width,this.height);return await e.initialize(),e}}class Be{constructor(){n(this,"lastTime",0);n(this,"canvas");n(this,"context");n(this,"device");n(this,"passEncoder");n(this,"spriteRenderer");n(this,"inputManager");n(this,"effectsFactory");n(this,"gameBounds",C());n(this,"onUpdate",()=>{});n(this,"onDraw",()=>{});n(this,"destinationTexture",null);n(this,"destinationTexture2",null)}setDestinationTexture(e){this.destinationTexture=e}setDestinationTexture2(e){this.destinationTexture2=e}getCanvasTexture(){return this.context.getCurrentTexture()}async initialize(){if(this.canvas=document.getElementById("canvas"),this.context=this.canvas.getContext("webgpu"),this.gameBounds[0]=this.canvas.width,this.gameBounds[1]=this.canvas.height,!this.context){console.error("WebGPU not supported"),alert("WebGPU not supported");return}const e=await navigator.gpu.requestAdapter();if(!e){console.error("No adapter found"),alert("No adapter found");return}this.device=await e.requestDevice(),await B.initialize(this.device),this.context.configure({device:this.device,format:navigator.gpu.getPreferredCanvasFormat()}),this.spriteRenderer=new ue(this.device,this.canvas.width,this.canvas.height),this.spriteRenderer.initialize(),this.inputManager=new de,this.effectsFactory=new Te(this.device,this.canvas.width,this.canvas.height),this.destinationTexture2=(await T.createEmptyTexture(this.device,this.canvas.width,this.canvas.height,"bgra8unorm")).texture}draw(){const e=performance.now(),t=e-this.lastTime;this.lastTime=e,this.onUpdate(t);const i=this.device.createCommandEncoder(),r=this.destinationTexture!==null?this.destinationTexture.createView():this.context.getCurrentTexture().createView(),s={colorAttachments:[{clearValue:{r:.8,g:.8,b:.8,a:1},loadOp:"clear",storeOp:"store",view:r},{clearValue:{r:.8,g:.8,b:.8,a:1},loadOp:"clear",storeOp:"store",view:this.destinationTexture2.createView()}]};this.passEncoder=i.beginRenderPass(s),this.spriteRenderer.framePass(this.passEncoder),this.onDraw(t),this.spriteRenderer.frameEnd(),this.passEncoder.end(),this.device.queue.submit([i.finish()]),window.requestAnimationFrame(()=>this.draw())}}const Ee=.25;class Pe{constructor(e,t){n(this,"drawRect");n(this,"drawRect2");this.gameWidth=e,this.gameHeight=t,this.drawRect=new G(0,0,this.gameWidth,this.gameHeight),this.drawRect2=new G(0,-this.gameHeight,this.gameWidth,this.gameHeight)}update(e){if(this.drawRect.y+=Ee*e,this.drawRect2.y=this.drawRect.y-this.gameHeight,this.drawRect.y>this.gameHeight){const t=this.drawRect;this.drawRect=this.drawRect2,this.drawRect2=t}}draw(e){e.drawSprite(B.backgroundTexture,this.drawRect),e.drawSprite(B.backgroundTexture,this.drawRect2)}}class I{constructor(){n(this,"radius",0);n(this,"x",0);n(this,"y",0)}update(e){let t=e.width/2;e.height<e.width&&(t=e.height/2),this.x=e.x+this.radius,this.y=e.y+this.radius,this.radius=t}intersects(e){const t=this.x-e.x,i=this.y-e.y,r=Math.sqrt(t*t+i*i),s=this.radius+e.radius;return r<s}}const De=.75;class Re{constructor(){n(this,"drawRect");n(this,"sourceRect");n(this,"texture");n(this,"active",!0);n(this,"collider",new I);const e=B.sprites.laserBlue01;this.texture=e.texture,this.drawRect=e.drawRect.copy(),this.sourceRect=e.sourceRect.copy()}spawn(e){this.active=!0,this.drawRect.x=e.drawRect.x+e.drawRect.width/2-this.drawRect.width/2,this.drawRect.y=e.drawRect.y-this.drawRect.height}update(e){this.drawRect.y-=De*e,this.collider.update(this.drawRect),this.drawRect.y+this.drawRect.height<0&&(this.active=!1)}draw(e){e.drawSpriteSource(this.texture,this.drawRect,this.sourceRect)}}const Se=250;class Ce{constructor(e){n(this,"pool",[]);n(this,"timeToSpawn",0);this.player=e}create(){let e=this.pool.find(t=>!t.active);e||(e=new Re,this.pool.push(e)),e.spawn(this.player)}intersectsEnemy(e){for(const t of this.pool)if(t.active&&t.collider.intersects(e.collider))return t.active=!1,!0;return!1}update(e){this.timeToSpawn+=e,this.timeToSpawn>Se&&(this.timeToSpawn=0,this.create());for(const t of this.pool)t.active&&t.update(e)}draw(e){for(const t of this.pool)t.active&&t.draw(e)}}const Y=["meteorBrown_big1","meteorBrown_big2","meteorBrown_big3","meteorBrown_big4","meteorBrown_med1","meteorBrown_med3","meteorGrey_big1","meteorGrey_big2","meteorGrey_big3","meteorGrey_big4","meteorGrey_med1","meteorGrey_med2"],j=.05,Ge=.25;class Me{constructor(){n(this,"active",!0);n(this,"drawRect");n(this,"texture");n(this,"sourceRect");n(this,"speed",0);n(this,"rotation",0);n(this,"rotationSpeed",0);n(this,"rotationOrigin",S(.5,.5));n(this,"collider",new I);const e=Y[Math.floor(Math.random()*Y.length)],t=B.sprites[e];this.texture=t.texture,this.drawRect=t.drawRect.copy(),this.sourceRect=t.sourceRect.copy(),this.speed=Math.random()*(Ge-j)+j,this.rotationSpeed=(Math.random()-.5)*.005}update(e){this.drawRect.y+=this.speed*e,this.rotation+=this.rotationSpeed*e,this.collider.update(this.drawRect)}draw(e){e.drawSpriteSource(this.texture,this.drawRect,this.sourceRect,void 0,this.rotation,this.rotationOrigin)}}const Ve=1e3;class Ae{constructor(e,t,i,r,s,c){n(this,"timeToSpawn",0);n(this,"pool",[]);this.player=e,this.explosionManager=t,this.bulletManager=i,this.gameWidth=r,this.gameHeight=s,this.highScore=c}spawnEnemy(){if(this.timeToSpawn>Ve){this.timeToSpawn=0;let e=this.pool.find(t=>!t.active);e||(e=new Me,this.pool.push(e)),e.active=!0,e.drawRect.x=Math.random()*(this.gameWidth-e.drawRect.width),e.drawRect.y=-e.drawRect.height}}update(e){this.timeToSpawn+=e,this.spawnEnemy();for(const t of this.pool)t.active&&(t.update(e),t.collider.intersects(this.player.collider)&&(t.active=!1,this.explosionManager.create(t.drawRect)),this.bulletManager.intersectsEnemy(t)&&(t.active=!1,this.explosionManager.create(t.drawRect),this.highScore.currentScore+=10),t.drawRect.y>this.gameHeight&&(t.active=!1))}draw(e){for(const t of this.pool)t.active&&t.draw(e)}}const Fe=1e3/30;class Le{constructor(){n(this,"playing",!1);n(this,"timeToNextFrame",0);n(this,"sourceRect");n(this,"drawRect");n(this,"currentCol",0);n(this,"currentRow",0);n(this,"cols",4);n(this,"rows",4);this.sourceRect=new G(0,0,64,64),this.drawRect=new G(0,0,64,64)}play(e){this.playing=!0,this.timeToNextFrame=0,this.currentCol=0,this.currentRow=0,this.drawRect=e.copy()}update(e){this.playing&&(this.timeToNextFrame+=e,this.timeToNextFrame>Fe&&(this.timeToNextFrame=0,this.currentCol++,this.currentCol>=this.cols&&(this.currentCol=0,this.currentRow++,this.currentRow>=this.rows&&(this.currentRow=0,this.playing=!1))))}draw(e){this.sourceRect.x=this.currentCol*this.sourceRect.width,this.sourceRect.y=this.currentRow*this.sourceRect.height,e.drawSpriteSource(B.explosionTexture,this.drawRect,this.sourceRect)}}class Oe{constructor(){n(this,"pool",[])}create(e){let t=this.pool.find(i=>!i.playing);t||(t=new Le,this.pool.push(t)),t.play(e)}update(e){for(const t of this.pool)t.playing&&t.update(e)}draw(e){for(const t of this.pool)t.playing&&t.draw(e)}}const H=.25;class _e{constructor(e,t,i){n(this,"movementDirection",C());n(this,"drawRect");n(this,"sourceRect");n(this,"texture");n(this,"collider",new I);this.inputManager=e,this.gameWidth=t,this.gameHeight=i;const r=B.sprites.playerShip1_blue;this.texture=r.texture,this.drawRect=r.drawRect.copy(),this.sourceRect=r.sourceRect.copy()}clampToBounds(){this.drawRect.x<0?this.drawRect.x=0:this.drawRect.x+this.drawRect.width>this.gameWidth&&(this.drawRect.x=this.gameWidth-this.drawRect.width),this.drawRect.y<0?this.drawRect.y=0:this.drawRect.y+this.drawRect.height>this.gameHeight&&(this.drawRect.y=this.gameHeight-this.drawRect.height)}update(e){this.movementDirection[0]=0,this.movementDirection[1]=0,this.inputManager.isKeyDown("ArrowLeft")?this.movementDirection[0]=-1:this.inputManager.isKeyDown("ArrowRight")&&(this.movementDirection[0]=1),this.inputManager.isKeyDown("ArrowUp")?this.movementDirection[1]=-1:this.inputManager.isKeyDown("ArrowDown")&&(this.movementDirection[1]=1),ne(this.movementDirection,this.movementDirection),this.drawRect.x+=this.movementDirection[0]*H*e,this.drawRect.y+=this.movementDirection[1]*H*e,this.clampToBounds(),this.collider.update(this.drawRect)}draw(e){e.drawSpriteSource(this.texture,this.drawRect,this.sourceRect)}}class Ue{constructor(){n(this,"position",S(10,10));n(this,"currentScore",0)}draw(e){e.drawString(B.spriteFont,`Score: ${this.currentScore}`,this.position,void 0,.5)}}const y=new Be;y.initialize().then(async()=>{const a=new _e(y.inputManager,y.gameBounds[0],y.gameBounds[1]),e=new Pe(y.gameBounds[0],y.gameBounds[1]),t=new Oe,i=new Ce(a),r=new Ue,s=new Ae(a,t,i,y.gameBounds[0],y.gameBounds[1],r),c=await y.effectsFactory.createBloomEffect(),d=await y.effectsFactory.createCrtEffect();y.onUpdate=o=>{a.update(o),e.update(o),s.update(o),i.update(o),t.update(o)},y.onDraw=o=>{e.draw(y.spriteRenderer),a.draw(y.spriteRenderer),s.draw(y.spriteRenderer),i.draw(y.spriteRenderer),t.draw(y.spriteRenderer),r.draw(y.spriteRenderer),d.timeValue=o,y.setDestinationTexture(d.screenTexture.texture),d.draw(y.getCanvasTexture().createView()),y.setDestinationTexture(c.sceneTexture.texture),y.setDestinationTexture2(c.brightnessTexture.texture),c.draw(d.screenTexture.texture.createView())},y.draw()});
