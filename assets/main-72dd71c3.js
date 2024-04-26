class w{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const z="https://unpkg.com/@workadventure/scripting-api-extra@1.8.1/dist";class ue{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new w(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function D(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(z+"/configuration.html"+e,!0)}async function ce(t,e){const n=await WA.room.getTiledMap(),r=new Map;return ee(n.layers,r,t,e),r}function ee(t,e,n,r){for(const a of t)if(a.type==="objectgroup"){for(const s of a.objects)if(s.type==="variable"||s.class==="variable"){if(n&&a.name!==n||r&&!r.includes(s.name))continue;e.set(s.name,new ue(s))}}else a.type==="group"&&ee(a.layers,e,n,r)}let j;async function T(){return j===void 0&&(j=pe()),j}async function pe(){return fe(await WA.room.getTiledMap())}function fe(t){const e=new Map;return te(t.layers,"",e),e}function te(t,e,n){for(const r of t)r.type==="group"?te(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}async function ne(){const t=await T(),e=[];for(const n of t.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function de(t){let e=1/0,n=1/0,r=0,a=0;const s=t.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let o=0;o<t.height;o++)for(let i=0;i<t.width;i++)s[i+o*t.width]!==0&&(e=Math.min(e,i),a=Math.max(a,i),n=Math.min(n,o),r=Math.max(r,o));return{top:n,left:e,right:a+1,bottom:r+1}}function re(t){let e=1/0,n=1/0,r=0,a=0;for(const s of t){const o=de(s);o.left<e&&(e=o.left),o.top<n&&(n=o.top),o.right>a&&(a=o.right),o.bottom>r&&(r=o.bottom)}return{top:n,left:e,right:a,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var he=Object.prototype.toString,S=Array.isArray||function(e){return he.call(e)==="[object Array]"};function O(t){return typeof t=="function"}function ye(t){return S(t)?"array":typeof t}function G(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function q(t,e){return t!=null&&typeof t=="object"&&e in t}function ge(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var be=RegExp.prototype.test;function ve(t,e){return be.call(t,e)}var me=/\S/;function Ae(t){return!ve(me,t)}var We={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function we(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return We[n]})}var Pe=/\s*/,Se=/\s+/,$=/\s*=/,Ce=/\s*\}/,Ee=/#|\^|\/|>|\{|&|=|!/;function Le(t,e){if(!t)return[];var n=!1,r=[],a=[],s=[],o=!1,i=!1,l="",c=0;function f(){if(o&&!i)for(;s.length;)delete a[s.pop()];else s=[];o=!1,i=!1}var y,b,M;function C(A){if(typeof A=="string"&&(A=A.split(Se,2)),!S(A)||A.length!==2)throw new Error("Invalid tags: "+A);y=new RegExp(G(A[0])+"\\s*"),b=new RegExp("\\s*"+G(A[1])),M=new RegExp("\\s*"+G("}"+A[1]))}C(e||h.tags);for(var p=new I(t),v,u,g,E,V,W;!p.eos();){if(v=p.pos,g=p.scanUntil(y),g)for(var B=0,le=g.length;B<le;++B)E=g.charAt(B),Ae(E)?(s.push(a.length),l+=E):(i=!0,n=!0,l+=" "),a.push(["text",E,v,v+1]),v+=1,E===`
`&&(f(),l="",c=0,n=!1);if(!p.scan(y))break;if(o=!0,u=p.scan(Ee)||"name",p.scan(Pe),u==="="?(g=p.scanUntil($),p.scan($),p.scanUntil(b)):u==="{"?(g=p.scanUntil(M),p.scan(Ce),p.scanUntil(b),u="&"):g=p.scanUntil(b),!p.scan(b))throw new Error("Unclosed tag at "+p.pos);if(u==">"?V=[u,g,v,p.pos,l,c,n]:V=[u,g,v,p.pos],c++,a.push(V),u==="#"||u==="^")r.push(V);else if(u==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+g+'" at '+v);if(W[1]!==g)throw new Error('Unclosed section "'+W[1]+'" at '+v)}else u==="name"||u==="{"||u==="&"?i=!0:u==="="&&C(g)}if(f(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+p.pos);return Ie(Te(a))}function Te(t){for(var e=[],n,r,a=0,s=t.length;a<s;++a)n=t[a],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function Ie(t){for(var e=[],n=e,r=[],a,s,o=0,i=t.length;o<i;++o)switch(a=t[o],a[0]){case"#":case"^":n.push(a),r.push(a),n=a[4]=[];break;case"/":s=r.pop(),s[5]=a[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(a)}return e}function I(t){this.string=t,this.tail=t,this.pos=0}I.prototype.eos=function(){return this.tail===""};I.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};I.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function P(t,e){this.view=t,this.cache={".":this.view},this.parent=e}P.prototype.push=function(e){return new P(e,this)};P.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var a=this,s,o,i,l=!1;a;){if(e.indexOf(".")>0)for(s=a.view,o=e.split("."),i=0;s!=null&&i<o.length;)i===o.length-1&&(l=q(s,o[i])||ge(s,o[i])),s=s[o[i++]];else s=a.view[e],l=q(a.view,e);if(l){r=s;break}a=a.parent}n[e]=r}return O(r)&&(r=r.call(this.view)),r};function d(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}d.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};d.prototype.parse=function(e,n){var r=this.templateCache,a=e+":"+(n||h.tags).join(":"),s=typeof r<"u",o=s?r.get(a):void 0;return o==null&&(o=Le(e,n),s&&r.set(a,o)),o};d.prototype.render=function(e,n,r,a){var s=this.getConfigTags(a),o=this.parse(e,s),i=n instanceof P?n:new P(n,void 0);return this.renderTokens(o,i,r,e,a)};d.prototype.renderTokens=function(e,n,r,a,s){for(var o="",i,l,c,f=0,y=e.length;f<y;++f)c=void 0,i=e[f],l=i[0],l==="#"?c=this.renderSection(i,n,r,a,s):l==="^"?c=this.renderInverted(i,n,r,a,s):l===">"?c=this.renderPartial(i,n,r,s):l==="&"?c=this.unescapedValue(i,n):l==="name"?c=this.escapedValue(i,n,s):l==="text"&&(c=this.rawValue(i)),c!==void 0&&(o+=c);return o};d.prototype.renderSection=function(e,n,r,a,s){var o=this,i="",l=n.lookup(e[1]);function c(b){return o.render(b,n,r,s)}if(l){if(S(l))for(var f=0,y=l.length;f<y;++f)i+=this.renderTokens(e[4],n.push(l[f]),r,a,s);else if(typeof l=="object"||typeof l=="string"||typeof l=="number")i+=this.renderTokens(e[4],n.push(l),r,a,s);else if(O(l)){if(typeof a!="string")throw new Error("Cannot use higher-order sections without the original template");l=l.call(n.view,a.slice(e[3],e[5]),c),l!=null&&(i+=l)}else i+=this.renderTokens(e[4],n,r,a,s);return i}};d.prototype.renderInverted=function(e,n,r,a,s){var o=n.lookup(e[1]);if(!o||S(o)&&o.length===0)return this.renderTokens(e[4],n,r,a,s)};d.prototype.indentPartial=function(e,n,r){for(var a=n.replace(/[^ \t]/g,""),s=e.split(`
`),o=0;o<s.length;o++)s[o].length&&(o>0||!r)&&(s[o]=a+s[o]);return s.join(`
`)};d.prototype.renderPartial=function(e,n,r,a){if(r){var s=this.getConfigTags(a),o=O(r)?r(e[1]):r[e[1]];if(o!=null){var i=e[6],l=e[5],c=e[4],f=o;l==0&&c&&(f=this.indentPartial(o,c,i));var y=this.parse(f,s);return this.renderTokens(y,n,r,f,a)}}};d.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};d.prototype.escapedValue=function(e,n,r){var a=this.getConfigEscape(r)||h.escape,s=n.lookup(e[1]);if(s!=null)return typeof s=="number"&&a===h.escape?String(s):a(s)};d.prototype.rawValue=function(e){return e[1]};d.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};d.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){L.templateCache=t},get templateCache(){return L.templateCache}},L=new d;h.clearCache=function(){return L.clearCache()};h.parse=function(e,n){return L.parse(e,n)};h.render=function(e,n,r,a){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ye(e)+'" was given as the first argument for mustache#render(template, view, partials)');return L.render(e,n,r,a)};h.escape=we;h.Scanner=I;h.Context=P;h.Writer=d;class ae{constructor(e,n){this.template=e,this.state=n,this.ast=h.parse(e)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const a=h.render(this.template,this.state);a!==this.value&&(this.value=a,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const a=r[0],s=r[1],o=r[4];["name","&","#","^"].includes(a)&&n.add(s),o!==void 0&&typeof o!="string"&&this.recursiveGetUsedVariables(o,n)}}}async function Me(){var t;const e=await ne();for(const n of e){const r=(t=n.properties)!==null&&t!==void 0?t:[];for(const a of r){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new ae(a.value,WA.state);if(s.isPureString())continue;const o=s.getValue();await K(n.name,a.name,o),s.onChange(async i=>{await K(n.name,a.name,i)})}}}async function Ve(){var t;const e=await T();for(const[n,r]of e.entries())if(r.type!=="objectgroup"){const a=(t=r.properties)!==null&&t!==void 0?t:[];for(const s of a){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const o=new ae(s.value,WA.state);if(o.isPureString())continue;const i=o.getValue();H(n,s.name,i),o.onChange(l=>{H(n,s.name,l)})}}}async function K(t,e,n){console.log(t),(await WA.room.area.get(t)).setProperty(e,n)}function H(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}const ke="https://admin.workadventu.re/html";let N,U=0,_=0;function X(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function xe(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const a=oe(t.properties.mustGetString("openLayer").split(`
`));if(a>n)return;r=1-a/n}e&&WA.sound.loadSound(e).play({volume:r})}function Re(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const a=oe(t.properties.mustGetString("closeLayer").split(`
`));if(a>n)return;r=1-a/n}e&&WA.sound.loadSound(e).play({volume:r})}function se(t){return t.map(e=>N.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function oe(t){const e=se(t),n=re(e),r=((n.right-n.left)/2+n.left)*32,a=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(U-r,2)+Math.pow(_-a,2))}function Be(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?xe(t):Re(t),X(t)}),X(t)}function Y(t,e,n,r){const a=t.name;let s,o,i=!1;const l=n.getString("tag");let c=!0;l&&!WA.player.tags.includes(l)&&(c=!1);const f=!!l;function y(){var u;s&&s.remove(),s=WA.ui.displayActionMessage({message:(u=n.getString("closeTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,b()}})}function b(){var u;s&&s.remove(),s=WA.ui.displayActionMessage({message:(u=n.getString("openTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,y()}})}function M(){let u;if(t.type==="tilelayer")u=re(se(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);u={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}o=WA.room.website.create({name:"doorKeypad"+a,url:r+"/keypad.html#"+encodeURIComponent(a),position:{x:u.right*32,y:u.top*32,width:32*3,height:32*4},allowApi:!0})}function C(){o&&(WA.room.website.delete(o.name),o=void 0)}function p(){if(i=!0,n.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!c||!f)&&(n.getString("code")||n.getString("codeVariable"))){M();return}c&&(WA.state[e.name]?y():b())}function v(){i=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),C()}t.type==="tilelayer"?(WA.room.onEnterLayer(a).subscribe(p),WA.room.onLeaveLayer(a).subscribe(v)):(WA.room.area.onEnter(a).subscribe(p),WA.room.area.onLeave(a).subscribe(v)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&y(),o&&WA.state[e.name]===!0&&C(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&b())})}function je(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const a=Math.sqrt(Math.pow(t.x-U,2)+Math.pow(t.y-_,2));if(a>n)return;r=1-a/n}WA.sound.loadSound(e).play({volume:r})}function Ge(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&je(t)})}function F(t,e,n){let r;const a=e.getString("bellPopup");if(n.type==="tilelayer"){const s=n.name;WA.room.onEnterLayer(s).subscribe(()=>{var o;a?r=WA.ui.openPopup(a,"",[{label:(o=e.getString("bellButtonText"))!==null&&o!==void 0?o:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(s).subscribe(()=>{r&&(r.close(),r=void 0)})}else{const s=n.name;WA.room.area.onEnter(s).subscribe(()=>{var o;a?r=WA.ui.openPopup(a,"",[{label:(o=e.getString("bellButtonText"))!==null&&o!==void 0?o:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(s).subscribe(()=>{r&&(r.close(),r=void 0)})}}async function Ne(t){t=t??ke;const e=await ce();N=await T();for(const n of e.values())n.properties.get("door")&&Be(n),n.properties.get("bell")&&Ge(n);for(const n of N.values()){const r=new w(n.properties),a=r.getString("doorVariable");if(a&&n.type==="tilelayer"){const o=e.get(a);if(o===void 0)throw new Error('Cannot find variable "'+a+'" referred in the "doorVariable" property of layer "'+n.name+'"');Y(n,o,r,t)}const s=r.getString("bellVariable");s&&n.type==="tilelayer"&&F(s,r,n)}for(const n of await ne()){const r=new w(n.properties),a=r.getString("doorVariable");if(a){const o=e.get(a);if(o===void 0)throw new Error('Cannot find variable "'+a+'" referred in the "doorVariable" property of object "'+n.name+'"');Y(n,o,r,t)}const s=r.getString("bellVariable");s&&F(s,r,n)}WA.player.onPlayerMove(n=>{U=n.x,_=n.y})}function Oe(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),a=t.get("leaveValue"),s=t.getString("triggerMessage"),o=t.getString("tag");Ue(n,e,r,a,s,o)}}function Ue(t,e,n,r,a,s){s&&!WA.player.tags.includes(s)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{a||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function _e(){const t=await T();for(const e of t.values()){const n=new w(e.properties);Oe(n,e.name)}}let J;async function De(t){const e=await WA.room.getTiledMap();t=t??z,J=await T();const n=e.layers.find(r=>r.name==="configuration");if(n){const a=new w(n.properties).getString("tag");(!a||WA.player.tags.includes(a))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const s of J.values()){const o=new w(s.properties),i=o.getString("openConfig");i&&s.type==="tilelayer"&&qe(i.split(","),s.name,o)}}}function qe(t,e,n){let r;const a=n.getString("openConfigAdminTag");let s=!0;a&&!WA.player.tags.includes(a)&&(s=!1);function o(){var l;r&&r.remove(),r=WA.ui.displayActionMessage({message:(l=n.getString("openConfigTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE or touch here to configure",callback:()=>D(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const l=n.getString("openConfigTrigger");s&&(l&&l==="onaction"?o():D(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function $e(){return WA.onInit().then(()=>{Ne().catch(t=>console.error(t)),_e().catch(t=>console.error(t)),De().catch(t=>console.error(t)),Ve().catch(t=>console.error(t)),Me().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");let m,R,Q;WA.onInit().then(async()=>{await WA.players.configureTracking(),WA.event.on("teleport-event").subscribe(()=>{WA.nav.goToRoom("#ejectZone")}),WA.ui.onRemotePlayerClicked.subscribe(e=>{e.addAction("Kick",()=>{e.sendEvent("teleport-event","my payload")})}),WA.player.state.saveVariable("status",!1),WA.event.on("showValidatedPlayer").subscribe(e=>{const n=WA.state.loadVariable("players1"),r=WA.state.loadVariable("index1")??0,a=n[r].firstName+n[r].lastName;WA.ui.openPopup("validatePlayerPopup",`${a}, on y va ${e.data}!`,[])}),t("1");function t(e){WA.room.area.onEnter("to-date"+e).subscribe(()=>{WA.state.loadVariable("validatedIndex"+e)===WA.player.state.loadVariable("id")&&WA.nav.goToRoom("#from-queue"+e)}),WA.room.area.onEnter("reset").subscribe(()=>{}),WA.room.area.onEnter("displayPretendantInfosForPretendant"+e).subscribe(()=>{const n=WA.state.loadVariable("pretendantInfos"+e);if(!(!WA.player.tags.includes("pretendant")||n&&typeof n=="object"&&Object.keys(n).length!==0))try{m=WA.ui.openPopup("displayPretendantInfosPopup"+e,x(WA.state.loadVariable("pretendantInfos"+e)),[])}catch{m=WA.ui.openPopup("displayPretendantInfosPopup"+e,"Infos pas encore disponibles",[{label:"Inscription",className:"primary",callback:async()=>{Z()}}])}}),WA.room.area.onLeave("displayPretendantInfosForPretendant"+e).subscribe(k),WA.room.area.onEnter("displayPretendantInfos"+e).subscribe(()=>{try{WA.player.state.status==!1||WA.player.state.status==null?m=WA.ui.openPopup("displayPretendantInfosPopup"+e,x(WA.state.loadVariable("pretendantInfos"+e)),[{label:"Inscription salle "+e,className:"primary",callback:async()=>{Z()}}]):m=WA.ui.openPopup("displayPretendantInfosPopup"+e,x(WA.state.loadVariable("pretendantInfos"+e)),[])}catch{m=WA.ui.openPopup("displayPretendantInfosPopup"+e,"Infos pas encore disponibles",[])}}),WA.room.area.onLeave("displayPretendantInfos"+e).subscribe(k),WA.room.area.onLeave("displayPretendantInfos"+e).subscribe(()=>{R.close()}),WA.room.area.onLeave("displayPretendantInfos"+e).subscribe(()=>{R.close()}),WA.room.area.onEnter("door-enter"+e).subscribe(async()=>{WA.player.tags.includes("pretendant")||(Q=await WA.ui.website.open({url:"./timer.html",position:{vertical:"top",horizontal:"middle"},size:{height:"5vh",width:"10vw"},margin:{top:"25vh",left:"15vw"},allowApi:!0}))}),WA.room.area.onLeave("door-enter"+e).subscribe(()=>{Q.close()}),WA.room.area.onEnter("showPlayer"+e).subscribe(()=>{ie(e)}),WA.room.area.onLeave("showPlayer"+e).subscribe(k)}$e().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(t=>console.error(t));function k(){m!==void 0&&(m.close(),m=void 0)}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};function ie(t){if(WA.player.tags.includes("pretendant"))try{const e=WA.state.loadVariable("players"+t),n=WA.state.loadVariable("index1")??0;m=WA.ui.openPopup("playersPopup"+t,x(e[n]),[{label:"Validation",className:"primary",callback:()=>{WA.state.saveVariable("validatedIndex"+t,n),typeof e=="object"&&e!==null&&Object.prototype.hasOwnProperty.call(e,n)&&WA.event.broadcast("showValidatedPlayer","salle "+t)}},{label:"Suivant",className:"primary",callback:()=>{k(),n in e&&WA.state.saveVariable("index"+t,Number(n)+1),ie(t)}}])}catch{m=WA.ui.openPopup("playersPopup1","Il n'y a pas de prétendant(e)",[])}}function x(t){return t.firstName+t.lastName+", "+t.age+` ans
`+t.gender.capitalize()+" cherche "+t.searching}async function Z(){if(WA.player.state.status==!1||WA.player.state.status==null){WA.controls.disablePlayerControls(),R=await WA.ui.website.open({url:"./form.html",position:{vertical:"top",horizontal:"middle"},size:{height:"60vh",width:"50vw"},margin:{top:"10vh"},allowApi:!0});var t=setInterval(()=>{WA.player.state.status&&(R.close(),clearInterval(t))},1e3)}}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};
