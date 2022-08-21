import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'XperTuto.com : formGroup addControl and removeControl Example';

  userForm: FormGroup = new FormGroup({});

  partnerFormGroup: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    occupation: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      married: [false, Validators.required],
    });
  }

  onSelectChange(): void {
    if (this.isMarried) {
      this.addPartnerFormGroup();
    } else {
      this.removePartnerFormGroup();
    }
  }

  // add partner details formGroup control
  addPartnerFormGroup(): void {
    if (!this.hasPartnerFormGroup) {
      this.userForm.addControl('partner', this.partnerFormGroup);
    }
  }

  // remove partner details formGroup control
  removePartnerFormGroup(): void {
    if (this.hasPartnerFormGroup) {
      this.userForm.removeControl('partner');
    }
  }
  // get married formControl value
  get isMarried(): boolean {
    return this.userForm?.get('married')?.value;
  }

  // get userName formControl value
  get userName(): string {
    return this.userForm.get('userName')?.value;
  }

 // check if we have partner formGroup
  get hasPartnerFormGroup(): boolean {
    return this.userForm.contains('partner');
  }

  submit(): void {
    console.log(this.userForm.value);
  }
}
