import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserlistComponent } from '../../../UserList/Components/userlist/userlist.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() afterSignUp;
  backendURL = 'http://localhost:4000/';
  constructor(private http: HttpClient) {
  }
  addUser(email, birthdate, fullname, phone, gender) {
    var user = {
      email: email.value,
      birthdate: birthdate.value,
      fullname: fullname.value,
      phone: phone.value,
      gender: gender.value
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.http.post(this.backendURL + 'SignUp', JSON.stringify(user), httpOptions)
    .subscribe(() => {});
  }

  ngOnInit() {
    console.log('test');
  }

}

