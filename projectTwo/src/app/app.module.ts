import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { submitDataReducer } from './store/reducers/projectTwo.reducer';
import { Store, StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(submitDataReducer),
  ],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
