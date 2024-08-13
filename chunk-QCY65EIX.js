import{$ as te,B as E,C as _,D as I,G as k,M as z,P as v,Q as J,R as M,T as F,U as K,V as Q,W,X,Y,Z,_ as ee,a as w,aa as re,c as N,i as R,j as x,k as O,l as G,m as U,n as q,p as B,q as H,s as $,y as V,z as L}from"./chunk-JPGFJPTY.js";import{$ as g,Ab as n,Bb as b,Fc as A,Jb as S,Lb as y,Vb as s,bb as l,cb as u,fa as p,fb as T,ja as P,ob as h,qb as m,zb as a}from"./chunk-XCBEHHDA.js";var Ee=(()=>{let e=class e{constructor(r){this.dialogData=r,this.onEmitStatusChange=new T,this.details={}}ngOnInit(){this.dialogData&&(this.details=this.dialogData)}handleChangeAction(){this.onEmitStatusChange.emit()}};e.\u0275fac=function(i){return new(i||e)(u(L))},e.\u0275cmp=P({type:e,selectors:[["app-confirmation"]],decls:8,vars:0,consts:[["align","center"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","mat-dialog-close",""]],template:function(i,o){i&1&&(a(0,"mat-dialog-content")(1,"h5"),s(2," Voc\xEA deseja sair?"),n()(),a(3,"mat-dialog-actions",0)(4,"button",1),S("click",function(){return o.handleChangeAction()}),s(5,"SIM"),n(),a(6,"button",2),s(7,"FECHAR"),n()())},dependencies:[M,E,I,_],styles:["h5[_ngcontent-%COMP%]{font-size:19px}"]});let t=e;return t})();var oe=(()=>{let e=class e{constructor(r){this.httpClient=r,this.url=J.apiUrl}signup(r){return this.httpClient.post(this.url+"/user/signup",r,{headers:new w().set("Content-Type","application/json")})}forgotPassword(r){return this.httpClient.post(this.url+"/user/forgotPassword",r,{headers:new w().set("Content-Type","application/json")})}login(r){return this.httpClient.post(this.url+"/user/login",r,{headers:new w().set("Content-Type","application/json")})}checkToken(){return this.httpClient.get(this.url+"/user/checkToken/")}changePassword(r){return this.httpClient.post(this.url+"/user/changePassword/",r,{headers:new w().set("Content-Type","application/json")})}getUsers(){return this.httpClient.get(this.url+"/user/get")}update(r){return this.httpClient.patch(this.url+"/user/update",r,{headers:new w().set("Content-Type","application/json")})}};e.\u0275fac=function(i){return new(i||e)(p(N))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function me(t,e){t&1&&(a(0,"span"),s(1,"Este campo \xE9 obrig\xE1torio."),n())}function de(t,e){if(t&1&&(a(0,"mat-error"),h(1,me,2,0,"span",6),n()),t&2){let c=y();l(),m("ngIf",c.changePasswordForm.controls.oldPassword.errors.required)}}function pe(t,e){t&1&&(a(0,"span"),s(1,"Este campo \xE9 obrig\xE1torio."),n())}function ue(t,e){if(t&1&&(a(0,"mat-error"),h(1,pe,2,0,"span",6),n()),t&2){let c=y();l(),m("ngIf",c.changePasswordForm.controls.newPassword.errors.required)}}function he(t,e){t&1&&(a(0,"span"),s(1,"Este campo \xE9 obrig\xE1torio."),n())}function fe(t,e){if(t&1&&(a(0,"mat-error"),h(1,he,2,0,"span",6),n()),t&2){let c=y();l(),m("ngIf",c.changePasswordForm.controls.confirmPassword.errors.required)}}function ge(t,e){t&1&&(a(0,"mat-hint")(1,"span"),s(2,"Nova senha e a confirma\xE7\xE3o de senha n\xE3o coincidem."),n()())}var Ue=(()=>{let e=class e{constructor(r,i,o,d,C){this.formBuilder=r,this.userService=i,this.dialogRef=o,this.ngxService=d,this.snackbarService=C,this.changePasswordForm=U}ngOnInit(){this.changePasswordForm=this.formBuilder.group({oldPassword:[null,[x.required]],newPassword:[null,[x.required]],confirmPassword:[null,[x.required]]})}validadeSubmit(){return this.changePasswordForm.controls.newPassword.value!=this.changePasswordForm.controls.confirmPassword.value}handleChangePasswordSubmit(){this.ngxService.start();var r=this.changePasswordForm.value,i={oldPassword:r.oldPassword,newPassword:r.newPassword,confirmPassword:r.confirmPassword};this.userService.changePassword(i).subscribe(o=>{this.ngxService.stop(),this.responseMessage=o?.message,this.dialogRef.close(),this.snackbarService.openSnackbar(this.responseMessage,"")},o=>{console.log(o),this.ngxService.stop(),o.error?.message?this.responseMessage=o.error?.message:this.responseMessage=v.genericError,this.snackbarService.openSnackbar(this.responseMessage,v.error)})}};e.\u0275fac=function(i){return new(i||e)(u($),u(oe),u(V),u(z),u(F))},e.\u0275cmp=P({type:e,selectors:[["app-change-password"]],decls:34,vars:6,consts:[["color","primary"],[1,"title-center"],[3,"formGroup"],["appearance","outline"],["matInput","","formControlName","oldPassword","type","password"],["matSuffix",""],[4,"ngIf"],["matInput","","formControlName","newPassword","type","password"],["matInput","","formControlName","confirmPassword","type","password"],["align","center"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"],["mat-raised-button","","color","primary","mat-dialog-close",""]],template:function(i,o){i&1&&(a(0,"mat-toolbar",0)(1,"mat-toolbar-row")(2,"span",1),s(3,"Mudar a senha"),n()()(),a(4,"mat-dialog-content")(5,"form",2)(6,"div")(7,"mat-form-field",3)(8,"mat-label"),s(9,"Senha antiga"),n(),b(10,"input",4),a(11,"mat-icon",5),s(12,"vpn_key"),n(),h(13,de,2,1,"mat-error",6),n(),a(14,"mat-form-field",3)(15,"mat-label"),s(16,"Nova Senha"),n(),b(17,"input",7),a(18,"mat-icon",5),s(19,"lock_person"),n(),h(20,ue,2,1,"mat-error",6),n(),a(21,"mat-form-field",3)(22,"mat-label"),s(23,"Confirme a senha"),n(),b(24,"input",8),a(25,"mat-icon",5),s(26,"lock_person"),n(),h(27,fe,2,1,"mat-error",6)(28,ge,3,0,"mat-hint",6),n()()()(),a(29,"mat-dialog-actions",9)(30,"button",10),S("click",function(){return o.handleChangePasswordSubmit()}),s(31,"Trocar senha"),n(),a(32,"button",11),s(33,"Fechar"),n()()),i&2&&(l(5),m("formGroup",o.changePasswordForm),l(8),m("ngIf",o.changePasswordForm.controls.oldPassword.touched&&o.changePasswordForm.controls.oldPassword.invalid),l(7),m("ngIf",o.changePasswordForm.controls.newPassword.touched&&o.changePasswordForm.controls.newPassword.invalid),l(7),m("ngIf",o.changePasswordForm.controls.confirmPassword.touched&&o.changePasswordForm.controls.confirmPassword.invalid),l(),m("ngIf",o.validadeSubmit()&&!o.changePasswordForm.controls.confirmPassword.invalid),l(2),m("disabled",o.validadeSubmit()||!(o.changePasswordForm.valid&&o.changePasswordForm.dirty)))},dependencies:[A,M,E,I,_,Y,K,W,Q,X,Z,ee,re,te,q,R,O,G,B,H],styles:[".mat-toolbar[_ngcontent-%COMP%]{width:auto;margin-bottom:10px}.title-center[_ngcontent-%COMP%]{flex:1 1 auto;text-align:center}mat-form-field[_ngcontent-%COMP%]{padding:5px;flex-direction:column;display:flex}mat-hint[_ngcontent-%COMP%]{color:red}"]});let t=e;return t})();var f=class extends Error{};f.prototype.name="InvalidTokenError";function we(t){return decodeURIComponent(atob(t).replace(/(.)/g,(e,c)=>{let r=c.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}function ve(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return we(e)}catch{return atob(e)}}function ie(t,e){if(typeof t!="string")throw new f("Invalid token specified: must be a string");e||(e={});let c=e.header===!0?0:1,r=t.split(".")[c];if(typeof r!="string")throw new f(`Invalid token specified: missing part #${c+1}`);let i;try{i=ve(r)}catch(o){throw new f(`Invalid token specified: invalid base64 for part #${c+1} (${o.message})`)}try{return JSON.parse(i)}catch(o){throw new f(`Invalid token specified: invalid json for part #${c+1} (${o.message})`)}}var ne=(()=>{let e=class e{constructor(r){this.router=r}isAuthenticated(){return localStorage.getItem("token")?!0:(this.router.navigate(["/"]),!1)}};e.\u0275fac=function(i){return new(i||e)(p(k))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ve=(()=>{let e=class e{constructor(r,i,o){this.auth=r,this.router=i,this.snackbarService=o}canActivate(r){let i=r.data;i=i.expectedRole;let o=localStorage.getItem("token");var d;try{d=ie(o)}catch{localStorage.clear(),this.router.navigate(["/"])}let C=!1;for(let D=0;D<i.length;D++)i[D]==d.role&&(C=!0);return d.role=="user"||d.role=="admin"?this.auth.isAuthenticated()&&C?!0:(this.snackbarService.openSnackbar(v.unauthroized,v.error),this.router.navigate(["/cafe/dashboard"]),!1):(this.router.navigate(["/"]),localStorage.clear(),!1)}};e.\u0275fac=function(i){return new(i||e)(p(ne),p(k),p(F))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{oe as a,Ee as b,Ue as c,ie as d,Ve as e};