import { Component, OnInit } from '@angular/core';

interface Auth {
  username: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  site = '';
  login = '';
  senha = '';

  constructor() {}

  ngOnInit() {}
}
