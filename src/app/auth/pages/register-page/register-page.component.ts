import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email]],
    username: ['', [Validators.required]],
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
