(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{PZZa:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){},a=u("pMnS"),o=u("Kv/H"),i=function(){function l(l){this.userService=l}return l.prototype.ngOnInit=function(){var l=this;QC.Login({btnId:"qqLoginBtn",showModal:!1,scope:"all",size:"A_XL"},l.loginBack),setTimeout(1e3,function(){l.getInfo()})},l.prototype.loginBack=function(l,n){alert(l.nickname),console.log("\u767b\u5f55\u6210\u529f\u56de\u8c03:",l)},l.prototype.getGameData=function(l){this.userService.getGameInfo({userId:l}).then(function(l){console.log("\u638c\u9b42\u6218\u7ee9\u6570\u636e",l)})},l.prototype.getInfo=function(){QC.Login.check()?QC.api("get_user_info").success(function(l){console.log("\u6635\u79f0",l),QC.Login.getMe(function(l,n){this.getGameData(l),console.log("openId:",l),console.log("accessToken:",n)})}).error(function(l){alert("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25\uff01\u767b\u5f55\u5931\u8d25\uff01")}).complete(function(l){}):alert("\u8bf7\u767b\u5f55\uff01")},l}(),c=e.Qa({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{min-height:600px}.item[_ngcontent-%COMP%]{padding-bottom:10px}select[_ngcontent-%COMP%]{height:35px;padding:0 10px;margin:20px auto 15px;left:-20px;position:relative}@media only screen and (max-width:600px){.btn.bt__2[_ngcontent-%COMP%]{font-size:14px;line-height:25px;padding:5px 35px 8px;margin-top:15px}.container[_ngcontent-%COMP%]{min-height:auto}select[_ngcontent-%COMP%]{height:30px}}"]],data:{}});function s(l){return e.eb(0,[(l()(),e.Sa(0,0,null,null,41,"div",[["class","main"]],null,null,null,null,null)),(l()(),e.Sa(1,0,null,null,37,"section",[["class","content"]],null,null,null,null,null)),(l()(),e.Sa(2,0,null,null,36,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.Sa(3,0,null,null,0,"div",[["class","ic"]],null,null,null,null,null)),(l()(),e.Sa(4,0,null,null,34,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Sa(5,0,null,null,5,"div",[["class","grid_5"]],null,null,null,null,null)),(l()(),e.Sa(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.db(-1,null,["\u5feb\u6377\u767b\u5f55"])),(l()(),e.Sa(8,0,null,null,0,"div",[["class","center"],["id","qqLoginBtn"]],null,null,null,null,null)),(l()(),e.Sa(9,0,null,null,1,"p",[["class","center pdt10"]],null,null,null,null,null)),(l()(),e.db(-1,null,["( \u767b\u5f55\u540e\uff0c\u67e5\u770b\u67e5\u8be2\u7ed3\u679c )"])),(l()(),e.Sa(11,0,null,null,27,"div",[["class","grid_6 preffix_1"]],null,null,null,null,null)),(l()(),e.Sa(12,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.db(-1,null,["\u6218\u7ee9\u4fe1\u606f"])),(l()(),e.Sa(14,0,null,null,4,"select",[["class","flexBox"]],null,null,null,null,null)),(l()(),e.Sa(15,0,null,null,1,"option",[["value","\u5723\u57ce\u5357\u56fd"]],null,null,null,null,null)),(l()(),e.db(-1,null,["\u5723\u57ce\u5357\u56fd"])),(l()(),e.Sa(17,0,null,null,1,"option",[["value","\u5723\u57ce\u5357\u56fd"]],null,null,null,null,null)),(l()(),e.db(-1,null,["\u5723\u57ce\u5357\u56fd"])),(l()(),e.Sa(19,0,null,null,4,"div",[["class","flexBox item"]],null,null,null,null,null)),(l()(),e.Sa(20,0,null,null,1,"div",[["class","alright flex-1 fb"]],null,null,null,null,null)),(l()(),e.db(-1,null,["\u6e38\u620f\u540d\u79f0\uff1a"])),(l()(),e.Sa(22,0,null,null,1,"div",[["class","color1 flex-1"]],null,null,null,null,null)),(l()(),e.db(-1,null,["\u653e\u7f8a\u7684\u661f\u661f"])),(l()(),e.Sa(24,0,null,null,4,"div",[["class","flexBox item"]],null,null,null,null,null)),(l()(),e.Sa(25,0,null,null,1,"div",[["class","alright flex-1 fb"]],null,null,null,null,null)),(l()(),e.db(-1,null,["\u7eb7\u4e89\u5723\u575b\uff1a"])),(l()(),e.Sa(27,0,null,null,1,"div",[["class","color1 flex-1"]],null,null,null,null,null)),(l()(),e.db(-1,null,["2541"])),(l()(),e.Sa(29,0,null,null,4,"div",[["class","flexBox item"]],null,null,null,null,null)),(l()(),e.Sa(30,0,null,null,1,"div",[["class","alright flex-1 fb"]],null,null,null,null,null)),(l()(),e.db(-1,null,["\u51b3\u6218\u4e4b\u8c37\uff1a"])),(l()(),e.Sa(32,0,null,null,1,"div",[["class","color1 flex-1"]],null,null,null,null,null)),(l()(),e.db(-1,null,["2541"])),(l()(),e.Sa(34,0,null,null,4,"div",[["class","flexBox item"]],null,null,null,null,null)),(l()(),e.Sa(35,0,null,null,1,"div",[["class","alright flex-1 fb"]],null,null,null,null,null)),(l()(),e.db(-1,null,["\u6e38\u620f\u7b49\u7ea7\uff1a"])),(l()(),e.Sa(37,0,null,null,1,"div",[["class","color1 flex-1"]],null,null,null,null,null)),(l()(),e.db(-1,null,["2541"])),(l()(),e.Sa(39,0,null,null,2,"section",[["class","bottom_block"]],null,null,null,null,null)),(l()(),e.Sa(40,0,null,null,1,"div",[["class","row center"]],null,null,null,null,null)),(l()(),e.db(-1,null,[" \u82f1\u9b42\u4e4b\u5203\u6e38\u620fqq\u4ea4\u6d41\u7fa4\uff1a534215685 "]))],null,null)}var r=e.Oa("comment-page",i,function(l){return e.eb(0,[(l()(),e.Sa(0,0,null,null,1,"comment-page",[],null,null,null,s,c)),e.Ra(1,114688,null,0,i,[o.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),d=u("Ip0R"),p=u("ZYCi");u.d(n,"CommentPageModuleNgFactory",function(){return g});var g=e.Pa(t,[],function(l){return e.Za([e.ab(512,e.k,e.Ea,[[8,[a.a,r]],[3,e.k],e.z]),e.ab(4608,d.l,d.k,[e.w,[2,d.s]]),e.ab(1073742336,d.b,d.b,[]),e.ab(1073742336,p.l,p.l,[[2,p.r],[2,p.k]]),e.ab(1073742336,t,t,[]),e.ab(1024,p.i,function(){return[[{path:"",component:i}]]},[])])})}}]);