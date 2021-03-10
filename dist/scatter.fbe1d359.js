!function(){const e=window.tippy;function t(e){return e instanceof Element||e instanceof HTMLDocument||e&&[1,3].includes(e.nodeType)}function i(e){return!!(e&&e.constructor&&e.call&&e.apply)}function a(e,a,s){const r=document.createElement("table");r.className="tooltip-table";const[o,l]=e?function(e,a){const s=document.createElement("thead"),r=document.createElement("tbody");return e.forEach((e=>{const o=document.createElement("tr"),l=document.createElement(e.isColumnHeader?"th":"td");l.className=e.isColumnHeader?"col-header":"row-header";const n=i(e.rowHeader)?e.rowHeader(a):e.rowHeader,h=t(n)?n:document.createTextNode(n||"");l.appendChild(h),o.appendChild(l),a.forEach(((a,s)=>{const r=document.createElement(e.isColumnHeader?"th":"td");r.className=e.isColumnHeader?"col-header":"";const l=a[e.dataKey],n=e.render?i(e.render)?e.render(l,a,s):e.render:l,h=t(n)?n:document.createTextNode(n);r.appendChild(h),o.appendChild(r)})),e.isColumnHeader?s.appendChild(o):r.appendChild(o)})),[s,r]}(e,s):function(e,a){const s=document.createElement("thead"),r=document.createElement("tbody"),o=document.createElement("tr");return e.forEach((({columnHeader:e})=>{const s=document.createElement("th");s.className="col-header";const r=i(e)?e(a):e,l=t(r)?r:document.createTextNode(r||"");s.appendChild(l),o.appendChild(s)})),s.appendChild(o),a.forEach(((a,s)=>{const o=document.createElement("tr");e.forEach((e=>{const r=document.createElement("td");e.isRowHeader&&(r.className="row-header");const l=a[e.dataKey],n=e.render?i(e.render)?e.render(l,a,s):e.render:l,h=t(n)?n:document.createTextNode(n);r.appendChild(h),o.appendChild(r)})),r.appendChild(o)})),[s,r]}(a,s);return r.appendChild(o),r.appendChild(l),r}function s(e,i,s,r){const o=document.createElement("div");if(o.className="tooltip-content",e){const i=document.createElement("div"),a=t(e)?e:document.createElement("h4").appendChild(document.createTextNode(e));i.className="tooltip-title",i.appendChild(a),o.appendChild(i)}if((i||s)&&r){const e=a(i,s,r);o.appendChild(e)}return()=>o.cloneNode(!0)}e.setDefaultProps({arrow:!1,placement:"right",delay:0,duration:0,flip:!1,popperOptions:{modifiers:{preventOverflow:{enabled:!0,padding:4}}}});const r="http://www.w3.org/2000/svg";class o{constructor(e,t,i,a,s,r,o,l,n,h){this.county=t,this.data=e,this.xAxis=i,this.yAxis=a,this.radiusScale=s,this.outlier=r,this.showName=o,this.plot=l,this.container=h,this.renderTooltip=(e,t)=>n(e,this.data,this.county,t),[this.xs,this.ys]=this.getPositions(),this.rs=this.getRadiis(),this.elements=[],this.tooltipTriggerTargets=[]}isOutlier(){return this.outlier}getPositions(){const e=[],t=[];return this.data.forEach((i=>{const a=this.xAxis.max-this.xAxis.min,s=this.yAxis.max-this.yAxis.min;e.push((i.x-this.xAxis.min)/a*100+"%"),t.push(100-(i.y-this.yAxis.min)/s*100+"%")})),[e,t]}getRadiis(){const e=[];return this.data.forEach((t=>{if(!this.radiusScale)return e.push(4);if(this.radiusScale.min===this.radiusScale.max)return e.push(this.radiusScale.min);const i=this.radiusScale.maxValue-this.radiusScale.minValue,a=this.radiusScale.max-this.radiusScale.min,s=Math.min((t.r-this.radiusScale.minValue)*a/i+this.radiusScale.min,this.radiusScale.max);e.push(Math.min(Math.max(s,this.radiusScale.min),this.radiusScale.max))})),e}renderCountyName(){if(!this.showName)return;const e="scatter-text"+(this.outlier?" outlier":""),t=document.createElementNS(r,"text");t.setAttributeNS(null,"class",e),t.setAttributeNS(null,"x",this.xs[0]),t.setAttributeNS(null,"y",this.ys[0]),t.setAttributeNS(null,"dx",11),t.setAttributeNS(null,"dy",3),t.appendChild(document.createTextNode(this.county)),this.plot.appendChild(t),this.elements.push(t),this.tooltipTriggerTargets.push(t),t.addEventListener("mouseenter",(()=>this.onMouseEnter())),t.addEventListener("mouseleave",(()=>this.onMouseLeave()))}renderPoints(){this.data.forEach(((e,t)=>{const i=`${e.name} scatter-point${this.outlier?" outlier":""}`,a=document.createElementNS(r,"circle");a.setAttributeNS(null,"class",i),a.setAttributeNS(null,"cx",this.xs[t]),a.setAttributeNS(null,"cy",this.ys[t]),a.setAttributeNS(null,"r",this.rs[t]),this.plot.appendChild(a),this.elements.push(a),this.tooltipTriggerTargets.push(a),a.addEventListener("mouseenter",(()=>this.onMouseEnter())),a.addEventListener("mouseleave",(()=>this.onMouseLeave()))}))}renderLine(){if(2!=this.data.length)return;const e="scatter-line"+(this.outlier?" outlier":""),t=document.createElementNS(r,"line");t.setAttributeNS(null,"class",e),t.setAttributeNS(null,"x1",this.xs[0]),t.setAttributeNS(null,"y1",this.ys[0]),t.setAttributeNS(null,"x2",this.xs[1]),t.setAttributeNS(null,"y2",this.ys[1]),this.plot.appendChild(t),this.elements.push(t);const i=document.createElementNS(r,"line");i.setAttributeNS(null,"class",`${e} hover-line`),i.setAttributeNS(null,"x1",this.xs[0]),i.setAttributeNS(null,"y1",this.ys[0]),i.setAttributeNS(null,"x2",this.xs[1]),i.setAttributeNS(null,"y2",this.ys[1]),this.plot.appendChild(i),this.tooltipTriggerTargets.push(i),i.addEventListener("mouseenter",(()=>this.onMouseEnter())),i.addEventListener("mouseleave",(()=>this.onMouseLeave()))}onMouseEnter(){this.elements.forEach((e=>{e.classList.add("hovering")}))}onMouseLeave(){this.elements.forEach((e=>{e.classList.remove("hovering")}))}}class l{constructor(t,i,a,r,o,l){this.data=t,this.xAxis=i,this.yAxis=a,this.ticks={x:[],y:[]},this.axisLabels={x:[],y:[]},this.radiusScale=r,this.container=l,this.plotContainer=this.container.getElementsByClassName("plot-container")[0],this.renderTooltip=function(t){const{rows:i,columns:a,...r}=t;return function(t,o,l,n={}){const h={...r,...n,content:n.content||r.content||s(l,i,a,o)};return e(t,h)}}(o),this.plot=this.container.getElementsByClassName("scatter-plot")[0],this.points=this.createPoints(),this.mobileSizing=window.innerWidth<670,this.showOutliers=!1,this.setUpSearchBar(),this.setUpOutlierButton(),this.render()}setUpSearchBar(){const e="State Average",t=this.container.getElementsByClassName("menu")[0],i=Object.keys(this.data).filter((t=>t!==e)).sort();i.unshift(e),i.forEach((i=>{const a=document.createElement("div");a.className=i===e?"item bold":"item",a.innerText=i,t.appendChild(a)}));this.container.getElementsByTagName("input")[0].addEventListener("change",(e=>{const t=e.target.value;this.searchTerms=t.split(";").filter((e=>""!==e)),this.points.forEach((e=>{this.searchTerms.includes(e.county.toLowerCase())?e.onMouseEnter():e.onMouseLeave()}))}))}setUpOutlierButton(){const e=this.container.getElementsByClassName("outliers-btn")[0];this.mobileSizing&&this.plot.classList.add("show-outliers"),e&&e.addEventListener("click",(e=>{this.toggleOutliers()?(e.target.classList.add("showing"),this.plot.classList.add("show-outliers")):(e.target.classList.remove("showing"),this.plot.classList.remove("show-outliers"))}))}getNumber(e){return"string"==typeof e?Number(e.replace(/[^\d.-]/g,"")):e}createPoints(){const e=[];for(const t in this.data){const i=this.data[t].outlier,a=this.data[t].showName;let s=this.data[t].x,r=this.data[t].y,l=this.data[t].r;s="object"!=typeof s?{total:s}:s,r="object"!=typeof r?{total:r}:r,l="object"!=typeof l?{total:l}:l;const n=[t,this.xAxis,this.yAxis,this.radiusScale,i,a,this.plot,this.renderTooltip,this.container],h=Object.keys(s).map((e=>({name:e,x:this.getNumber(s[e]),y:this.getNumber(r[e]),r:this.getNumber(l[e])})));e.push(new o(h,...n))}return e.sort(((e,t)=>t.data[0].r-e.data[0].r))}toggleOutliers(){return this.showOutliers=!this.showOutliers,this.showOutliers||this.mobileSizing}updateViewBox(){this.mobileSizing=window.innerWidth<670,this.renderAxis(this.xAxis,!1),this.renderAxis(this.yAxis,!0);const e=window.innerWidth<350,t=window.innerWidth<400,i=e?180:t?280:this.mobileSizing?300:600,a=this.mobileSizing?400:500;this.plot.setAttributeNS(null,"viewBox",`0 0 ${i} ${a}`)}render(){this.updateViewBox(),window.addEventListener("resize",(()=>this.updateViewBox())),this.renderAxis(this.xAxis,!1),this.renderAxis(this.yAxis,!0),this.renderPlotLines(this.xAxis,!1),this.renderPlotLines(this.yAxis,!0),this.points.forEach((e=>e.renderLine())),this.points.forEach((e=>e.renderPoints())),this.points.forEach((e=>e.renderCountyName())),this.points.forEach((e=>{e.renderTooltip(e.tooltipTriggerTargets[0],{triggerTarget:e.tooltipTriggerTargets,followCursor:!0})}))}renderAxis(e,t){this.ticks[t?"y":"x"].forEach((e=>e.remove()));const i=(e.max-e.min)/e.numTicks;for(let a=0;a<e.numTicks+1;a++){const s=e.convert(e.min+a*i);let o=a/e.numTicks*100;t&&(o=100-o),o=`${o}%`;const l=t?0:"100%",n=this.mobileSizing?18:26,h=document.createElementNS(r,"text");h.setAttributeNS(null,"class","axis-tick"),h.setAttributeNS(null,"text-anchor","middle"),h.setAttributeNS(null,"x",t?l:o),h.setAttributeNS(null,"y",t?o:l),h.setAttributeNS(null,t?"dx":"dy",t?-n:n),t&&h.setAttributeNS(null,"dy",4),h.appendChild(document.createTextNode(s)),this.ticks[t?"y":"x"].push(h),this.plot.appendChild(h)}this.axisLabels[t?"y":"x"].forEach((e=>e.remove())),this.renderAxisLabels(e,t,!0),this.renderAxisLabels(e,t,!1)}renderAxisLabels(e,t,i){if(this.mobileSizing&&!i)return;const a=document.createElementNS(r,"svg");a.setAttributeNS(null,"class","label-wrapper"),this.mobileSizing?(a.setAttributeNS(null,"x",t?0:"50%"),a.setAttributeNS(null,"y",t?"50%":"100%")):(a.setAttributeNS(null,"x",i||t?0:"100%"),a.setAttributeNS(null,"y",i?"100%":t?0:"100%"));const s=this.mobileSizing?40:60,o=document.createElementNS(r,"text"),l=this.mobileSizing?"middle":i?"start":"end";o.setAttributeNS(null,"class","axis-label"),o.setAttributeNS(null,"text-anchor",l),o.setAttributeNS(null,"dy",t?-s:s),t&&o.setAttributeNS(null,"transform","rotate(-90)");const n=i?`← Lower ${e.name}`:`Higher ${e.name} →`;o.appendChild(document.createTextNode(this.mobileSizing?e.name:n)),a.appendChild(o),this.axisLabels[t?"y":"x"].push(a),this.plot.appendChild(a)}renderPlotLines(e,t){for(let i=0;i<e.numTicks+1;i++){let a=i/e.numTicks*100;t&&(a=100-a),a=`${a}%`;const s=document.createElementNS(r,"line");s.setAttributeNS(null,"class","axis-line"),s.setAttributeNS(null,"x1",t?a:0),s.setAttributeNS(null,"y1",t?0:a),s.setAttributeNS(null,"x2",t?a:"100%"),s.setAttributeNS(null,"y2",t?"100%":a),this.plot.appendChild(s)}}}const n={Cameron:{showName:!1,outlier:!0,x:{black:100,white:25.45454545},y:{black:"$10,000",white:"$26,481"}},Forest:{showName:!1,outlier:!0,x:{black:85,white:32.03883495},y:{black:"$21,438",white:"$22,344"}},Potter:{showName:!1,outlier:!0,x:{black:75,white:23.24786325},y:{black:"$15,700",white:"$19,338"}},Somerset:{showName:!1,outlier:!1,x:{black:69.56521739,white:23.20855615},y:{black:"$78,071",white:"$33,896"}},Jefferson:{showName:!1,outlier:!1,x:{black:72.97297297,white:38.35252436},y:{black:"$35,040",white:"$45,707"}},Warren:{showName:!1,outlier:!0,x:{black:70,white:39.95067818},y:{black:"$32,692",white:"$25,369"}},Sullivan:{showName:!1,outlier:!0,x:{black:62.5,white:32.63157895},y:{black:"$5,000",white:"$18,667"}},Wayne:{showName:!1,outlier:!1,x:{black:64.86486486,white:35.30997305},y:{black:"$28,682",white:"$32,101"}},Blair:{showName:!0,outlier:!1,x:{black:58.6998088,white:31.76853358},y:{black:"$43,726",white:"$29,256"}},Lycoming:{showName:!0,outlier:!1,x:{black:55.01355014,white:28.14726841},y:{black:"$77,030",white:"$37,028"}},Susquehanna:{showName:!1,outlier:!0,x:{black:66.66666667,white:39.76377953},y:{black:"$29,808",white:"$27,138"}},Erie:{showName:!0,outlier:!1,x:{black:63.73239437,white:37.02714731},y:{black:"$38,881",white:"$23,611"}},Cambria:{showName:!1,outlier:!1,x:{black:65.52083333,white:39.14590747},y:{black:"$51,483",white:"$28,879"}},Huntingdon:{showName:!1,outlier:!1,x:{black:64.05228758,white:37.83333333},y:{black:"$22,010",white:"$18,028"}},Crawford:{showName:!1,outlier:!1,x:{black:53.33333333,white:28.3197832},y:{black:"$32,600",white:"$21,505"}},Centre:{showName:!1,outlier:!1,x:{black:46.74115456,white:21.88492764},y:{black:"$45,976",white:"$34,614"}},Venango:{showName:!1,outlier:!1,x:{black:60.13986014,white:35.56187767},y:{black:"$48,712",white:"$35,510"}},Clearfield:{showName:!1,outlier:!1,x:{black:59.30232558,white:35.64718163},y:{black:"$43,890",white:"$23,215"}},Armstrong:{showName:!1,outlier:!1,x:{black:62.71186441,white:39.52662722},y:{black:"$18,541",white:"$13,560"}},Northumberland:{showName:!1,outlier:!1,x:{black:56.81818182,white:33.91066545},y:{black:"$63,255",white:"$38,641"}},Lawrence:{showName:!1,outlier:!1,x:{black:66.28477905,white:43.4806939},y:{black:"$25,778",white:"$15,192"}},Mifflin:{showName:!1,outlier:!1,x:{black:70.11494253,white:47.48201439},y:{black:"$52,219",white:"$35,331"}},Tioga:{showName:!1,outlier:!1,x:{black:57,white:34.50800915},y:{black:"$30,455",white:"$18,916"}},Allegheny:{showName:!0,outlier:!1,x:{black:57.06645057,white:35.29897333},y:{black:"$21,080",white:"$15,881"}},Westmoreland:{showName:!0,outlier:!1,x:{black:50.05045409,white:28.61736334},y:{black:"$30,920",white:"$17,072"}},Greene:{showName:!1,outlier:!1,x:{black:58.97435897,white:37.86163522},y:{black:"$20,977",white:"$15,107"}},Beaver:{showName:!1,outlier:!1,x:{black:64.33048433,white:43.92212726},y:{black:"$26,145",white:"$13,733"}},McKean:{showName:!1,outlier:!1,x:{black:61.33333333,white:41.23134328},y:{black:"$34,911",white:"$23,475"}},Washington:{showName:!1,outlier:!1,x:{black:55.77092511,white:35.82116788},y:{black:"$33,527",white:"$19,878"}},Luzerne:{showName:!1,outlier:!1,x:{black:53.5892323,white:34.6550856},y:{black:"$47,113",white:"$32,968"}},Lackawanna:{showName:!0,outlier:!1,x:{black:67.1345995,white:48.9720035},y:{black:"$41,104",white:"$26,940"}},Snyder:{showName:!1,outlier:!1,x:{black:52.5,white:34.59183673},y:{black:"$29,659",white:"$27,551"}},Bradford:{showName:!1,outlier:!1,x:{black:62.26415094,white:45.14840183},y:{black:"$63,125",white:"$32,077"}},Cumberland:{showName:!1,outlier:!1,x:{black:51.61744023,white:35.0094162},y:{black:"$34,037",white:"$23,281"}},Butler:{showName:!1,outlier:!1,x:{black:44.7761194,white:29.5154185},y:{black:"$42,155",white:"$12,248"}},Delaware:{showName:!0,outlier:!1,x:{black:63.75237882,white:48.4952381},y:{black:"$43,250",white:"$31,974"}},Bedford:{showName:!1,outlier:!1,x:{black:52.57731959,white:37.56419663},y:{black:"$65,010",white:"$49,176"}},Union:{showName:!0,outlier:!1,x:{black:38.20224719,white:23.24159021},y:{black:"$34,667",white:"$25,807"}},Dauphin:{showName:!0,outlier:!1,x:{black:51.21710526,white:36.4556962},y:{black:"$40,031",white:"$32,313"}},Montgomery:{showName:!0,outlier:!1,x:{black:43.27198364,white:28.69733969},y:{black:"$29,169",white:"$21,885"}},Adams:{showName:!1,outlier:!1,x:{black:43.56060606,white:29.03651562},y:{black:"$29,479",white:"$26,077"}},Chester:{showName:!1,outlier:!1,x:{black:48.47354138,white:34.29690666},y:{black:"$32,205",white:"$22,836"}},Franklin:{showName:!1,outlier:!1,x:{black:49.26553672,white:35.19494204},y:{black:"$61,407",white:"$50,242"}},York:{showName:!1,outlier:!1,x:{black:54.11985019,white:41.11844787},y:{black:"$30,258",white:"$18,416"}},Philadelphia:{showName:!0,outlier:!1,x:{black:56.02170568,white:43.3107617},y:{black:"$54,302",white:"$43,459"}},Lancaster:{showName:!1,outlier:!1,x:{black:55.54532904,white:43.07425541},y:{black:"$57,668",white:"$48,383"}},Perry:{showName:!1,outlier:!1,x:{black:40,white:27.68130746},y:{black:"$41,126",white:"$24,007"}},Mercer:{showName:!1,outlier:!1,x:{black:45.40337711,white:33.35235378},y:{black:"$29,504",white:"$23,005"}},Northampton:{showName:!1,outlier:!1,x:{black:55.7063541,white:43.86813852},y:{black:"$34,972",white:"$24,095"}},Fayette:{showName:!1,outlier:!1,x:{black:54,white:42.30092389},y:{black:"$25,444",white:"$17,203"}},Carbon:{showName:!1,outlier:!1,x:{black:43.7751004,white:32.34139961},y:{black:"$35,236",white:"$24,452"}},Clinton:{showName:!0,outlier:!1,x:{black:47.14285714,white:35.98750976},y:{black:"$29,609",white:"$19,817"}},Lebanon:{showName:!1,outlier:!1,x:{black:48.84547069,white:37.97733949},y:{black:"$36,343",white:"$23,902"}},Montour:{showName:!1,outlier:!0,x:{black:46.15384615,white:35.34136546},y:{black:"$25,556",white:"$27,449"}},Bucks:{showName:!1,outlier:!1,x:{black:41.06901218,white:30.62392673},y:{black:"$73,635",white:"$58,683"}},Schuylkill:{showName:!1,outlier:!1,x:{black:46.5060241,white:37.27521501},y:{black:"$28,947",white:"$19,996"}},Lehigh:{showName:!1,outlier:!1,x:{black:61.81634031,white:52.85376562},y:{black:"$25,138",white:"$16,341"}},Berks:{showName:!0,outlier:!1,x:{black:58.42078961,white:50.24259317},y:{black:"$35,039",white:"$27,399"}},Juniata:{showName:!1,outlier:!0,x:{black:43.75,white:36.67425968},y:{black:"$29,167",white:"$22,330"}},Wyoming:{showName:!1,outlier:!0,x:{black:40,white:35.59650824},y:{black:"$22,611",white:"$25,042"}},Pike:{showName:!1,outlier:!1,x:{black:37.41007194,white:34.02061856},y:{black:"$34,755",white:"$21,534"}},Monroe:{showName:!1,outlier:!1,x:{black:35.13011152,white:32.41612358},y:{black:"$34,085",white:"$21,495"}},Columbia:{showName:!1,outlier:!1,x:{black:40.7960199,white:38.46153846},y:{black:"$57,747",white:"$33,130"}},Fulton:{showName:!1,outlier:!1,x:{black:31.57894737,white:29.27536232},y:{black:"$24,000",white:"$57,879"}},Clarion:{showName:!1,outlier:!1,x:{black:40.625,white:40.83259522},y:{black:"$14,200",white:"$20,698"}},Elk:{showName:!1,outlier:!0,x:{black:27.77777778,white:28.68117798},y:{black:"$14,375",white:"$21,093"}},Indiana:{showName:!1,outlier:!1,x:{black:30.39215686,white:36.21169916},y:{black:"$20,861",white:"$15,479"}},"State Average":{showName:!0,outlier:!1,x:{black:54.7,white:37},y:{black:"$36,202",white:"$26,868"}}},h={"State Average":{showName:!0,x:42.59666979,y:"$31.8K",r:2470},Adams:{showName:!1,x:30.18867925,r:775,y:"$27.0K"},Allegheny:{showName:!0,x:43.50802205,r:13884,y:"$18.6K"},Armstrong:{showName:!1,x:41.05888709,r:742,y:"$13.9K"},Beaver:{showName:!1,x:49.05179283,r:4959,y:"$17.6K"},Bedford:{showName:!1,x:38.63636364,r:563,y:"$50.1K"},Berks:{showName:!0,x:50.92425977,r:6036,y:"$28.3K"},Blair:{showName:!0,x:34.04638145,r:1674,y:"$33.1K"},Bradford:{showName:!1,x:45.49865229,r:824,y:"$32.7K"},Bucks:{showName:!1,x:32.41325938,r:4959,y:"$62.6K"},Butler:{showName:!1,x:31.15234375,r:626,y:"$17.6K"},Cambria:{showName:!1,x:44.29388101,r:2059,y:"$37.0K"},Cameron:{showName:!1,x:21.67832168,r:30,y:"$26.8K"},Carbon:{showName:!1,x:32.99299883,r:1098,y:"$26.8K"},Centre:{showName:!1,x:26.08333333,r:871,y:"$44.3K"},Chester:{showName:!1,x:38.0970325,r:3968,y:"$26.4K"},Clarion:{showName:!1,x:40,r:487,y:"$20.0K"},Clearfield:{showName:!1,x:36.28318584,r:734,y:"$24.3K"},Clinton:{showName:!0,x:36.92628651,r:527,y:"$21.0K"},Columbia:{showName:!1,x:38.18897638,r:667,y:"$35.8K"},Crawford:{showName:!1,x:28.8973384,r:225,y:"$22.6K"},Cumberland:{showName:!1,x:38.5278224,r:2593,y:"$25.0K"},Dauphin:{showName:!0,x:42.44132779,r:5850,y:"$36.6K"},Delaware:{showName:!0,x:55.68060922,r:9514,y:"$38.5K"},Elk:{showName:!1,x:28.62318841,r:229,y:"$21.3K"},Erie:{showName:!0,x:43.95330739,r:2750,y:"$27.8K"},Fayette:{showName:!1,x:44.27074081,r:2463,y:"$19.5K"},Forest:{showName:!1,x:34.75609756,r:50,y:"$22.7K"},Franklin:{showName:!1,x:37.47902685,r:1772,y:"$53.5K"},Fulton:{showName:!1,x:28.67298578,r:113,y:"$54.7K"},Greene:{showName:!1,x:37.44343891,r:324,y:"$15.6K"},Huntingdon:{showName:!1,x:38.96907216,r:552,y:"$18.3K"},Indiana:{showName:!1,x:35.01070664,r:322,y:"$16.6K"},Jefferson:{showName:!1,x:38.55721393,r:460,y:"$45.0K"},Juniata:{showName:!1,x:34.46215139,r:168,y:"$22.4K"},Lackawanna:{showName:!0,x:52.63500325,r:3052,y:"$31.1K"},Lancaster:{showName:!1,x:44.93240475,r:5430,y:"$52.6K"},Lawrence:{showName:!1,x:48.92407633,r:1182,y:"$19.2K"},Lebanon:{showName:!1,x:38.70437956,r:2085,y:"$24.5K"},Lehigh:{showName:!1,x:54.88215488,r:6526,y:"$20.1K"},Luzerne:{showName:!1,x:38.28885249,r:3828,y:"$37.0K"},Lycoming:{showName:!0,x:34.68169761,r:1557,y:"$52.7K"},McKean:{showName:!1,x:42.38134888,r:488,y:"$23.7K"},Mercer:{showName:!1,x:36.12542955,r:1653,y:"$25.0K"},Mifflin:{showName:!1,x:48.49498328,r:721,y:"$39.8K"},Monroe:{showName:!1,x:32.79661017,r:1910,y:"$27.4K"},Montgomery:{showName:!1,x:33.63556165,r:6723,y:"$25.3K"},Montour:{showName:!1,x:35.19163763,r:100,y:"$28.6K"},Northampton:{showName:!1,x:45.83529967,r:3804,y:"$27.5K"},Northumberland:{showName:!1,x:36,r:869,y:"$41.8K"},Perry:{showName:!1,x:28.98148148,r:305,y:"$25.6K"},Philadelphia:{showName:!0,x:50.12216352,r:32072,y:"$54.0K"},Pike:{showName:!1,x:34.16738568,r:382,y:"$22.2K"},Potter:{showName:!1,x:23.36601307,r:142,y:"$19.4K"},Schuylkill:{showName:!1,x:37.74187822,r:2100,y:"$20.6K"},Snyder:{showName:!1,x:35.92870544,r:381,y:"$28.0K"},Somerset:{showName:!1,x:25,r:498,y:"$37.9K"},Sullivan:{showName:!1,x:36.44859813,r:36,y:"$16.9K"},Susquehanna:{showName:!1,x:40.32663317,r:317,y:"$27.6K"},Tioga:{showName:!1,x:36.38603696,r:868,y:"$20.6K"},Union:{showName:!0,x:25.36136662,r:186,y:"$27.5K"},Venango:{showName:!1,x:37.84477229,r:586,y:"$37.5K"},Warren:{showName:!1,x:40.61393152,r:338,y:"$25.4K"},Washington:{showName:!1,x:38.93688681,r:2596,y:"$25.1K"},Wayne:{showName:!1,x:37.20349563,r:286,y:"$34.1K"},Westmoreland:{showName:!0,x:31.71662559,r:3840,y:"$21.0K"},Wyoming:{showName:!1,x:35.68118628,r:377,y:"$25.1K"},York:{showName:!1,x:44.27380952,r:7356,y:"$20.8K"}};(()=>{const e=document.getElementById("race-scatter-plot");new l(n,{name:"Cash Bail Rate",min:20,max:80,numTicks:6,convert:e=>`${e}%`},{name:"Bail Amount",min:0,max:8e4,numTicks:8,convert:e=>0===e?"0":e/1e3+"K"},null,{columns:[{dataKey:"name",isRowHeader:!0},{columnHeader:"% Cash Bail",dataKey:"x",render:e=>`${e.toFixed(1)}%`},{columnHeader:"Avg. Bail Amount",dataKey:"y",render:e=>e.toLocaleString("en",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0})}]},e)})(),(()=>{const e={name:"Cash Bail Rate",min:20,max:60,numTicks:8,convert:e=>`${e}%`},t={name:"Bail Amount",min:0,max:70,numTicks:7,convert:e=>0===e?"0":`${e}K`},i={rows:[{rowHeader:"Cash Bail Rate",dataKey:"x",render:e=>`${e.toFixed(1)}%`},{rowHeader:"Average Bail Amount",dataKey:"y",render:e=>(1e3*e).toLocaleString("en",{style:"currency",currency:"USD",minimumFractionDigits:0,maximumFractionDigits:0})},{rowHeader:"Total Cases",dataKey:"r",render:e=>e.toLocaleString()}]},a=document.getElementById("cases-scatter-plot");new l(h,e,t,{min:4,max:120,minValue:100,maxValue:42e3},i,a)})()}();
//# sourceMappingURL=scatter.fbe1d359.js.map
