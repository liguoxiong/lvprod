(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"52cW":function(e,t,a){"use strict";a.r(t);var n=a("d6i3"),s=a.n(n),r=a("p0pE"),c=a.n(r),p=a("GIZZ"),u=a.n(p),i=a("3eXy"),o=a("7Qib"),y=a("3Unq"),l=i["a"].queryPostList;t["default"]=u()(y["b"],{namespace:"post",subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;a.listen(function(e){Object(o["g"])("/post",e.pathname)&&t({type:"query",payload:c()({status:2},e.query)})})}},effects:{query:s.a.mark(function e(t,a){var n,r,c,p;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,e.next=4,r(l,n);case 4:if(p=e.sent,!p.success){e.next=10;break}return e.next=8,c({type:"querySuccess",payload:{list:p.data,pagination:{current:Number(n.page)||1,pageSize:Number(n.pageSize)||10,total:p.total}}});case 8:e.next=11;break;case 10:throw p;case 11:case"end":return e.stop()}},e)})}})}}]);