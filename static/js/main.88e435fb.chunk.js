(this["webpackJsonpfinkraft-assmt"]=this["webpackJsonpfinkraft-assmt"]||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),o=n.n(r),s=n(5),a=n.n(s),i=n(4),l=n(6),d=n(7),u=n(2),j=n(9),b=n(8);var h=function(t){var e=t.contact;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("input",{type:"checkbox",onChange:function(n){t.addSelection(e,n.target.checked)}})}),Object(c.jsx)("td",{children:e.contact_name}),Object(c.jsx)("td",{children:e.company_name}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.gst_treatment}),Object(c.jsx)("td",{children:e.outstanding_receivable_amount}),Object(c.jsx)("td",{children:e.outstanding_payable_amount})]})},O=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).getAllContacts=function(){return fetch("https://node-backend-test-tk.herokuapp.com/contacts",{method:"GET"}).then((function(t){return t.json()})).catch((function(t){return t.json()}))},t.modifySelectedContacts=function(e,n){var c=t.state.selectedIds,r=e.contact_id;if(n)t.setState({selectedIds:[].concat(Object(i.a)(c),[r])});else{var o=c.filter((function(t){return t!=r}));t.setState({selectedIds:o})}},t.onLoadClicked=function(){t.getAllContacts().then((function(e){t.setState({data:e})})).catch((function(e){return t.setState({error:e})}))},t.sortedTable=function(e){var n=t.state.sortConfig;if(""!=n.sortColumn){var c=Object(i.a)(e),r=n.sortColumn,o=n.sortOrder;return c.sort((function(t,e){return t[r]<e[r]?-1*o:t[r]==e[r]?0:t[r]>e[r]?1*o:void 0})),c}return e},t.sortTable=function(e,n){e.preventDefault();var c=t.state.sortConfig,r=c.sortColumn,o=c.sortOrder;n==r&&(o*=-1),t.setState({sortConfig:{sortColumn:n,sortOrder:o}});var s=t.state.data.contacts;t.renderContacts(s)},t.selectAll=function(){var t=this.state.selectedIds,e=this.state.data.contacts,n=[];t.length==e.length||(n=e.map((function(t){return t.contact_id}))),this.setState({selectedIds:n})},t.renderContacts=function(e){var n=t.sortedTable(e);return Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("input",{type:"checkbox",onChange:function(e){return t.selectAll()}})}),Object(c.jsx)("th",{children:Object(c.jsx)("button",{onClick:function(e){return t.sortTable(e,"contact_name")},children:"NAME"})}),Object(c.jsx)("th",{children:Object(c.jsx)("button",{onClick:function(e){return t.sortTable(e,"company_name")},children:"COMPANY NAME"})}),Object(c.jsx)("th",{children:Object(c.jsx)("button",{onClick:function(e){return t.sortTable(e,"email")},children:"EMAIL"})}),Object(c.jsx)("th",{children:Object(c.jsx)("button",{onClick:function(e){return t.sortTable(e,"phone")},children:"WORK PHONE"})}),Object(c.jsx)("th",{children:Object(c.jsx)("button",{onClick:function(e){return t.sortTable(e,"gst_treatment")},children:"GST TREATMENT"})}),Object(c.jsx)("th",{children:Object(c.jsx)("button",{onClick:function(e){return t.sortTable(e,"outstanding_receivable_amount")},children:"RECEIVABLES"})}),Object(c.jsx)("th",{children:Object(c.jsx)("button",{onClick:function(e){return t.sortTable(e,"outstanding_payable_amount")},children:"PAYABLES"})})]})}),Object(c.jsx)("tbody",{children:n.map((function(e,n){return Object(c.jsx)(h,{contact:e,addSelection:t.modifySelectedContacts},n)}))})]})},t.state={data:{contacts:[]},error:null,sortConfig:{sortColumn:"contact_name",sortOrder:1},selectedIds:[]},t.onLoadClicked=t.onLoadClicked.bind(Object(u.a)(t)),t.sortTable=t.sortTable.bind(Object(u.a)(t)),t}return Object(d.a)(n,[{key:"componentWillMount",value:function(){this.onLoadClicked()}},{key:"componentDidUpdate",value:function(){console.log("total: "+this.state.selectedIds.length+" | "+this.state.selectedIds.join(" | "))}},{key:"render",value:function(){var t=this.state.data.contacts;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"results",children:t.length?this.renderContacts(t):""})})}}]),n}(r.Component);var f=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(O,{})})};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.88e435fb.chunk.js.map