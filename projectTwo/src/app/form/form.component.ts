import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalStore } from 'redux-micro-frontend';
import { IGlobalStore } from 'redux-micro-frontend/src/common/interfaces';
import { submitDataReducer } from '../store/reducers/projectTwo.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  addForm!: FormGroup;
  globalStore: IGlobalStore;

  constructor(private formBuilder: FormBuilder) {
    this.globalStore = GlobalStore.Get();
    this.globalStore.CreateStore('projectTwo', submitDataReducer, undefined, [
      GlobalStore.AllowAll,
    ]);
  }

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
    this.globalStore.DispatchAction('projectTwo', {
      type: 'SUBMIT_DATA',
      payload: {
        customerCode: this.addForm.controls['customerCode'].value,
        customerName: this.addForm.controls['customerName'].value,
        cardNumber: this.addForm.controls['cardNumber'].value,
        balance: this.addForm.controls['balance'].value,
      },
    });
  }
}
