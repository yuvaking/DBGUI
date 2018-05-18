import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  
  showHomePage = true;
  constructor(){}


  ngOnInit() {
  }
}
