import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
  
  // providers:[] 
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

  // isLoggedIn$: Observable<boolean>;

  // constructor(private authService: AuthService) { }

  // ngOnInit() {
  //   this.isLoggedIn$ = this.authService.isLoggedIn;
  // }

  // onLogout() {
  //   this.authService.logout();
  // }

}
