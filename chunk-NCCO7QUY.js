import{$ as re,A as B,B as H,C as V,E as $,F as z,G as L,H as J,K as v,L as K,M,P as F,S as Q,V as W,W as X,X as Y,Y as Z,Z as ee,_ as te,a as w,c as q,j as E,q as R,r as O,t as I,u as x,v as _,x as G,y as k,z as U}from"./chunk-EYVSJE52.js";import{$ as g,Ab as n,Bb as b,Fc as N,Jb as S,Lb as y,Vb as s,Xb as A,bb as l,cb as u,fa as p,fb as T,ja as P,ob as h,qb as m,zb as a}from"./chunk-XCBEHHDA.js";var Ie=(()=>{let e=class e{constructor(r){this.dialogData=r,this.onEmitStatusChange=new T,this.details={}}ngOnInit(){this.dialogData&&(this.details=this.dialogData)}handleChangeAction(){this.onEmitStatusChange.emit()}};e.\u0275fac=function(i){return new(i||e)(u(O))},e.\u0275cmp=P({type:e,selectors:[["app-confirmation"]],decls:8,vars:1,consts:[["align","center"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","mat-dialog-close",""]],template:function(i,o){i&1&&(a(0,"mat-dialog-content")(1,"h5"),s(2),n()(),a(3,"mat-dialog-actions",0)(4,"button",1),S("click",function(){return o.handleChangeAction()}),s(5,"SIM"),n(),a(6,"button",2),s(7,"FECHAR"),n()()),i&2&&(l(2),A(" Voc\xEA quer fazer ",o.details.message," ?"))},dependencies:[M,I,_,x],styles:["h5[_ngcontent-%COMP%]{font-size:19px}"]});let t=e;return t})();var oe=(()=>{let e=class e{constructor(r){this.httpClient=r,this.url=K.apiUrl}signup(r){return this.httpClient.post(this.url+"/user/signup",r,{headers:new w().set("Content-Type","application/json")})}forgotPassword(r){return this.httpClient.post(this.url+"/user/forgotPassword",r,{headers:new w().set("Content-Type","application/json")})}login(r){return this.httpClient.post(this.url+"/user/login",r,{headers:new w().set("Content-Type","application/json")})}checkToken(){return this.httpClient.get(this.url+"/user/checkToken/")}changePassword(r){return this.httpClient.post(this.url+"/user/changePassword/",r,{headers:new w().set("Content-Type","application/json")})}getUsers(){return this.httpClient.get(this.url+"/user/get/")}update(r){return this.httpClient.patch(this.url+"/user/update",r,{headers:new w().set("Content-Type","application/json")})}};e.\u0275fac=function(i){return new(i||e)(p(q))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function me(t,e){t&1&&(a(0,"span"),s(1,"Este campo \xE9 obrig\xE1torio."),n())}function de(t,e){if(t&1&&(a(0,"mat-error"),h(1,me,2,0,"span",5),n()),t&2){let c=y();l(),m("ngIf",c.changePasswordForm.controls.oldPassword.errors.required)}}function pe(t,e){t&1&&(a(0,"span"),s(1,"Este campo \xE9 obrig\xE1torio."),n())}function ue(t,e){if(t&1&&(a(0,"mat-error"),h(1,pe,2,0,"span",5),n()),t&2){let c=y();l(),m("ngIf",c.changePasswordForm.controls.newPassword.errors.required)}}function he(t,e){t&1&&(a(0,"span"),s(1,"Este campo \xE9 obrig\xE1torio."),n())}function fe(t,e){if(t&1&&(a(0,"mat-error"),h(1,he,2,0,"span",5),n()),t&2){let c=y();l(),m("ngIf",c.changePasswordForm.controls.confirmPassword.errors.required)}}function ge(t,e){t&1&&(a(0,"mat-hint")(1,"span"),s(2,"Nova senha e a confirma\xE7\xE3o de senha n\xE3o coincidem."),n()())}var Oe=(()=>{let e=class e{constructor(r,i,o,d,C){this.formBuilder=r,this.userService=i,this.dialogRef=o,this.ngxService=d,this.snackbarService=C,this.changePasswordForm=H}ngOnInit(){this.changePasswordForm=this.formBuilder.group({oldPassword:[null,[k.required]],newPassword:[null,[k.required]],confirmPassword:[null,[k.required]]})}validadeSubmit(){return this.changePasswordForm.controls.newPassword.value!=this.changePasswordForm.controls.confirmPassword.value}handleChangePasswordSubmit(){this.ngxService.start();var r=this.changePasswordForm.value,i={oldPassword:r.oldPassword,newPassword:r.newPassword,confirmPassword:r.confirmPassword};this.userService.changePassword(i).subscribe(o=>{this.ngxService.stop(),this.responseMessage=o?.message,this.dialogRef.close(),this.snackbarService.openSnackbar(this.responseMessage,"")},o=>{console.log(o),this.ngxService.stop(),o.error?.message?this.responseMessage=o.error?.message:this.responseMessage=v.genericError,this.snackbarService.openSnackbar(this.responseMessage,v.error)})}};e.\u0275fac=function(i){return new(i||e)(u(J),u(oe),u(R),u(Q),u(F))},e.\u0275cmp=P({type:e,selectors:[["app-change-password"]],decls:28,vars:6,consts:[["color","primary"],[1,"title-center"],[3,"formGroup"],["appearance","fill"],["matInput","","formControlName","oldPassword","type","password","required",""],[4,"ngIf"],["matInput","","formControlName","newPassword","type","password","required",""],["matInput","","formControlName","confirmPassword","type","password","required",""],["align","center"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-raised-button","","color","primary","mat-dialog-close",""]],template:function(i,o){i&1&&(a(0,"mat-toolbar",0)(1,"mat-toolbar-row")(2,"span",1),s(3,"Mudar a senha"),n()()(),a(4,"mat-dialog-content")(5,"form",2)(6,"div")(7,"mat-form-field",3)(8,"mat-label"),s(9,"Senha antiga"),n(),b(10,"input",4),h(11,de,2,1,"mat-error",5),n(),a(12,"mat-form-field",3)(13,"mat-label"),s(14,"Nova Senha"),n(),b(15,"input",6),h(16,ue,2,1,"mat-error",5),n(),a(17,"mat-form-field",3)(18,"mat-label"),s(19,"Confirme a senha"),n(),b(20,"input",7),h(21,fe,2,1,"mat-error",5)(22,ge,3,0,"mat-hint",5),n()()()(),a(23,"mat-dialog-actions",8)(24,"button",9),S("click",function(){return o.handleChangePasswordSubmit()}),s(25,"Trocar senha"),n(),a(26,"button",10),s(27,"Fechar"),n()()),i&2&&(l(5),m("formGroup",o.changePasswordForm),l(6),m("ngIf",o.changePasswordForm.controls.oldPassword.touched&&o.changePasswordForm.controls.oldPassword.invalid),l(5),m("ngIf",o.changePasswordForm.controls.newPassword.touched&&o.changePasswordForm.controls.newPassword.invalid),l(5),m("ngIf",o.changePasswordForm.controls.confirmPassword.touched&&o.changePasswordForm.controls.confirmPassword.invalid),l(),m("ngIf",o.validadeSubmit()&&!o.changePasswordForm.controls.confirmPassword.invalid),l(2),m("disabled",o.validadeSubmit()||!(o.changePasswordForm.valid&&o.changePasswordForm.dirty)))},dependencies:[N,M,I,_,x,Z,W,Y,X,ee,re,te,V,G,U,B,L,$,z],styles:[".mat-toolbar[_ngcontent-%COMP%]{width:auto;margin-bottom:10px}.title-center[_ngcontent-%COMP%]{flex:1 1 auto;text-align:center}mat-form-field[_ngcontent-%COMP%]{padding:5px;flex-direction:column;display:flex}mat-hint[_ngcontent-%COMP%]{color:red}"]});let t=e;return t})();var f=class extends Error{};f.prototype.name="InvalidTokenError";function we(t){return decodeURIComponent(atob(t).replace(/(.)/g,(e,c)=>{let r=c.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}function ve(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return we(e)}catch{return atob(e)}}function ie(t,e){if(typeof t!="string")throw new f("Invalid token specified: must be a string");e||(e={});let c=e.header===!0?0:1,r=t.split(".")[c];if(typeof r!="string")throw new f(`Invalid token specified: missing part #${c+1}`);let i;try{i=ve(r)}catch(o){throw new f(`Invalid token specified: invalid base64 for part #${c+1} (${o.message})`)}try{return JSON.parse(i)}catch(o){throw new f(`Invalid token specified: invalid json for part #${c+1} (${o.message})`)}}var ne=(()=>{let e=class e{constructor(r){this.router=r}isAuthenticated(){return localStorage.getItem("token")?!0:(this.router.navigate(["/"]),!1)}};e.\u0275fac=function(i){return new(i||e)(p(E))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ve=(()=>{let e=class e{constructor(r,i,o){this.auth=r,this.router=i,this.snackbarService=o}canActivate(r){let i=r.data;i=i.expectedRole;let o=localStorage.getItem("token");var d;try{d=ie(o)}catch{localStorage.clear(),this.router.navigate(["/"])}let C=!1;for(let D=0;D<i.length;D++)i[D]==d.role&&(C=!0);return d.role=="user"||d.role=="admin"?this.auth.isAuthenticated()&&C?!0:(this.snackbarService.openSnackbar(v.unauthroized,v.error),this.router.navigate(["/cafe/dashboard"]),!1):(this.router.navigate(["/"]),localStorage.clear(),!1)}};e.\u0275fac=function(i){return new(i||e)(p(ne),p(E),p(F))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{oe as a,Ie as b,Oe as c,ie as d,Ve as e};