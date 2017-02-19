import { AbstractControl,  FormArray,    Validators,     FormBuilder,      FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {NoWillValidator} from '../shared/no-will-validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      'name': ['Will', [Validators.required, Validators.minLength(3)]],
      'group1': this.fb.array([
        this.fb.control("Will1", Validators.required),
        this.fb.control("Will2", Validators.required),
        this.fb.control("Will3", Validators.required),
        this.fb.control("Will4", Validators.required),

      ])
    });
   }

  ngOnInit() {
    this.form.addControl("email", this.fb.control("default@example.com", Validators.required));
    let group1: FormArray = <FormArray>this.form.controls['group1'];
    group1.insert(group1.length, this.fb.control('Will 5', NoWillValidator));
  }

  getFieldInvalid(fieldName, prefix=""){
    //return this.form.controls[fieldName].invalid;
    return this.form.get(prefix+fieldName).invalid;
  }

}
