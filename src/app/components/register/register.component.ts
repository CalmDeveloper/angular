import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form: FormGroup
userNameError:string
  constructor(private  authService:AuthService, private router:Router) {
  this.createForm()
  }

  ngOnInit(): void {
  }
  createForm():void{
  this.form = new FormGroup({
    username: new FormControl(null, [Validators.minLength(2),Validators.maxLength(20),Validators.required]),
    password: new FormControl(null,[Validators.minLength(2),Validators.maxLength(20),Validators.required]),
    confirmPassword: new FormControl(null,[Validators.minLength(2),Validators.maxLength(20),Validators.required])
  },[this.checkPasswords])
  }

  register(): void {
    const rowValue = this.form.getRawValue()
    delete rowValue.confirmPassword
    this.authService.register(rowValue).subscribe({
          next: () => {
            this.router.navigate(['login']).then()
          },
          error: e => {
            this.userNameError = e.error.username[0]
          }
        }
    )
  }

  checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')
    return password?.value === confirmPassword?.value ? null : {notSame: true}
  }
}
