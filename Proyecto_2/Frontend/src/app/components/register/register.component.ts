import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(public LoginS: LoginService, public route:Router) { }

  username: string = '';
  password: string = '';
  email: string = '';

  Login(){
    console.log('Estamos entrando en la funcion de Login')
    console.log(this.username);
    console.log(this.password);

    // Mandamos a llamar al servicio de Login
    this.LoginS.Register(this.username,this.email, this.password).subscribe((res) =>{
      console.log(res);
      if(res.status){
        // Redireccionamos a la pagina de inicio
        this.route.navigate(['/login']);
      }
    });
  }
}
