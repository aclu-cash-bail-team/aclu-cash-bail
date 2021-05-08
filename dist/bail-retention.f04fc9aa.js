!function(){const t="VIEW ALL",e="VIEW LESS",o='<svg class="caret" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 0.999999L4 4L1 1" stroke="white" stroke-miterlimit="10"/>\n</svg>';class n{constructor(t){this.className=t}render(){this.element=document.createElement("td"),this.setElementClass(this.className)}getClassName(){return this.className}setElementClass(t){this.element.className=t}addElementClass(t){this.element.classList.add(t)}}class a extends n{constructor(t,e){super(e),this.content=t,this.render()}render(){super.render(),this.element.appendChild(document.createTextNode(this.content))}}class s extends n{constructor(t,e){super(e),this.content=document.createElement("a"),this.content.className="retention-fee-link",this.content.href=t.href,this.content.target="_blank",this.content.innerText=`${t.text} ➚`,this.render()}render(){super.render(),this.element.appendChild(this.content)}}class r extends n{constructor(t,e){super(e),this.content=document.createElement("span"),this.content.innerText=t.text;const o=document.createElement("sup");o.innerText=t.number,this.content.appendChild(o),this.render()}render(){super.render(),this.element.appendChild(this.content)}}class i extends n{constructor(t,e,o){super(e);const n="percent"===o.unit;this.content=n?t.toFixed(1):t.toLocaleString(),this.render()}render(){super.render(),this.element.appendChild(document.createTextNode(this.content))}}class l extends n{constructor(t,e,o){super(e),this.content=t.values[0],this.average=o.averages[0].value,this.range=o,this.render()}render(){super.render();const t=document.createElement("div");t.className="viz-bar",t.style.width=this.content/this.range.end*100+"%";const e=document.createElement("div"),o=this.content-this.average;o>0&&(e.textContent=`+${o.toFixed(1)}`),o<0&&(e.textContent=`${o.toFixed(1)}`),e.className="bar-label",t.appendChild(e),this.element.appendChild(t);const n=document.createElement("div");n.className="bar-average-line green",n.style.left=this.average/this.range.end*100+"%",this.element.appendChild(n)}}class d extends n{constructor(t,e){super(e),this.values=t.values.filter((t=>0!==t.value)),this.tooltipName=t.name,this.render()}createDistributionTable(){const t=document.createElement("div");return t.className="tooltip-table",this.values.forEach((e=>{const o=document.createElement("div");o.className="tooltip-row";const n=document.createElement("div");n.className="tooltip-cell",n.style.marginRight="10px";const a=document.createElement("div");a.className=e.className,a.classList.add("color-box"),n.appendChild(a);const s=document.createElement("div");s.className="tooltip-cell",s.style.flexGrow=2;const r=document.createElement("div");r.className="tooltip-cell",s.innerText=e.name,r.style.textAlign="right",r.innerText=Math.round(100*e.value)/100+"%",o.appendChild(n),o.appendChild(s),o.appendChild(r),t.appendChild(o)})),t}createTooltip(){const t=document.createElement("div");t.className="dist-tooltip";const e=document.createElement("h3");e.className="dist-tooltip-name",e.innerText=this.tooltipName;const o=this.createDistributionTable();return t.appendChild(e),t.appendChild(o),t}render(){super.render();const t=document.createElement("div");t.className="dist-bar-container",this.values.forEach((e=>{const o=document.createElement("div");o.className=`viz-bar ${e.className}`,t.appendChild(o)}));const e=this.values.map((t=>`${t.value}%`));t.style.gridTemplateColumns=e.join(" ");const o=this.createTooltip();t.appendChild(o),this.element.appendChild(t)}}class h extends n{constructor(t,e,o){super(e),this.content=t.values,this.averages=o.averages,this.range=o,this.vizColors=["green","purple"],this.render()}render(){super.render();const t=document.createElement("div");t.className="viz-number-line",this.element.appendChild(t),this.content.forEach(((t,e)=>{const o=document.createElement("div");o.className=`viz-number-line-point ${this.vizColors[e]}`,o.style.left=`calc(${(t-this.range.start)/this.range.end*100}% - 2px)`,this.element.appendChild(o)})),this.averages.forEach(((t,e)=>{const o=document.createElement("div");o.className=`bar-average-line ${this.vizColors[e]}`,o.style.left=(t.value-this.range.start)/this.range.end*100+"%",this.element.appendChild(o)}))}}class c extends n{constructor(t,e,o,n,a,s,r){super(e),this.content=t,this.sortCol=o,this.sortDir=n,this.initSort=a,this.table=s,this.id=r,this.render(),this.sortCol&&this.element.addEventListener("click",(()=>{this.table.sortCol!==this.id&&(this.sortDir=-1);const t=this.getClassName();this.table.setSortColumn(this.id),this.table.setSortDirection(this.sortDir),this.table.sort(!1),this.setElementClass(t,!0),this.sortDir*=-1})),this.initSort&&(this.sortDir*=-1)}render(){const t=document.createElement("th");if(t.className=this.className,this.element=t,this.sortCol){const e=this.getClassName();this.setElementClass(e,this.initSort);const n=document.createElement("div");n.className="th-wrapper";const a=document.createElement("div");a.appendChild(document.createTextNode(this.content)),0===this.id?(n.appendChild(a),n.innerHTML=n.innerHTML+o):(n.innerHTML=o,n.appendChild(a)),t.appendChild(n)}else t.appendChild(document.createTextNode(this.content))}getClassName(){const t=this.sortDir>0?"sort-asc":this.sortDir<0?"sort-desc":"";return`${this.className} ${t}`}setElementClass(t,e){const o=e?"sorted":"";super.setElementClass(`${t} ${o}`)}}class f extends c{constructor(t,e,o,n,a,s,r){super(t,e,o,n,a,s,r)}render(){const t=this.content.start,e=this.content.end,o=this.content.unit,n=document.createElement("th");n.className=this.className;const a="dollars"===o?`$${Math.round(t/1e3)}K`:t,s="dollars"===o?`$${Math.round(e/1e3)}K`:e;[this.createTickElement(a,"start-num"),this.createTickElement(s,"end-num")].forEach((t=>{n.appendChild(t)})),this.element=n}createTickElement(t,e,o){const n=document.createElement("div");n.className=e;const a=document.createElement("div");a.innerHTML=t,e.includes("average")&&(a.className="average-text"),n.appendChild(a),"start-num"===e&&1===t.toString().length?n.style.paddingLeft="10px":"end-num"===e&&(n.style.paddingRight=13-3*t.toString().length+"px",n.style.marginRight="-13px");const s=document.createElement("div");return s.className=""+(e.includes("average")?"average-line":"viz-line"),o&&(s.className+=` ${o}`),n.appendChild(s),n}}class p{constructor(t){this.cells=t,this.render()}render(){const t=document.createElement("tr");this.cells.forEach((e=>{t.appendChild(e.element)})),this.element=t}clearedSortedCells(){this.cells.forEach((t=>{const e=t.getClassName();t.setElementClass(e,!1)}))}}class u{constructor(t,e,o,n=""){this.cells=t,this.outlier=e,this.isHidden=o,this.className=n}setIsHidden(t){this.isHidden=t}render(t){const e=document.createElement("tr");return this.element=e,this.isHidden?[]:(e.className=this.className,this.cells.forEach(((o,n)=>{o.setElementClass(o.className),n===t&&o.addElementClass("sorted"),e.appendChild(o.element)})),[this.element])}}class m extends u{constructor(t,e,o,n,a){super(t,e,n),this.isCollapsed=a,this.collapseRows=o}render(t){const e=super.render(t);if(this.element.className="collapsible "+(this.isCollapsed?"collapsed":"expanded"),e.length>0){const t=e[0].firstChild;t.innerHTML=o,this.isCollapsed?t.classList.add("caret-rotated"):t.classList.remove("caret-rotated")}const n=this.collapseRows.flatMap((e=>e.render(t)));return[...e,...n]}}class C{constructor(t,e,o,n,a=[],s=!0){this.classNames=e.map((t=>t.class)),this.headers=e.map((t=>t.header)),this.data=t,this.container=n,this.element=n.getElementsByTagName("table")[0],this.showOutliers=!0,this.summaryRowData=a,this.validate(),this.searchCols=e.map((t=>t.searchable)),this.searchTerms=[],this.isTruncated=!0,this.sortCols=e.map((t=>t.sortable)),this.sortCol=o.col,this.sortDir=o.dir,this.isVisible=s,this.header=this.getHeaderRow(),this.init(),this.sort(!0)}validate(){if(this.classNames.length!==this.headers.length)throw new Error("Number of class names does not match number of headers");if(this.data.some((t=>t.data.length!=this.headers.length)))throw new Error(`${this.headers.length} columns of data required`)}init(){this.element.getElementsByTagName("thead")[0].appendChild(this.header.element);const o=this.container.getElementsByClassName("menu")[0];let n=this.data.flatMap((t=>{const e=t.data.flatMap(((t,e)=>this.searchCols[e]?[t]:[])),o=t.collapseData?t.collapseData.map((t=>t.data[1])):[];return e.concat(o)}));n.sort(),o.textContent="",n.forEach((t=>{const e=document.createElement("div");e.className="item",e.innerText=t,o.appendChild(e)}));this.container.getElementsByTagName("input")[0].addEventListener("change",(t=>{const e=t.target.value;this.searchTerms=e.split(";").filter((t=>""!==t)),this.rows=this.getRows(),this.render()}));const a=this.container.getElementsByClassName("view-all-btn")[0];a.innerText=this.isTruncated?t:e,a.addEventListener("click",(()=>{this.isTruncated=!this.isTruncated,a.innerText=this.isTruncated?t:e,this.rows=this.getRows(),this.render()}));const s=this.container.getElementsByClassName("outliers-btn");if(s.length>0){s[0].addEventListener("click",(t=>{this.toggleOutliers()?t.target.classList.add("showing"):t.target.classList.remove("showing")}))}}getHeaderRow(){const t=this.headers.map(((t,e)=>{const o="text"in t?c:f;return new o(o===c?t.text:t,this.classNames[e],this.sortCols[e],this.sortCols[e]?this.sortDir:0,e===this.sortCol,this,e)}));return new p(t)}getCells(t,e){return t.map(((t,o)=>{let n=a;return"number"==typeof t?n=i:"object"==typeof t&&("bar"===t.type?n=l:"line"===t.type?n=h:"dist"===t.type?n=d:"link"===t.type?n=s:"footnote"===t.type&&(n=r)),"string"==typeof t&&t.length>0&&o<=1&&e&&(t+="*"),new n(t,this.classNames[o],this.headers[o])}))}getRows(){let t=0;const e=this.data.map((e=>{const o=this.getCells(e.data,e.outlier),n=this.searchTerms.some((t=>e.data.some(((e,o)=>this.searchCols[o]&&e.toLowerCase()===t.toLowerCase())))),a=this.isTruncated&&t>=10,s=e.outlier&&!this.showOutliers,r=n||!a&&!s&&0===this.searchTerms.length;if(void 0!==e.collapseData){const n=e.collapseData.map((t=>{const o=this.searchTerms.some((e=>t.data[1].toLowerCase()===e.toLowerCase())),n=t.outlier&&!this.showOutliers,a=o||!e.isCollapsed&&!n;return new u(this.getCells(t.data,t.outlier),t.outlier,!a)})),a=n.some((t=>!t.isHidden)),s=r||a;return s&&(t+=n.reduce(((t,e)=>e.isHidden?t:t+1),1)),new m(o,e.outlier,n,!s,!a&&e.isCollapsed)}return r&&t++,new u(o,e.outlier,!r)}));if(this.summaryRowData.length>0){const t=this.getCells(this.summaryRowData);e.unshift(new u(t,!1,!1,"summary-row"))}return e}setSortColumn(t){this.sortCol=t}setSortDirection(t){this.sortDir=t}getSortable(t){if("object"==typeof t||/\d/.test(t)){const e="object"==typeof t?t.value:t;return Number(e.replace?e.replace(/[^\d.-]/g,""):e)}return t}sort(t){t||this.header.clearedSortedCells(),this.data.sort(((t,e)=>{const o=t.data[this.sortCol],n=e.data[this.sortCol],a=this.getSortable(o),s=this.getSortable(n);return a<s?-1*this.sortDir:a>s?this.sortDir:0})),this.rows=this.getRows(),this.render()}toggleOutliers(){return this.showOutliers=!this.showOutliers,this.rows=this.getRows(),this.render(),this.showOutliers}hide(){this.isVisible=!1,this.render()}show(){this.isVisible=!0,this.render()}render(){if(this.isVisible){this.container.classList.remove("hidden");const t=this.element.getElementsByTagName("tbody")[0];t.textContent="",this.rows.forEach(((e,o)=>{e.render(this.sortCol).forEach((e=>t.appendChild(e))),e instanceof m&&e.element.addEventListener("click",(()=>{this.data[o].isCollapsed=!e.isCollapsed,this.rows=this.getRows(),this.render()}))}))}else this.container.classList.add("hidden")}}const w=[{data:["Adams",{type:"link",text:"4.5% of first $1,000 deposited, 1.5% of each additional dollar",href:"http://www.adamscounty.us/Dept/CourtofCommonPleas/Documents/Adams%20County%20Rules%20of%20Criminal%20Procedure.pdf"}]},{data:["Allegheny",{type:"link",text:"5% of first $1,000 deposited, 2% of each additional dollar",href:"https://www.alleghenycounty.us/court-records/criminal/cost-and-fee-schedule.aspx"}]},{data:["Armstrong",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"https://co.armstrong.pa.us/images/departments/prothonotary/prothfees.pdf"}]},{data:["Beaver",{type:"link",text:"30% of amount deposited, but no less than $10",href:"http://www.beavercountypa.gov/Depts/Courts/CCP/Documents/Local%20Rules%20Criminal%20Procedure.pdf"}]},{data:["Bedford",{type:"link",text:"5% of first $1,000 deposited, 2% of each additional dollar",href:"https://www.bedfordcountypa.org/document_center/Prothonotary/Amended%20Clerk%20of%20Courts%20%20Fee%20Schedule.pdf"}]},{data:["Berks",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"http://www.co.berks.pa.us/Dept/Prothy/Documents/FEE%20BILL%20update%201-1-2019%20-%20Act%20119%20Increase.pdf"}]},{data:["Blair",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with Office of the Prothonotary on 5/1/2020",number:1}]},{data:["Bradford",{type:"link",text:"3% of first $1,000 deposited, 1% for each additional dollar",href:"http://bradfordcountypa.org/wp-content/uploads/2019/01/Prothonotary-Fee-Schedule.pdf"}]},{data:["Bucks","$100"]},{data:["Butler",{type:"link",text:"5.25% of first $1,000 deposited, 1.8% of each additional dollar ",href:"https://www.butlercountypa.gov/DocumentCenter/View/878/Fee-Schedule-PDF"}]},{data:["Cambria","$25"]},{data:["Cameron",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"http://www.cameroncountypa.com/Document_Center/Clerk_Court/2020%20Protho%20and%20Clerk%20of%20Courts%20Fee%20Schedules.pdf"}]},{data:["Carbon",{type:"link",text:"$75",href:"https://www.carboncourts.com/Crimrules.htm#l535d"}]},{data:["Centre",{type:"footnote",text:"None",footnote:"Conversation with Office of the Prothonotary on 5/1/2020",number:2}]},{data:["Chester",{type:"link",text:"For percentage bail, 40% of amount deposited, but no less than $50",href:"https://chesco.org/DocumentCenter/View/34793/CCCriminal-Rules?bidId="}]},{data:["Clarion",{type:"footnote",text:"None",footnote:"Conversation with Office of the Prothonotary on 5/1/2020",number:3}]},{data:["Clearfield",{type:"footnote",text:"None",footnote:"Conversation with the Office of the Clerk of Courts on 5/1/2020.",number:4}]},{data:["Clinton",{type:"link",text:"3% of first $1,000 deposited, 1% for each additional dollar",href:"https://www.clintoncountypa.com/home/showdocument?id=2151"}]},{data:["Columbia",{type:"link",text:"$25",href:"http://www.columbiamontourcourts.com/wp-content/uploads/2015/05/Criminal-Local-Rules.pdf"}]},{data:["Crawford",{type:"footnote",text:"None",footnote:"Conversation with the Office of the Clerk of Courts on 05/1/2020.",number:5}]},{data:["Cumberland",{type:"link",text:"5% of first $1,000 deposited, 1.5% for each additional dollar",href:"https://www.ccpa.net/1919/Current-Fee-Schedule"}]},{data:["Dauphin",{type:"link",text:"For percentage bail, 30% percent of amount deposited, but no less than $50; for nominal bail, $25",href:"https://cms3.revize.com/revize/dauphincounty/document_center/courtdepartments/Local%20Rules%20of%20Court/Criminal%20Rules/530-Duties%20and%20Powers%20of%20a%20Bail%20Agency.pdf"}]},{data:["Delaware",{type:"link",text:"For percentage bail, 40% percent of amount deposited, but no less than $100; for straight bail, 4% of first $1,000 deposited, 2% of each additional dollar",href:"https://www.delcopa.gov/courts/localrules/CriminalRules.pdf"}]},{data:["Elk",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"https://www.co.elk.pa.us/images/Prothonotary/CLERK-OF-COURTS-FEE-SCHEDULE-2019-2021.pdf"}]},{data:["Erie",{type:"link",text:"$16.50 filing fee on all bonds",href:"https://eriecountypa.gov/wp-content/uploads/2019/06/BOND-INFORMATION.revised-2019.pdf  "}]},{data:["Fayette",{type:"link",text:"For percentage bail, 30% percent of amount deposited, but no less than $10",href:"https://www.fayettecountypa.org/DocumentCenter/View/1737/Local-Rules-PDF?bidId="}]},{data:["Forest",{type:"footnote",text:"None",footnote:"Conversation with the Office of the Clerk of Courts on 5/26/2020",number:6}]},{data:["Franklin",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"https://franklincountypa.gov/ckeditorfiles/files/Clerk%20of%20Courts/03012019%20Fee%20Schedule.pdf"}]},{data:["Fulton",{type:"footnote",text:"None",footnote:"Conversation with Magisterial District Judge Wendy Richards Mellott on 5/8/2020",number:7}]},{data:["Greene",{type:"footnote",text:"None",footnote:"Conversation with the Office of the Clerk of Courts on 5/6/2020",number:8}]},{data:["Huntingdon",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"https://huntingdoncountycourt.net/wp-content/uploads/2019/01/2019_Prothonotary_Fee_Schedule.pdf"}]},{data:["Indiana",{type:"footnote",text:"None",footnote:"Conversation with the Office of the Clerk of Courts on 5/8/2020",number:9}]},{data:["Jefferson",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/8/2020",number:10}]},{data:["Juniata",{type:"footnote",text:"None",footnote:"Conversation with Office of Prothonotary on 5/8/2020",number:11}]},{data:["Lackawanna",{type:"link",text:"For percentage bail, 20% of amount deposited, but no less than $50 and no greater than $500",href:"https://www.lackawannacounty.org/wp-content/uploads/2017/11/Rules-of-Criminal-Procedure.pdf"}]},{data:["Lancaster",{type:"link",text:"4.9% of first $1,000 deposited, 1.6% of each additional dollar",href:"https://lancasterpaclerkofcourts.com/DocumentCenter/View/37/Fee-Schedule?bidId="}]},{data:["Lawrence",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"https://co.lawrence.pa.us/gov/prothonotary-lawrence_county/clerk-of-court-fees/"}]},{data:["Lebanon",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/21/2020 ",number:12}]},{data:["Lehigh",{type:"link",text:"For percentage bail, 30% of amount deposited, but no less than $10; for straight bail,  6.54% of first $1,000, 2.17% of each additional dollar",href:"https://www.lccpa.org/criminal/CriminalCourtRules.pdf"}]},{data:["Luzerne",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:" https://www.luzernecounty.org/DocumentCenter/View/11672/Fee-Schedule"}]},{data:["Lycoming",{type:"link",text:"For straight bail, 3% of first $1,000 deposited, 1% of each additional dollar",href:"https://www.lyco.org/Portals/1/Prothonotary/Documents/Fee%20Schedule.pdf?ver=2019-02-08-084920-037 "}]},{data:["McKean",{type:"footnote",text:"None",footnote:"Conversation with Office of the Prothonotary on 5/22/2020",number:13}]},{data:["Mercer",{type:"footnote",text:"6% of first $1,000 deposited, 2% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/22/2020",number:14}]},{data:["Mifflin",{type:"footnote",text:"4.5% of first $1,000 deposited, 1.5% of each additional dollar",footnote:"Conversation with Office of the Prothonotary on 5/22/2020",number:15}]},{data:["Monroe","Unable to confirm fee"]},{data:["Montgomery",{type:"link",text:"Graduated percentages for straight and cash bail",href:"https://www.montcopa.org/DocumentCenter/View/533/Cash-Bail-Fees?bidId="}]},{data:["Montour",{type:"link",text:"$25",href:"http://www.columbiamontourcourts.com/wp-content/uploads/2015/05/Criminal-Local-Rules.pdf"}]},{data:["Northampton",{type:"link",text:"For percentage bail, 20% of amount deposited; for straight bail, 4.5% of first $1,000 deposited, 1.5% for each additional dollar",href:"https://www.northamptoncounty.org/CRTSRVCS/CRIMINAL/Documents/FEE%20SCHEDULE.pdf#search=criminal%20fees"}]},{data:["Northumberland",{type:"footnote",text:"$25",footnote:"Conversation with the Office of the Clerk of Courts on 7/24/2020",number:16}]},{data:["Perry",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/22/2020",number:17}]},{data:["Philadelphia",{type:"link",text:"None if the defendant appears at all court dates",href:"https://www.courts.phila.gov/pdf/rules/CP-Criminal-Division-Compiled-Rules.pdf"}]},{data:["Pike",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:" https://www.pikepa.org/Prothfold/Prothonotaryfee.pdf "}]},{data:["Potter",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:" https://pottercountypa.net/post/_docs/2018POCO_FEE_SCHEDULE.pdf  "}]},{data:["Schuylkill",{type:"link",text:"For percentage bail, 10% of the amount deposited, but no less than $10",href:"http://www.co.schuylkill.pa.us/Offices/LawLibrary/CriminalRulesRevNovember2018.pdf"}]},{data:["Snyder",{type:"footnote",text:"None",footnote:"Conversation with Office of Prothonotary on 5/15/2020",number:18}]},{data:["Somerset",{type:"footnote",text:"1% of all money deposited",footnote:"Conversation with the Office of the Clerk of Courts on 5/15 and 7/24/2020.",number:19}]},{data:["Sullivan",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with Office of Prothonotary on 5/26/2020",number:20}]},{data:["Susquehanna",{type:"footnote",text:"4.5% of first $1,000 deposited, 1.5% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 7/24/2020.",number:21}]},{data:["Tioga",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:" http://www.tiogacountypa.us/Departments/Prothonotary_Clerk_of_Courts/Documents/TIOGA%20COUNTY%20PROTHONOTARY%20FEE%20SCHEDULE%20EFFECTIVE%20DECEMBER%201.pdf"}]},{data:["Union",{type:"footnote",text:"None",footnote:"Conversation with Office of Prothonotary on 5/15/2020",number:22}]},{data:["Venango",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar  Additional $30 service fee",footnote:"Conversation with the Office of the Clerk of Courts on 5/26/2020",number:23}]},{data:["Warren",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with Office of Prothonotary on 5/21/2020",number:24}]},{data:["Washington",{type:"footnote",text:"For percentage bail, $60; for straight bail, 5% of first $1,000 deposited, 1.8% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/21/2020",number:25}]},{data:["Wayne",{type:"link",text:"3% of first $1,000 deposited, 1% of each additional dollar",href:"http://www.waynecountypa.gov/DocumentCenter/View/901/Fee-Schedule-PDF?bidId="}]},{data:["Westmoreland",{type:"footnote",text:"6.6% of first $1,000 deposited, 2.5% of each additional dollar",footnote:"Conversation with the Office of the Clerk of Courts on 5/18/2020",number:26}]},{data:["Wyoming",{type:"footnote",text:"3% of first $1,000 deposited, 1% of each additional dollar",footnote:"Conversation with Office of Prothonotary on 5/18/2020",number:27}]},{data:["York","Unable to confirm fee"]}];(()=>{const t=document.getElementById("bail-retention-fee-container");new C(w,[{class:"county-name-cell",header:{text:"County",unit:""},sortable:!0,searchable:!0},{class:"retention-fee-cell",header:{text:"Retention Fee",unit:""},sortable:!1,searchable:!1}],{col:0,dir:1},t)})(),(()=>{const t=document.getElementById("bail-retention-fee-footnotes");w.forEach((e=>{if("footnote"==e.data[1].type){const o=e.data[1].number,n=document.createElement("p");n.className="bail-retention-footnote",n.innerText=o;const a=document.createElement("span");a.className="footnote-text",a.innerText=e.data[1].footnote,n.appendChild(a),t.appendChild(n)}}))})()}();
//# sourceMappingURL=bail-retention.f04fc9aa.js.map
