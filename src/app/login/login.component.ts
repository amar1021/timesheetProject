import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth-service';
import { AlertComponent } from 'app/alert/alert.component';

@Component({
  selector: 'app-login',
  providers: [AlertComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo: any;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private alert:  AlertComponent,
    private router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
this.loginInfo = {
  username: this.f.username.value,
  password: this.f.password.value
}
     console.log(this.f.username.value +"  "+ this.f.password.value);
    // this.authService.attempAuth(this.loginInfo).subscribe(
    //   data => {
    //     this.loading = false;
    //     this.toastr.success("Successfully Login!",'Success');
    //     this.router.navigate(['/dashboard']);
    //     console.log("data  : "+data);
    //   },
    //    error => {
    //     this.toastr.error("failled Login!",'Error')
    //                 this.loading = false;
    //             });

    this.alert.success("custom msg");
    this.router.navigate(['/dashboard']);
  }
}
