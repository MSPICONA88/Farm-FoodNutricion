import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Interfaces/usuario';
import { UsuarioService } from 'src/app/Services/Usuario/Usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  viewName : string = "HOME";
  user = {} as Usuario;
  // isFacturar : boolean = false;
  // isSell : boolean = false;
  isHome : boolean = true;
  // refreshListOffer: boolean = false;
  // refreshListDiscount: boolean=false;
  // isDespacho: boolean = false;
  // isVerClientes: boolean = false;
  // isRecibirStock: boolean = false;
  // isUploadProducts: boolean=false;
  // isListProducts:boolean=false;
  // isDispoLocker:boolean=false;
  // isGuardarStock: boolean = false;
  // isListProds: boolean = false;
  // isListInvoice: boolean = false;

  constructor(private router: Router, private userServ: UsuarioService) { }

  ngOnInit(): void {
    this.userServ.authenticateUser(this.viewName);
    this.setUserLogged();
  }

  logOut() {
    Swal.fire({
      title: '¿Está seguro que quiere cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.userServ.setToken("", "", "");
        this.router.navigate(['login']);
      }
    })
  }

  setUserLogged() {
    this.user.usuario= this.userServ.getUserName();
    this.user.nombre_rol = this.userServ.getRol();
  }

  cleanFlags() {
    this.isHome = false;
    // this.isFacturar = false;
    // this.isSell = false;
    // this.refreshListDiscount = false;
    // this.refreshListOffer = false;
    // this.isDespacho = false;
    // this.isVerClientes = false;
    // this.isRecibirStock = false;
    // this.isSell=false;
    // this.isUploadProducts=false;
    // this.isListProducts=false;
    // this.isDispoLocker=false;
    // this.isGuardarStock = false;
    // this.isListProds = false;
    // this.isListInvoice = false;
  }

  // facturar() {
  //   this.cleanFlags();
  //   this.isFacturar = true;
  //   this.refreshListOffer =false;
  // }

  // listOffer(){
  //   this.cleanFlags();
  //   this.refreshListOffer =true;
  // }

  // listDiscount(){
  //   this.cleanFlags();
  //   this.refreshListDiscount=true;
  // }

  home() {
    this.cleanFlags();
    this.isHome = true;
  }

  // despacho() {
  //   this.cleanFlags();
  //   this.isDespacho = true;
  // }

  // verClientes() {
  //   this.cleanFlags();
  //   this.isVerClientes = true;
  // }

  // recibirStock() {
  //   this.cleanFlags();
  //   this.isRecibirStock = true;
  // }

  // sell(){
  //   this.cleanFlags();
  //   this.isSell =true;
  // }

  // uploadProducts(){
  //   this.cleanFlags();
  //   this.isUploadProducts=true;
  // }

  // listProducts(){
  //   this.cleanFlags();
  //   this.isListProducts=true;
  // }

  // dispoLocker(){
  //   this.cleanFlags();
  //   this.isDispoLocker=true;
  // }

  // guardarStock() {
  //   this.cleanFlags();
  //   this.isGuardarStock = true;
  // }

  // listProds() {
  //   this.cleanFlags();
  //   this.isListProds = true;
  // }

  // listInvoice(){
  //   this.cleanFlags();
  //   this.isListInvoice= true;
  // }
}
