import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public LoginS: LoginService, public route:Router) { }

  username: string = '';
  password: string = '';

  Login(){
    console.log('Estamos entrando en la funcion de Login')
    console.log(this.username);
    console.log(this.password);

    // Mandamos a llamar al servicio de Login
    this.LoginS.Login(this.username, this.password).subscribe((res) =>{
      console.log(res);
      if(res.status){
        // Redireccionamos a la pagina de inicio
        this.route.navigate(['/home']);
      }
    });
  }
}
