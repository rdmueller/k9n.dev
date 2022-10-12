"use strict";(self.webpackChunkd_koppenhagen_website=self.webpackChunkd_koppenhagen_website||[]).push([[130],{3130:(z,f,i)=>{i.r(f),i.d(f,{ProjectsModule:()=>Y});var l=i(6895),g=i(3863),d=i(2965);function m(e,o,n,r,c,u,h){try{var a=e[u](h),s=a.value}catch(y){return void n(y)}a.done?o(s):Promise.resolve(s).then(r,c)}var w=i(4004),j=i(8505),t=i(4650),C=i(8797),S=i(87),p=i(655);let N=(()=>{let e=class{constructor(){this.webNavigator=null,this.webNavigator=window.navigator}canShare(){return null!==this.webNavigator&&void 0!==this.webNavigator.share}canShareFile(n){return null!==this.webNavigator&&void 0!==this.webNavigator.share&&this.webNavigator.canShare({files:n})}share({title:n,text:r,url:c,files:u}){return new Promise((h,a)=>(0,p.mG)(this,void 0,void 0,function*(){if(null!==this.webNavigator&&void 0!==this.webNavigator.share)if(null==r&&null==c)console.warn("text and url both can't be empty, at least provide either text or url");else try{const s={title:n,text:r,url:c};u&&0!==u.length&&(s.files=u),yield this.webNavigator.share(s),h({shared:!0})}catch(s){a({shared:!1,error:s})}else a({shared:!1,error:"This service/api is not supported in your Browser"})}))}};return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=(0,t.Yz7)({factory:function(){return new e},token:e,providedIn:"root"}),e=(0,p.gn)([(0,p.w6)("design:paramtypes",[])],e),e})();var v=i(6818);function x(e,o){if(1&e&&(t.TgZ(0,"span",9),t._uU(1,"\n          "),t._UZ(2,"img",10),t.ALo(3,"transloco"),t._uU(4,"\n        "),t.qZA()),2&e){const n=t.oxw().ngIf;t.xp6(2),t.Q6J("src",n.thumbnail.header,t.LSH),t.uIk("alt",t.lcZ(3,2,"headerImage"))}}function U(e,o){if(1&e&&(t.TgZ(0,"div",3),t._uU(1,"\n      "),t.TgZ(2,"section",4),t._uU(3,"\n        "),t.YNc(4,x,5,4,"span",5),t._uU(5,"\n      "),t.qZA(),t._uU(6,"\n      "),t.TgZ(7,"section",6),t._uU(8,"\n        "),t._UZ(9,"scully-content"),t._uU(10,"\n        "),t.TgZ(11,"div",7),t._uU(12,"\n          "),t.TgZ(13,"a",8),t._uU(14),t.qZA(),t._uU(15,"\n        "),t.qZA(),t._uU(16,"\n      "),t.qZA(),t._uU(17,"\n    "),t.qZA()),2&e){const n=o.ngIf,r=t.oxw().$implicit,c=t.oxw();t.xp6(4),t.Q6J("ngIf",n.thumbnail&&n.thumbnail.header),t.xp6(9),t.Q6J("href",c.editOnGithubLink(),t.LSH),t.xp6(1),t.hij("\n            ",r("editOnGithub"),"\n          ")}}function Z(e,o){if(1&e&&(t.ynx(0),t._uU(1,"\n  "),t.TgZ(2,"article",1),t._uU(3,"\n    "),t.YNc(4,U,18,3,"div",2),t.ALo(5,"async"),t._uU(6,"\n  "),t.qZA(),t._uU(7,"\n"),t.BQk()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("ngIf",t.lcZ(5,1,n.post$))}}let b=(()=>{class e{constructor(n,r,c,u,h){this.route=n,this.srs=r,this.highlightService=c,this.metaService=u,this.ngNavigatorShareService=h,this.post$=this.srs.available$.pipe((0,w.U)(a=>a.filter(s=>s.route.startsWith("/projects/")&&s.route.includes(this.route.snapshot.params.slug))),(0,w.U)(a=>a[0]),(0,j.b)(a=>{!a||this.metaService.createMetaDataForPost(a)}))}ngAfterViewChecked(){this.highlightService.highlightAll()}shareApi(n,r){var c=this;return function P(e){return function(){var o=this,n=arguments;return new Promise(function(r,c){var u=e.apply(o,n);function h(s){m(u,r,c,h,a,"next",s)}function a(s){m(u,r,c,h,a,"throw",s)}h(void 0)})}}(function*(){try{yield c.ngNavigatorShareService.share({title:n,text:r,url:location.href})}catch(u){console.warn("You app is not shared, reason: ",u)}})()}editOnGithubLink(){return`https://github.com/d-koppenhagen/k9n.dev/edit/master${location.pathname}.md`}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.gz),t.Y36(g.sG),t.Y36(C.l),t.Y36(S.R),t.Y36(N))},e.\u0275cmp=t.Xpm({type:e,selectors:[["dk-project-content"]],decls:2,vars:0,consts:[[4,"transloco"],[1,"wrapper","alt"],["class","inner",4,"ngIf"],[1,"inner"],[1,"project-header"],["class","image fit",4,"ngIf"],[1,"project-content"],[1,"edit-on-github"],["target","_blank","rel","noopener noreferrer",3,"href"],[1,"image","fit"],[3,"src"]],template:function(n,r){1&n&&(t.YNc(0,Z,8,3,"ng-container",0),t._uU(1,"\n"))},dependencies:[l.O5,g.zS,v.KI,l.Ov,v.Ot],styles:[".wrapper[_ngcontent-%COMP%]{margin-top:0}h1[_ngcontent-%COMP%]{font-size:1.4em}h2.sub-heading[_ngcontent-%COMP%]{font-size:.9em}.edit-on-github[_ngcontent-%COMP%]{margin:30px 0}[_ngcontent-%COMP%]::slotted(h1){color:#330625;background-color:#f8d3ec;padding:5px;border-radius:5px;font-size:1.4em;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}"]}),e})();var O=i(6229);function A(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"section",1)(2,"div",2)(3,"h2",3),t._uU(4),t.qZA(),t._UZ(5,"dk-preview",4),t.qZA()(),t.BQk()),2&e){const n=o.$implicit;t.xp6(4),t.Oqu(n("myProjects"))}}const M=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["dk-project-overview"]],decls:1,vars:0,consts:[[4,"transloco"],[1,"wrapper","alt"],[1,"inner"],[1,"major"],["content","projects"]],template:function(n,r){1&n&&t.YNc(0,A,6,1,"ng-container",0)},dependencies:[O.B,v.KI],styles:[".wrapper[_ngcontent-%COMP%]{margin-top:0}"]}),e})()},{path:":slug",component:b}];let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(M),d.Bz]}),e})();var I=i(4466),_=i(7460);let Y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,T,g.cx,I.m,_.u]}),e})()}}]);