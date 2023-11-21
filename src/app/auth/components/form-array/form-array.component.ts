import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  ngOnInit(): void {

  }
  public formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormGroup({
        first: new FormControl('Nancy', Validators.minLength(2)),
        last: new FormControl('Drew', Validators.required),
      }),
      email: new FormControl(),
      phones: new FormArray([
        new FormGroup({
          home: new FormControl(123, Validators.minLength(10)),
          office: new FormControl(456, Validators.minLength(10)),
        }),
        new FormControl(789, Validators.minLength(10)),
      ])
    });
  }

  get f() {
    return this.formGroup.controls;
  }
  get fa() {
    return (this.f?.['phones'] as FormArray)?.controls;
  }

  public onSubmit() {
    this.formGroup.markAllAsTouched();
    console.log(this.fa)
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }

  public setPreset() {
    this.formGroup.reset();
  }
}
