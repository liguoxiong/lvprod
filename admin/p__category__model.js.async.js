(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{qNCR:function(e,t,a){"use strict";a.r(t);var r=a("p0pE"),n=a.n(r),s=a("d6i3"),c=a.n(s),u=a("GIZZ"),o=a.n(u),i=a("7Qib"),p=a("3eXy"),l=a("3Unq"),d=p["a"].queryCategoryList,y=p["a"].createCategory,w=p["a"].removeCategory,f=p["a"].updateCategory,x=p["a"].removeCategoryList;t["default"]=o()(l["b"],{namespace:"category",state:{currentItem:{},modalVisible:!1,modalType:"create",selectedRowKeys:[]},subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;a.listen(function(e){if(Object(i["g"])("/category",e.pathname)){var a=e.query||{page:1,pageSize:10};t({type:"query",payload:a})}})}},effects:{query:c.a.mark(function e(t,a){var r,n,s,u,o;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=void 0===r?{}:r,s=a.call,u=a.put,e.next=4,s(d,n);case 4:if(o=e.sent,!o){e.next=8;break}return e.next=8,u({type:"querySuccess",payload:{list:o.data,pagination:{current:Number(n.page)||1,pageSize:Number(n.pageSize)||10,total:o.total}}});case 8:case"end":return e.stop()}},e)}),delete:c.a.mark(function e(t,a){var r,n,s,u,o,i,p;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,u=a.select,e.next=4,n(w,{id:r});case 4:return o=e.sent,e.next=7,u(function(e){return e.category});case 7:if(i=e.sent,p=i.selectedRowKeys,!o.success){e.next=14;break}return e.next=12,s({type:"updateState",payload:{selectedRowKeys:p.filter(function(e){return e!==r})}});case 12:e.next=15;break;case 14:throw o;case 15:case"end":return e.stop()}},e)}),multiDelete:c.a.mark(function e(t,a){var r,n,s,u;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,e.next=4,n(x,r);case 4:if(u=e.sent,!u.success){e.next=10;break}return e.next=8,s({type:"updateState",payload:{selectedRowKeys:[]}});case 8:e.next=11;break;case 10:throw u;case 11:case"end":return e.stop()}},e)}),create:c.a.mark(function e(t,a){var r,n,s,u;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,e.next=4,n(y,r);case 4:if(u=e.sent,!u.success){e.next=10;break}return e.next=8,s({type:"hideModal"});case 8:e.next=11;break;case 10:throw u;case 11:case"end":return e.stop()}},e)}),update:c.a.mark(function e(t,a){var r,s,u,o,i,p,l;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,s=a.select,u=a.call,o=a.put,e.next=4,s(function(e){var t=e.category;return t.currentItem._id});case 4:return i=e.sent,p=n()({id:i},r),e.next=8,u(f,p);case 8:if(l=e.sent,!l.success){e.next=14;break}return e.next=12,o({type:"hideModal"});case 12:e.next=15;break;case 14:throw l;case 15:case"end":return e.stop()}},e)})},reducers:{showModal:function(e,t){var a=t.payload;return n()({},e,a,{modalVisible:!0})},hideModal:function(e){return n()({},e,{modalVisible:!1})}}})}}]);