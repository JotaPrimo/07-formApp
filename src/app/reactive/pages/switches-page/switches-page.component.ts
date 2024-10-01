import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.formBuilder.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndNotifications: [false, Validators.requiredTrue],
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm.reset( this.person );
  }

  /** se esses dados fossem carregados de um api, dessa forma insiro os dados no form */
  public person = {
    gender: 'F',
    wantNotifications: false
  }

  onSave() {
    if (this.myForm.invalid) {
      alert('Preencha todos os campos corretamente');
      this.myForm.markAllAsTouched();
      return;
    }

    /* cuidado com isso pois pode pegar infos desnecessarias, mesma questão do request validated do laravel  */
    this.person = this.myForm.value
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  isValidFieldInArray( formArray: FormArray, index: number ) {
    return formArray.controls[index].errors
        && formArray.controls[index].touched;
  }


  getFieldError( field: string ): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
      }
    }

    return null;
  }

}
