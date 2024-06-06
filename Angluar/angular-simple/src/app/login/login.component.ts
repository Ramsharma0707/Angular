import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any = {
    data: {},
    message: '',
    inputerror: {}
  }

  constructor(private httpClient: HttpClient, public router: Router) {

  }


  signIn() {

    this.httpClient.post('http://localhost:8080/Auth/login', this.form.data).subscribe((res: any) => {
      console.log('res => ', res)
      if (!res.success) {
        this.form.inputerror = res.result.inputerror;
      }
      if (res.success) {
        this.router.navigateByUrl('welcome');
      } else {
        this.form.message = res.result.message;
      }
    })
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }

}