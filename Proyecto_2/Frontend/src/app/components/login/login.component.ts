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
  
  imagen_path: string = '';
  username: string = '';
  password: string = '';
  error_imagen: boolean = false;
  cambiar : boolean = true;
  imagen : File | null = null;
  foto = false;

  


  Login(){
    console.log('Estamos entrando en la funcion de Login')
    console.log(this.username);
    console.log(this.password);

    // Mandamos a llamar al servicio de Login
    this.LoginS.Login(this.username, this.password).subscribe((res) =>{
      console.log(res);
      if(res.status){
        // Redireccionamos a la pagina de inicio
        this.LoginS.SetCurrentUser(this.username);
        this.route.navigate(['/home']);
      }
    });
  }

  fileSelected(event: any){
    this.error_imagen = false;
    this.cambiar = false;
    this.foto = false;
    this.imagen = <File>event.target.files[0];

    console.log('Nombre de la imagen: ', this.imagen.name);
    console.log('Contenido de la imagen: ', this.imagen);
    
    var reader = new FileReader();
    reader.onload = (event: any) => {
    this.imagen_path = event.target.result;
    };
    console.log('Path de la imagen: ', this.imagen_path);
    reader.readAsDataURL(this.imagen);
    console.log('Ultima linea: ', this.imagen);
  }

  encodeFileAsBase64(file: any) {
    return new Promise((resolve)=>{
      const reader = new FileReader();
      reader.addEventListener('loadend', () => {
        resolve(reader.result);
      });
      reader.readAsDataURL(file);
    });
  };

}
