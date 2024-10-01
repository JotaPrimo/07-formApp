import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

  // AbstractControl se assemelha a um formControl
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log(control);

    const email = control.value;

    console.log({email});


    // esse é um rxjs que retorna Observable com esse value definido
    return of({
      emailTaken: true
    }).pipe(
      delay(2000)
    )
  }
}
