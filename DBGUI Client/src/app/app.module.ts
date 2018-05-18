import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';


import { AppComponent } from './app.component';
import { HomepageComponent } from './HomePage/Components/homepage/homepage.component';
import { CuppaDataGridModule } from 'cuppa-ng2-grid/cuppa-ng2-dataGrid';
import { UserlistComponent } from './UserList/Components/userlist/userlist.component';
import { SignupComponent } from './SignUp/Components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserlistComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
