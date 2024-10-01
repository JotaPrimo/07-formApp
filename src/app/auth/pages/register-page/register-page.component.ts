import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidations from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(customValidations.firstNameAndLastnamePattern) ]],
    email: ['', [Validators.email, Validators.pattern(customValidations.emailPattern)]],
    username: ['', [Validators.required, customValidations.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor (private formBuilder: FormBuilder) {}

  isValidField(field: string) {
    // TODO: obter validação por um service
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
