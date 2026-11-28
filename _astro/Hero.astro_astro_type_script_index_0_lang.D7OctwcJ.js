import{o as ke}from"./now-playing.BGKRPnfV.js";const st=128,at=768,it=512,ct=12e5,lt=20,ut=5,dt=.25,Ne=1.3,ft=.8,mt=.004,Oe=560,Z=[{x:.1,y:.7},{x:.9,y:.66},{x:.2,y:.3},{x:.82,y:.28}],Xe=.03,Be=.45,Ge=1.5,pt=.08,vt=3,H=24,xt=.075,de=.3,fe=.9,qe=1.2,$e=.6,Et=de+fe+qe+$e,ht=.04,Tt=4,yt=3,He=1.6,ze=.3,gt=1e3/70,Rt=1e3/35,_t=5,At=1.2,ue=[[157,78,221],[255,122,24],[24,188,242],[255,0,110]].map(([c,i,l])=>[c/255,i/255,l/255]),Mt=`#version 300 es
in vec2 aPos;
uniform vec2 texel;
out vec2 vUv, vL, vR, vT, vB;
void main() {
  vUv = aPos * 0.5 + 0.5;
  vL = vUv - vec2(texel.x, 0.0);
  vR = vUv + vec2(texel.x, 0.0);
  vT = vUv + vec2(0.0, texel.y);
  vB = vUv - vec2(0.0, texel.y);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`,_=c=>`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv, vL, vR, vT, vB;
out vec4 o;
${c}`,z=8,bt=_(`
#define MAX ${z}
uniform sampler2D target;
uniform float aspect;
uniform int count;
uniform vec3 points[MAX];
uniform vec3 colors[MAX];
void main() {
  vec3 sum = texture(target, vUv).xyz;
  for (int i = 0; i < MAX; i++) {
    if (i >= count) break;
    vec2 p = vUv - points[i].xy;
    p.x *= aspect;
    sum += exp(-dot(p, p) / points[i].z) * colors[i];
  }
  o = vec4(sum, 1.0);
}`),Pt=_(`
#define MAX ${H}
uniform sampler2D target, glyphs;
uniform float aspect, glyphCount;
uniform int count;
uniform vec4 places[MAX];
uniform vec4 looks[MAX];
uniform vec3 colors[MAX];
void main() {
  vec3 dye = texture(target, vUv).xyz;
  for (int i = 0; i < MAX; i++) {
    if (i >= count) break;
    vec4 at = places[i];
    vec2 p = vUv - at.xy;
    p.x *= aspect;
    float size = at.z;
    if (dot(p, p) > size * size * 1.5) continue;
    p = mat2(cos(at.w), -sin(at.w), sin(at.w), cos(at.w)) * p;
    vec2 g = p / size + 0.5;
    float m = 0.0;
    if (g.x >= 0.0 && g.x <= 1.0 && g.y >= 0.0 && g.y <= 1.0)
      m = textureLod(glyphs, vec2((looks[i].x + g.x) / glyphCount, g.y), 0.0).a;
    float halo = smoothstep(size * 1.1, size * 0.4, length(p)) * (1.0 - m);
    dye = mix(dye, colors[i], looks[i].y * m) * (1.0 - looks[i].z * halo);
  }
  o = vec4(dye, 1.0);
}`),Ut=_(`
uniform sampler2D velocity, source;
uniform vec2 texel;
uniform float dt, dissipation;
void main() {
  vec2 from = vUv - dt * texture(velocity, vUv).xy * texel;
  o = vec4(texture(source, from).xyz / (1.0 + dissipation * dt), 1.0);
}`),wt=_(`
uniform sampler2D velocity;
void main() {
  vec2 c = texture(velocity, vUv).xy;
  float l = vL.x < 0.0 ? -c.x : texture(velocity, vL).x;
  float r = vR.x > 1.0 ? -c.x : texture(velocity, vR).x;
  float t = vT.y > 1.0 ? -c.y : texture(velocity, vT).y;
  float b = vB.y < 0.0 ? -c.y : texture(velocity, vB).y;
  o = vec4(0.5 * (r - l + t - b), 0.0, 0.0, 1.0);
}`),St=_(`
uniform sampler2D velocity;
void main() {
  float l = texture(velocity, vL).y;
  float r = texture(velocity, vR).y;
  float t = texture(velocity, vT).x;
  float b = texture(velocity, vB).x;
  o = vec4(0.5 * (r - l - t + b), 0.0, 0.0, 1.0);
}`),It=_(`
uniform sampler2D velocity, curl;
uniform float strength, dt;
void main() {
  float l = texture(curl, vL).x;
  float r = texture(curl, vR).x;
  float t = texture(curl, vT).x;
  float b = texture(curl, vB).x;
  float c = texture(curl, vUv).x;
  vec2 force = 0.5 * vec2(abs(t) - abs(b), abs(r) - abs(l));
  force *= strength * c / (length(force) + 1e-4);
  force.y *= -1.0;
  vec2 v = texture(velocity, vUv).xy + force * dt;
  o = vec4(clamp(v, -1000.0, 1000.0), 0.0, 1.0);
}`),Lt=_(`
uniform sampler2D pressure, divergence;
void main() {
  float l = texture(pressure, vL).x;
  float r = texture(pressure, vR).x;
  float t = texture(pressure, vT).x;
  float b = texture(pressure, vB).x;
  o = vec4((l + r + b + t - texture(divergence, vUv).x) * 0.25, 0.0, 0.0, 1.0);
}`),Ft=_(`
uniform sampler2D pressure, velocity;
void main() {
  float l = texture(pressure, vL).x;
  float r = texture(pressure, vR).x;
  float t = texture(pressure, vT).x;
  float b = texture(pressure, vB).x;
  o = vec4(texture(velocity, vUv).xy - vec2(r - l, t - b), 0.0, 1.0);
}`),Dt=_(`
uniform sampler2D source;
uniform float value;
void main() { o = value * texture(source, vUv); }`),Ct=_(`
uniform sampler2D dye;
uniform float strength, deepen;
void main() {
  vec3 c = 1.0 - exp(-texture(dye, vUv).rgb * 1.4);
  float edge = smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);
  float a = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0) * strength * edge;
  c = mix(c, pow(c, vec3(1.8)) * 1.3, deepen);
  o = vec4(c * strength * edge, a);
}`),me=3;function Nt(){const i=document.createElement("canvas");i.width=128*me,i.height=128;const l=i.getContext("2d");l.fillStyle="#fff";const v=(T,E)=>{l.beginPath(),l.ellipse(T,E,19,13,-.4,0,Math.PI*2),l.fill()},f=(T,E,e)=>l.fillRect(T-3.5,E,7,e-E);return v(52,96),f(68,22,92),l.beginPath(),l.moveTo(64.5,22),l.bezierCurveTo(72,44,102,50,92,84),l.bezierCurveTo(96,58,78,52,64.5,46),l.fill(),l.translate(128,0),v(56,96),f(72,20,92),l.translate(128,0),v(32,100),v(92,88),f(48,30,96),f(108,18,84),l.beginPath(),l.moveTo(44.5,30),l.lineTo(111.5,16),l.lineTo(111.5,32),l.lineTo(44.5,46),l.fill(),i}function Ot(c,i,l){const v=matchMedia("(prefers-reduced-motion: reduce)");let f=v.matches;const T=matchMedia("(hover: hover) and (pointer: fine)");let E=!1;const e=i.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"});if(!e||!(e.getExtension("EXT_color_buffer_float")||e.getExtension("EXT_color_buffer_half_float")))return;const pe=(t,o)=>{const r=e.createShader(t);return e.shaderSource(r,o),e.compileShader(r),r},je=pe(e.VERTEX_SHADER,Mt),Je=t=>{const o=e.createProgram();if(e.attachShader(o,je),e.attachShader(o,pe(e.FRAGMENT_SHADER,t)),e.bindAttribLocation(o,0,"aPos"),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS))return null;const r=new Map,n=s=>(r.has(s)||r.set(s,e.getUniformLocation(o,s)),r.get(s));return{use:()=>e.useProgram(o),set:(s,...a)=>a.length===1?e.uniform1f(n(s),a[0]):a.length===2?e.uniform2f(n(s),a[0],a[1]):e.uniform3f(n(s),a[0],a[1],a[2]),setInt:(s,a)=>e.uniform1i(n(s),a),setVec3s:(s,a)=>e.uniform3fv(n(s),a),setVec4s:(s,a)=>e.uniform4fv(n(s),a),bind:(s,a,u)=>{e.activeTexture(e.TEXTURE0+u),e.bindTexture(e.TEXTURE_2D,a.tex),e.uniform1i(n(s),u)}}},ve=[bt,Pt,Ut,wt,St,It,Lt,Ft,Dt,Ct].map(Je);if(ve.some(t=>!t))return;const[A,g,M,Q,ee,L,V,Y,W,C]=ve;e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);const xe=e.createTexture();e.bindTexture(e.TEXTURE_2D,xe),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,Nt()),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const Ee=t=>{const o=c.clientWidth/Math.max(1,c.clientHeight),r=Math.round(t*Math.max(o,1/o));return o>=1?[r,t]:[t,r]},k=(t,o)=>{const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,o,0,e.RGBA,e.HALF_FLOAT,null);const n=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE?null:(e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),{fbo:n,tex:r,w:t,h:o,texel:[1/t,1/o]})},te=(t,o)=>{const r=k(t,o),n=k(t,o);if(!r||!n)return null;const s={read:r,write:n,swap(){[s.read,s.write]=[s.write,s.read]}};return s},[q,$]=Ee(st),[Ze,Qe]=Ee(T.matches?at:it),d=te(q,$),x=te(Ze,Qe),b=te(q,$),oe=k(q,$),re=k(q,$);if(!d||!x||!b||!oe||!re)return;const h=t=>{t?(e.viewport(0,0,t.w,t.h),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo)):(e.viewport(0,0,i.width,i.height),e.bindFramebuffer(e.FRAMEBUFFER,null)),e.drawArrays(e.TRIANGLE_STRIP,0,4)},he=new Float32Array(z*3),Te=new Float32Array(z*3),ye=new Float32Array(z*3);let N=0;const ne=()=>{N&&(A.use(),A.set("texel",...d.read.texel),A.set("aspect",i.width/Math.max(1,i.height)),A.setInt("count",N),A.setVec3s("points",he),A.bind("target",d.read,0),A.setVec3s("colors",Te),h(d.write),d.swap(),A.bind("target",x.read,0),A.setVec3s("colors",ye),h(x.write),x.swap(),N=0)},se=(t,o,r,n,s,a=mt)=>{N===z&&ne();const u=i.width/Math.max(1,i.height),m=N++*3;he.set([t,o,a*Math.max(1,u)],m),Te.set([r,n,0],m),ye.set(s,m)};let U=[];const ge=new Float32Array(H*4),Re=new Float32Array(H*4),_e=new Float32Array(H*3),Ae=(t,o,r,n,s)=>{const a=i.width/Math.max(1,i.height);for(let u=0;u<s&&U.length<H;u++){const m=u===0?0:.05,y={x:t+(Math.random()-.5)*m/a,y:o+(Math.random()-.5)*m,size:xt*(.55+Math.random()*.8),angle:(Math.random()-.5)*.7,glyph:Math.floor(Math.random()*me),color:K(r+(Math.random()-.5)*.6,n),age:0,sway:Math.random()*Math.PI*2,rise:ht*(.6+Math.random()*.8)};U.push(y)}},et=t=>{let o=0;for(const r of U){r.age+=t,r.y+=r.rise*t,r.x+=Math.sin(r.sway+r.age*3)*.01*t;const n=(r.age-de)/fe,s=(r.age-de-fe-qe)/$e;if(n<=0)continue;const a=Math.min(n,1)**2,u=Math.min(1,t*(n<1?6*a:8)),m=n<1?t*2.5:0,y=s<0?a:Math.max(0,1-s);ge.set([r.x,r.y,r.size,r.angle],o*4),Re.set([r.glyph,u,m,0],o*4),_e.set(r.color.map(D=>D*y),o*3),o++}U=U.filter(r=>r.age<Et),o&&(g.use(),g.set("texel",...x.read.texel),g.set("aspect",i.width/Math.max(1,i.height)),g.set("glyphCount",me),g.setInt("count",o),g.setVec4s("places",ge),g.setVec4s("looks",Re),g.setVec3s("colors",_e),g.bind("target",x.read,0),g.bind("glyphs",{tex:xe},1),h(x.write),x.swap())},tt=t=>{const o=d.read.texel;ee.use(),ee.set("texel",...o),ee.bind("velocity",d.read,0),h(re),L.use(),L.set("texel",...o),L.bind("velocity",d.read,0),L.bind("curl",re,1),L.set("strength",ut),L.set("dt",t),h(d.write),d.swap(),Q.use(),Q.set("texel",...o),Q.bind("velocity",d.read,0),h(oe),W.use(),W.set("texel",...o),W.bind("source",b.read,0),W.set("value",ft),h(b.write),b.swap(),V.use(),V.set("texel",...o),V.bind("divergence",oe,0);for(let r=0;r<lt;r++)V.bind("pressure",b.read,1),h(b.write),b.swap();Y.use(),Y.set("texel",...o),Y.bind("pressure",b.read,0),Y.bind("velocity",d.read,1),h(d.write),d.swap(),M.use(),M.set("texel",...o),M.set("dt",t),M.bind("velocity",d.read,0),M.bind("source",d.read,1),M.set("dissipation",dt),h(d.write),d.swap(),M.bind("velocity",d.read,0),M.bind("source",x.read,1),M.set("dissipation",Ne),h(x.write),x.swap()};let R=ue,O=ue,w=ue,Me=-1/0;const be=t=>{if(R===w)return;const o=Math.min(1,(t-Me)/1e3/At);if(o>=1){R=w;return}const r=o*o*(3-2*o);R=w.map((n,s)=>{const a=O[s%O.length];return n.map((u,m)=>a[m]+(u-a[m])*r)})},K=(t,o)=>{const r=R.length,n=(Math.floor(t)%r+r)%r,s=R[n],a=R[(n+1)%r],u=t-Math.floor(t);return s.map((m,y)=>(m+(a[y]-m)*u)*o)};let Pe=.45,Ue=0;const ae=()=>{const t=getComputedStyle(c).colorScheme==="light";Pe=t?.55:.45,Ue=t?1:0,f&&E&&G()},we=()=>{const t=Math.max(1,c.clientWidth*c.clientHeight),o=Math.min(window.devicePixelRatio||1,1.5,Math.sqrt(ct/t));i.width=Math.max(1,Math.round(c.clientWidth*o)),i.height=Math.max(1,Math.round(c.clientHeight*o)),f&&E&&G()};we(),new ResizeObserver(we).observe(c),ae(),new MutationObserver(ae).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),matchMedia("(prefers-color-scheme: light)").addEventListener("change",ae);let S=null,p={x:0,y:0,dx:0,dy:0,pending:!1};c.addEventListener("pointermove",t=>{if(f||t.pointerType==="touch"||!T.matches)return;const o=c.getBoundingClientRect(),r=(t.clientX-o.left)/o.width,n=1-(t.clientY-o.top)/o.height;S&&(p={x:r,y:n,dx:p.pending?p.dx+r-S.x:r-S.x,dy:p.pending?p.dy+n-S.y:n-S.y,pending:!0}),S={x:r,y:n}}),c.addEventListener("pointerleave",()=>{S=null}),v.addEventListener("change",t=>{f=t.matches,!X&&(f?G():(F=performance.now(),B()))});let X=!1;i.addEventListener("webglcontextlost",()=>{X=!0,i.classList.remove("is-ready")});let j=!0,ie=0;const B=()=>{ie||(ie=requestAnimationFrame(nt))};new IntersectionObserver(([t])=>{const o=j;j=t.isIntersecting,j&&!o&&!X&&!f&&(F=performance.now(),B())}).observe(c);let F=performance.now(),Se=F;const Ie=(t,o)=>({x:Z[t].x+.03*Math.sin(o*.13+t*1.7),y:Z[t].y+.03*Math.sin(o*.17+t*2.3)}),ot=(t,o)=>{Z.forEach((r,n)=>{const s=Ie(n,t),a=t*.4+n*1.6;se(s.x,s.y,Math.cos(a)*Ge*o,Math.sin(a)*Ge*o,K(n+t*.05,Be*Ne*o),Xe)})},Le=t=>Z.forEach((o,r)=>{const n=Ie(r,t);se(n.x,n.y,0,0,K(r,Be),Xe)});let ce=0,P=null,J=0;const Fe=(t,o)=>{const r=o*o*(3-2*o),n=t.angle+t.bend*r;return{x:t.x+Math.cos(n)*ze*r,y:t.y+Math.sin(n)*ze*r}},rt=t=>{if(!P){if(J||(J=t+1.5),t<J)return;const s=c.getBoundingClientRect(),a=l?.getBoundingClientRect().top,u=a===void 0?.2:Math.min(.6,Math.max(.2,(s.bottom-a)/s.height+.08)),m=u+Math.random()*(.9-u),y=m<(u+.9)/2?1:-1,D=y*Math.random()*.5,Ce=y*Math.random()*.6,le=Math.random()<.5;P={start:t,x:le?.05+Math.random()*.15:.8+Math.random()*.15,y:m,angle:le?D:Math.PI-D,bend:le?Ce:-Ce,noted:!1}}const o=Math.min(1,(t-P.start)/He),r=Fe(P,Math.max(0,o-1/60/He)),n=Fe(P,o);p={x:n.x,y:n.y,dx:n.x-r.x,dy:n.y-r.y,pending:!0},!P.noted&&o>.5&&(P.noted=!0,Ae(n.x,n.y,t*.12,.7,1+Math.floor(Math.random()*2))),o>=1&&(P=null,J=t+Tt+Math.random()*yt)},De=()=>{C.use(),C.set("texel",1/i.width,1/i.height),C.set("strength",Pe),C.set("deepen",Ue),C.bind("dye",x.read,0),h(null),E||(E=!0,i.classList.add("is-ready"))},G=()=>{if(!X){U=[];for(const t of[d.read,d.write,x.read,x.write])e.bindFramebuffer(e.FRAMEBUFFER,t.fbo),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);R=O=w,Le(0),ne(),De()}},nt=t=>{if(ie=0,!j||X||f)return;const o=t-Se<_t*1e3||U.length>0||R!==w;if(E&&t-F<(o?gt:Rt)){B();return}const r=Math.min((t-F)/1e3,1/30);F=t;const n=t/1e3,s=n*.12;be(t),E||Le(n);const a=!T.matches;if(a&&rt(n),p.pending){Se=t;const u=i.width/Math.max(1,i.height),m=p.dx*(u<1?u:1),y=p.dy*(u>1?1/u:1),D=Math.min(Math.hypot(m,y)*40,1);se(p.x,p.y,m*Oe,y*Oe,K(s,.03+.075*D)),ce+=Math.hypot(p.dx*u,p.dy),!a&&ce>pt&&(ce=0,Ae(p.x,p.y,s,.7,1+Math.floor(Math.random()*vt))),p.pending=!1}ot(n,r),ne(),et(r),tt(r),De(),B()};return f?G():B(),{setColors(t){const o=t.map(n=>[1,3,5].map(s=>parseInt(n.slice(s,s+2),16)/255)),r=performance.now();if(f||!E){R=O=w=o,f&&G();return}be(r),O=R,w=o,Me=r}}}const I=document.querySelector("[data-hero]"),Ve=document.querySelector("[data-smoke]"),Xt=(c,i,l)=>"#"+[1,3,5].map(v=>{const f=parseInt(c.slice(v,v+2),16),T=parseInt(i.slice(v,v+2),16);return Math.round(f+(T-f)*l).toString(16).padStart(2,"0")}).join(""),Ke=([c,i,l])=>[c,i,Xt(l,i,.45)];I&&new IntersectionObserver(([c])=>I.toggleAttribute("data-offscreen",!c.isIntersecting)).observe(I);ke(c=>{const[i,l,v]=Ke(c);[i,l,v,l].forEach((f,T)=>I?.style.setProperty(`--glow-${T+1}`,f))});const Ye=()=>{const c=I&&Ve?Ot(I,Ve,I.querySelector(".app-window")):void 0;c&&ke(i=>c.setColors(Ke(i)))},We=()=>"requestIdleCallback"in window?requestIdleCallback(Ye,{timeout:1500}):setTimeout(Ye,300);document.readyState==="complete"?We():addEventListener("load",We,{once:!0});
