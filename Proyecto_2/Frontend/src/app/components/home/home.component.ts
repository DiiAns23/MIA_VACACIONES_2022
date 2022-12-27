import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private LoginService:LoginService,private router:Router) { }
  
  LogOut(){
    Swal.fire({
      title: 'Log Out',
      text: "Cerrar Sesion?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Log Out!',
          'Success'
          )
          this.LoginService.LogOut1();
          this.router.navigate(['/login']);
      }
    })
    // this.LoginService.LogOut1();
  }
}
