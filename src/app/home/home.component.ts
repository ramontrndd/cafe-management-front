import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { SnackbarService } from '../_services/snackbar.service';
import { UserService } from '../_services/user.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { GlobalConstants } from '../shared/global-constants';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: any = FormGroup;
  responseMessage: any;

  constructor(private dialog:MatDialog,
    private router: Router,
    private userService: UserService,
    private formbuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService,
   ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') !=null) {
      this.userService.checkToken().subscribe((response:any)=> {
        this.router.navigate(['/cafe/dashboard'])
      },(error:any)=> {
        console.log(error);

      })
    }

    this.loginForm = this.formbuilder.group({
      email: [
        null,
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      ],
      password: [null, [Validators.required, Validators.pattern]],
    });


  }
  handleSubmit() {
    this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password,
    };
    this.userService.login(data).subscribe(
      (response: any) => {
        this.ngxService.stop();
        localStorage.setItem('token', response.token);
        this.router.navigate(['/cafe/dashboard']);
      },
      (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackbar(
          this.responseMessage,
          GlobalConstants.error
        );
      }
    );
  }

  signupAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(SignupComponent,dialogConfig)
  }

  forgotPasswordAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(ForgotPasswordComponent,dialogConfig)
  }


}
