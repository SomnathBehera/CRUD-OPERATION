import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
// import { ServiceService } from './service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
loginForm = new FormGroup({
Name:new FormControl(''),
Email:new FormControl(''),
Stream:new FormControl(''),
})
loginUser(){
  console.warn(this.loginForm.value);
}


}
