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

  site = 'http://localhost:8080/users';

  login = 'thaylla.santana@fatec.sp.gov.br';
  senha = '06062001';

  constructor() {}

  ngOnInit() {}
}
