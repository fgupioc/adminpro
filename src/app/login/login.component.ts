import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare function initPlugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    initPlugins();
  }

  login() {
    this.router.navigate(['dashboard']);
  }
}
