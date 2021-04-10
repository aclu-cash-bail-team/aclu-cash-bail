!function(){const e="VIEW ALL",t="VIEW LESS",s='<svg class="caret" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 0.999999L4 4L1 1" stroke="white" stroke-miterlimit="10"/>\n</svg>';class a{constructor(e){this.className=e}render(){this.element=document.createElement("td"),this.setElementClass(this.className)}getClassName(){return this.className}setElementClass(e){this.element.className=e}addElementClass(e){this.element.classList.add(e)}}class r extends a{constructor(e,t){super(t),this.content=e,this.render()}render(){super.render(),this.element.appendChild(document.createTextNode(this.content))}}class l extends a{constructor(e,t){super(`${t} ${e.className}`),this.content=e.value.replace("-","+"),this.render()}render(){super.render(),this.element.appendChild(document.createTextNode(this.content))}}class i extends a{constructor(e,t,s){super(t);const a="percent"===s.unit;this.content=a?e.toFixed(1):e.toLocaleString(),this.render()}render(){super.render(),this.element.appendChild(document.createTextNode(this.content))}}class n extends a{constructor(e,t,s){super(t),this.content=e.values[0],this.average=s.averages[0].value,this.range=s,this.render()}render(){super.render();const e=document.createElement("div");e.className="viz-bar",e.style.width=this.content/this.range.end*100+"%";const t=document.createElement("div"),s=this.content-this.average;s>0&&(t.textContent=`+${s.toFixed(1)}`),s<0&&(t.textContent=`${s.toFixed(1)}`),t.className="bar-label",e.appendChild(t),this.element.appendChild(e);const a=document.createElement("div");a.className="bar-average-line green",a.style.left=this.average/this.range.end*100+"%",this.element.appendChild(a)}}class o extends a{constructor(e,t){super(t),this.values=e.values.filter((e=>0!==e.value)),this.tooltipName=e.name,this.render()}createDistributionTable(){const e=document.createElement("div");return e.className="tooltip-table",this.values.forEach((t=>{const s=document.createElement("div");s.className="tooltip-row";const a=document.createElement("div");a.className="tooltip-cell",a.style.marginRight="10px";const r=document.createElement("div");r.className=t.className,r.classList.add("color-box"),a.appendChild(r);const l=document.createElement("div");l.className="tooltip-cell",l.style.flexGrow=2;const i=document.createElement("div");i.className="tooltip-cell",l.innerText=t.name,i.style.textAlign="right",i.innerText=Math.round(100*t.value)/100+"%",s.appendChild(a),s.appendChild(l),s.appendChild(i),e.appendChild(s)})),e}createTooltip(){const e=document.createElement("div");e.className="dist-tooltip";const t=document.createElement("h3");t.className="dist-tooltip-name",t.innerText=this.tooltipName;const s=this.createDistributionTable();return e.appendChild(t),e.appendChild(s),e}render(){super.render();const e=document.createElement("div");e.className="dist-bar-container",this.values.forEach((t=>{const s=document.createElement("div");s.className=`viz-bar ${t.className}`,e.appendChild(s)}));const t=this.values.map((e=>`${e.value}%`));e.style.gridTemplateColumns=t.join(" ");const s=this.createTooltip();e.appendChild(s),this.element.appendChild(e)}}class d extends a{constructor(e,t,s){super(t),this.content=e.values,this.averages=s.averages,this.range=s,this.vizColors=["green","purple"],this.render()}render(){super.render();const e=document.createElement("div");e.className="viz-number-line",this.element.appendChild(e),this.content.forEach(((e,t)=>{const s=document.createElement("div");s.className=`viz-number-line-point ${this.vizColors[t]}`,s.style.left=`calc(${(e-this.range.start)/this.range.end*100}% - 2px)`,this.element.appendChild(s)})),this.averages.forEach(((e,t)=>{const s=document.createElement("div");s.className=`bar-average-line ${this.vizColors[t]}`,s.style.left=(e.value-this.range.start)/this.range.end*100+"%",this.element.appendChild(s)}))}}class c extends a{constructor(e,t,s,a,r,l,i){super(t),this.content=e,this.sortCol=s,this.sortDir=a,this.initSort=r,this.table=l,this.id=i,this.render(),this.sortCol&&this.element.addEventListener("click",(()=>{this.table.sortCol!==this.id&&(this.sortDir=-1);const e=this.getClassName();this.table.setSortColumn(this.id),this.table.setSortDirection(this.sortDir),this.table.sort(!1),this.setElementClass(e,!0),this.sortDir*=-1})),this.initSort&&(this.sortDir*=-1)}render(){const e=document.createElement("th");if(e.className=this.className,this.element=e,this.sortCol){const t=this.getClassName();this.setElementClass(t,this.initSort);const a=document.createElement("div");a.className="th-wrapper";const r=document.createElement("div");r.appendChild(document.createTextNode(this.content)),0===this.id?(a.appendChild(r),a.innerHTML=a.innerHTML+s):(a.innerHTML=s,a.appendChild(r)),e.appendChild(a)}else e.appendChild(document.createTextNode(this.content))}getClassName(){const e=this.sortDir>0?"sort-asc":this.sortDir<0?"sort-desc":"";return`${this.className} ${e}`}setElementClass(e,t){const s=t?"sorted":"";super.setElementClass(`${e} ${s}`)}}class h extends c{constructor(e,t,s,a,r,l,i){super(e,t,s,a,r,l,i)}render(){const e=this.content.start,t=this.content.end,s=this.content.unit,a=document.createElement("th");a.className=this.className;const r="dollars"===s?`$${Math.round(e/1e3)}K`:e,l="dollars"===s?`$${Math.round(t/1e3)}K`:t;[this.createTickElement(r,"start-num"),this.createTickElement(l,"end-num")].forEach((e=>{a.appendChild(e)})),this.element=a}createTickElement(e,t,s){const a=document.createElement("div");a.className=t;const r=document.createElement("div");r.innerHTML=e,t.includes("average")&&(r.className="average-text"),a.appendChild(r),"start-num"===t&&1===e.toString().length?a.style.paddingLeft="10px":"end-num"===t&&(a.style.paddingRight=8-e.toString().length+"px",a.style.marginRight="-13px");const l=document.createElement("div");return l.className=""+(t.includes("average")?"average-line":"viz-line"),s&&(l.className+=` ${s}`),a.appendChild(l),a}}class u{constructor(e){this.cells=e,this.render()}render(){const e=document.createElement("tr");this.cells.forEach((t=>{e.appendChild(t.element)})),this.element=e}clearedSortedCells(){this.cells.forEach((e=>{const t=e.getClassName();e.setElementClass(t,!1)}))}}class m{constructor(e,t,s,a=""){this.cells=e,this.outlier=t,this.isHidden=s,this.className=a}setIsHidden(e){this.isHidden=e}render(e){const t=document.createElement("tr");return this.element=t,this.isHidden?[]:(t.className=this.className,this.cells.forEach(((s,a)=>{s.setElementClass(s.className),a===e&&s.addElementClass("sorted"),t.appendChild(s.element)})),[this.element])}}class p extends m{constructor(e,t,s,a,r){super(e,t,a),this.isCollapsed=r,this.collapseRows=s}render(e){const t=super.render(e);if(this.element.className="collapsible "+(this.isCollapsed?"collapsed":"expanded"),t.length>0){const e=t[0].firstChild;e.innerHTML=s,this.isCollapsed?e.classList.add("caret-rotated"):e.classList.remove("caret-rotated")}const a=this.collapseRows.flatMap((t=>t.render(e)));return[...t,...a]}}class v{constructor(e,t,s,a,r=[],l=!0){this.classNames=t.map((e=>e.class)),this.headers=t.map((e=>e.header)),this.data=e,this.container=a,this.element=a.getElementsByTagName("table")[0],this.showOutliers=!0,this.summaryRowData=r,this.validate(),this.searchCols=t.map((e=>e.searchable)),this.searchTerms=[],this.isTruncated=!0,this.sortCols=t.map((e=>e.sortable)),this.sortCol=s.col,this.sortDir=s.dir,this.isVisible=l,this.header=this.getHeaderRow(),this.init(),this.sort(!0)}validate(){if(this.classNames.length!==this.headers.length)throw new Error("Number of class names does not match number of headers");if(this.data.some((e=>e.data.length!=this.headers.length)))throw new Error(`${this.headers.length} columns of data required`)}init(){this.element.getElementsByTagName("thead")[0].appendChild(this.header.element);const s=this.container.getElementsByClassName("menu")[0];let a=this.data.flatMap((e=>{const t=e.data.flatMap(((e,t)=>this.searchCols[t]?[e]:[])),s=e.collapseData?e.collapseData.map((e=>e.data[1])):[];return t.concat(s)}));a.sort(),s.textContent="",a.forEach((e=>{const t=document.createElement("div");t.className="item",t.innerText=e,s.appendChild(t)}));this.container.getElementsByTagName("input")[0].addEventListener("change",(e=>{const t=e.target.value;this.searchTerms=t.split(";").filter((e=>""!==e)),this.rows=this.getRows(),this.render()}));const r=this.container.getElementsByClassName("view-all-btn")[0];r.innerText=this.isTruncated?e:t,r.addEventListener("click",(()=>{this.isTruncated=!this.isTruncated,r.innerText=this.isTruncated?e:t,this.rows=this.getRows(),this.render()}));const l=this.container.getElementsByClassName("outliers-btn");if(l.length>0){l[0].addEventListener("click",(e=>{this.toggleOutliers()?e.target.classList.add("showing"):e.target.classList.remove("showing")}))}}getHeaderRow(){const e=this.headers.map(((e,t)=>{const s="text"in e?c:h;return new s(s===c?e.text:e,this.classNames[t],this.sortCols[t],this.sortCols[t]?this.sortDir:0,t===this.sortCol,this,t)}));return new u(e)}getCells(e,t){return e.map(((e,s)=>{let a=r;return"number"==typeof e?a=i:"object"==typeof e&&("bar"===e.type?a=n:"line"===e.type?a=d:"styled"===e.type?a=l:"dist"===e.type&&(a=o)),"string"==typeof e&&e.length>0&&s<=1&&t&&(e+="*"),new a(e,this.classNames[s],this.headers[s])}))}getRows(){let e=0;const t=this.data.map((t=>{const s=this.getCells(t.data,t.outlier),a=this.searchTerms.some((e=>t.data.some(((t,s)=>this.searchCols[s]&&t.toLowerCase()===e.toLowerCase())))),r=this.isTruncated&&e>=10,l=t.outlier&&!this.showOutliers,i=a||!r&&!l&&0===this.searchTerms.length;if(void 0!==t.collapseData){const a=t.collapseData.map((e=>{const s=this.searchTerms.some((t=>e.data[1].toLowerCase()===t.toLowerCase())),a=e.outlier&&!this.showOutliers,r=s||!t.isCollapsed&&!a;return new m(this.getCells(e.data,e.outlier),e.outlier,!r)})),r=a.some((e=>!e.isHidden)),l=i||r;return l&&(e+=a.reduce(((e,t)=>t.isHidden?e:e+1),1)),new p(s,t.outlier,a,!l,!r&&t.isCollapsed)}return i&&e++,new m(s,t.outlier,!i)}));if(this.summaryRowData.length>0){const e=this.getCells(this.summaryRowData);t.unshift(new m(e,!1,!1,"summary-row"))}return t}setSortColumn(e){this.sortCol=e}setSortDirection(e){this.sortDir=e}getSortable(e){if("object"==typeof e||/\d/.test(e)){const t="object"==typeof e?e.value:e;return Number(t.replace?t.replace(/[^\d.-]/g,""):t)}return e}sort(e){e||this.header.clearedSortedCells(),this.data.sort(((e,t)=>{const s=e.data[this.sortCol],a=t.data[this.sortCol],r=this.getSortable(s),l=this.getSortable(a);return r<l?-1*this.sortDir:r>l?this.sortDir:0})),this.rows=this.getRows(),this.render()}toggleOutliers(){return this.showOutliers=!this.showOutliers,this.rows=this.getRows(),this.render(),this.showOutliers}hide(){this.isVisible=!1,this.render()}show(){this.isVisible=!0,this.render()}render(){if(this.isVisible){this.container.classList.remove("hidden");const e=this.element.getElementsByTagName("tbody")[0];e.textContent="",this.rows.forEach(((t,s)=>{t.render(this.sortCol).forEach((t=>e.appendChild(t))),t instanceof p&&t.element.addEventListener("click",(()=>{this.data[s].isCollapsed=!t.isCollapsed,this.rows=this.getRows(),this.render()}))}))}else this.container.classList.add("hidden")}}const $=[{data:["Adams","$3.6M","$11.1M",32.43914185,{type:"bar",values:[32.43914185]}],outlier:!1},{data:["Allegheny","$57.6M","$86.0M",67.01743239,{type:"bar",values:[67.01743239]}],outlier:!1},{data:["Armstrong","$2.9M","$4.6M",63.23898622,{type:"bar",values:[63.23898622]}],outlier:!1},{data:["Beaver","$4.7M","$9.3M",49.91935539,{type:"bar",values:[49.91935539]}],outlier:!1},{data:["Bedford","$2.2M","$3.1M",70.14284972,{type:"bar",values:[70.14284972]}],outlier:!1},{data:["Berks","$27.4M","$35.7M",76.92692634,{type:"bar",values:[76.92692634]}],outlier:!1},{data:["Blair","N/R","$8.6M","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Bradford","$0.7M","$4.1M",16.17296357,{type:"bar",values:[16.17296357]}],outlier:!1},{data:["Bucks","$16.0M","$27.6M",57.90105653,{type:"bar",values:[57.90105653]}],outlier:!1},{data:["Butler","$10.0M","$11.6M",86.19403059,{type:"bar",values:[86.19403059]}],outlier:!1},{data:["Cambria","$4.9M","$10.6M",46.00591555,{type:"bar",values:[46.00591555]}],outlier:!1},{data:["Cameron","N/A","N/A","N/A",{type:"bar",values:[62.4]}],outlier:!1},{data:["Carbon","$2.7M","$5.0M",55.20362881,{type:"bar",values:[55.20362881]}],outlier:!1},{data:["Centre","$3.0M","$8.9M",33.49236863,{type:"bar",values:[33.49236863]}],outlier:!1},{data:["Chester","$16.3M","$30.0M",54.39229774,{type:"bar",values:[54.39229774]}],outlier:!1},{data:["Clarion","$0.8M","$2.4M",32.47664265,{type:"bar",values:[32.47664265]}],outlier:!1},{data:["Clearfield","$1.6M","$3.4M",47.56945001,{type:"bar",values:[47.56945001]}],outlier:!1},{data:["Clinton","$1.7M","$6.5M",26.20482058,{type:"bar",values:[26.20482058]}],outlier:!1},{data:["Columbia","$2.8M","$6.0M",45.91836515,{type:"bar",values:[45.91836515]}],outlier:!1},{data:["Crawford","$3.3M","$6.0M",54.53667276,{type:"bar",values:[54.53667276]}],outlier:!1},{data:["Cumberland","$8.5M","$11.3M",75.28473396,{type:"bar",values:[75.28473396]}],outlier:!1},{data:["Dauphin","$0.3M","N/R","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Delaware","$0.4M","N/R","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Elk","$1.9M","$2.7M",70.16631838,{type:"bar",values:[70.16631838]}],outlier:!1},{data:["Erie","$6.7M","$17.0M",39.4405589,{type:"bar",values:[39.4405589]}],outlier:!1},{data:["Fayette","$9.3M","$7.6M",100,{type:"bar",values:[100]}],outlier:!1},{data:["Forest","N/A","N/A","N/A",{type:"bar",values:[62.4]}],outlier:!1},{data:["Franklin","$6.2M","$13.3M",46.55092852,{type:"bar",values:[46.55092852]}],outlier:!1},{data:["Fulton","N/A","N/A","N/A",{type:"bar",values:[62.4]}],outlier:!1},{data:["Greene","$1.3M","$2.7M",47.56944381,{type:"bar",values:[47.56944381]}],outlier:!1},{data:["Huntingdon","$1.3M","$1.7M",77.32557584,{type:"bar",values:[77.32557584]}],outlier:!1},{data:["Indiana","$3.6M","$7.1M",51.53061275,{type:"bar",values:[51.53061275]}],outlier:!1},{data:["Jefferson","$1.5M","$3.3M",46.1397167,{type:"bar",values:[46.1397167]}],outlier:!1},{data:["Juniata","N/A","N/A","N/A",{type:"bar",values:[62.4]}],outlier:!1},{data:["Lackawanna","$16.9M","$25.4M",66.42315908,{type:"bar",values:[66.42315908]}],outlier:!1},{data:["Lancaster","$15.5M","$27.6M",56.0542793,{type:"bar",values:[56.0542793]}],outlier:!1},{data:["Lawrence","N/R","$6.2M","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Lebanon","$4.7M","$9.3M",50.50411042,{type:"bar",values:[50.50411042]}],outlier:!1},{data:["Lehigh","$9.0M","$30.0M",30.0079569,{type:"bar",values:[30.0079569]}],outlier:!1},{data:["Luzerne","N/R","$26.3M","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Lycoming","$9.0M","$10.3M",87.12023555,{type:"bar",values:[87.12023555]}],outlier:!1},{data:["McKean","$2.1M","$2.6M",80.62499691,{type:"bar",values:[80.62499691]}],outlier:!1},{data:["Mercer","$3.5M","$7.8M",45.21396757,{type:"bar",values:[45.21396757]}],outlier:!1},{data:["Mifflin","$2.1M","$3.6M",58.29183635,{type:"bar",values:[58.29183635]}],outlier:!1},{data:["Monroe","$6.3M","$12.7M",49.18033199,{type:"bar",values:[49.18033199]}],outlier:!1},{data:["Montgomery","$29.6M","$38.8M",76.43072401,{type:"bar",values:[76.43072401]}],outlier:!1},{data:["Montour","$0.7M","$0.9M",76.64233742,{type:"bar",values:[76.64233742]}],outlier:!1},{data:["Northampton","$12.6M","$26.6M",47.6338724,{type:"bar",values:[47.6338724]}],outlier:!1},{data:["Northumberland","$1.5M","$2.4M",64.0957536,{type:"bar",values:[64.0957536]}],outlier:!1},{data:["Perry","$3.1M","$4.8M",64.92248608,{type:"bar",values:[64.92248608]}],outlier:!1},{data:["Philadelphia","$205.1M","$260.9M",78.60564543,{type:"bar",values:[78.60564543]}],outlier:!1},{data:["Pike","$8.1M","$10.2M",79.57516231,{type:"bar",values:[79.57516231]}],outlier:!1},{data:["Potter","$0.3M","$0.7M",38.28125105,{type:"bar",values:[38.28125105]}],outlier:!1},{data:["Schuylkill","$4.9M","$7.3M",67.50973321,{type:"bar",values:[67.50973321]}],outlier:!1},{data:["Snyder","$1.1M","$3.4M",33.18584058,{type:"bar",values:[33.18584058]}],outlier:!1},{data:["Somerset","$3.8M","$2.9M",100,{type:"bar",values:[100]}],outlier:!1},{data:["Sullivan","N/A","N/A","N/A",{type:"bar",values:[62.4]}],outlier:!1},{data:["Susquehanna","$2.7M","$3.1M",87.27389024,{type:"bar",values:[87.27389024]}],outlier:!1},{data:["Tioga","$1.2M","$2.6M",44.75309491,{type:"bar",values:[44.75309491]}],outlier:!1},{data:["Union","$0.4M","$0.9M",41.91170231,{type:"bar",values:[41.91170231]}],outlier:!1},{data:["Venango","$1.8M","$2.7M",65.28663594,{type:"bar",values:[65.28663594]}],outlier:!1},{data:["Warren","N/R","$3.1M","N/R",{type:"bar",values:[62.4]}],outlier:!1},{data:["Washington","$4.0M","$7.7M",51.11357976,{type:"bar",values:[51.11357976]}],outlier:!1},{data:["Wayne","$2.8M","$4.4M",63.54167183,{type:"bar",values:[63.54167183]}],outlier:!1},{data:["Westmoreland","$8.4M","$16.5M",51.29716715,{type:"bar",values:[51.29716715]}],outlier:!1},{data:["Wyoming","$1.9M","$2.2M",85.99998119,{type:"bar",values:[85.99998119]}],outlier:!1},{data:["York","$16.7M","$54.6M",30.66932716,{type:"bar",values:[30.66932716]}],outlier:!1}];(()=>{const e=document.getElementById("pretrial-spending-container");new v($,[{class:"county-name-cell",header:{text:"",unit:""},sortable:!1,searchable:!0},{class:"spending-cell number-cell",header:{text:"Cost",unit:"dollars"},sortable:!0,searchable:!1},{class:"total-budget-cell number-cell",header:{text:"Budget",unit:"dollars"},sortable:!0,searchable:!1},{class:"fraction-budget-cell number-cell",header:{text:"Pct. Budget",unit:"percent"},sortable:!0,searchable:!1},{class:"viz-cell",header:{start:0,end:100,averages:[{name:"",value:62.4}],unit:"percent"},sortable:!1,searchable:!1}],{col:1,dir:-1},e,["Pennsylvania","$10.1M","$16.1M",62.4,{type:"bar",values:[62.4]}])})()}();
//# sourceMappingURL=pretrial-spending.f0ef3a45.js.map
