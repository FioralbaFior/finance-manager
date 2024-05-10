import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesComponent } from '../../services/services.component';
import { Router } from '@angular/router';
import ValidateForm from '../../helpers/validationform';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: ServicesComponent, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      Name: ['', Validators.required],
      Surname: ['', Validators.required],
      EmailAddress: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', Validators.required],
      PhoneNumber: ['', Validators.required]
    })

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      let registerObj = {
        ...this.registerForm.value
      }
      this.auth.register(registerObj)
        .subscribe({
          next: (res => {
            console.log(res.message);
            this.registerForm.reset();
            this.router.navigate(['login']);
            alert(res.message)
            this.registerForm.reset();
          }),
          error: (err => {
            alert(err?.error.message)
          })
        })
    } else {
      ValidateForm.validateAllFormFields(this.registerForm); //{7}
    }
  }


  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control)
      }
    })
  }
}




