import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      customerCode: [null],
      customerName: [null],
      cardNumber: [null],
      balance: [null],
    });
  }

  submit() {
    console.log(this.addForm);
  }
}
