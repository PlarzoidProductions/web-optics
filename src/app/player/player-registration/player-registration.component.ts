import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css'],
})
export class PlayerRegistrationComponent implements OnInit {
  registrationFormGroup: FormGroup

  constructor() {}

  ngOnInit() {
    this.registrationFormGroup = this.buildForm()
  }

  private buildForm(): FormGroup {
    return new FormBuilder().group({
      firstNameInput: ['', Validators.required],
      lastNameInput: ['', Validators.required],
    })
  }

  onRegister() {
    console.log(`Let's register ${this.firstName} ${this.lastName}`)
  }

  get firstName(): string {
    return this.registrationFormGroup.get('firstNameInput').value
  }

  get lastName(): string {
    return this.registrationFormGroup.get('lastNameInput').value
  }
}
