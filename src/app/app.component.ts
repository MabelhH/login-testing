import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  shoeEmoji:boolean=false
  title = 'Formulario de Pruebas Unitarias';
 // ischeck:any;
  resultado:string='';
  usuario:string=''
  contra:string=''
  submitted = false;

  public formLogin!: FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.formLogin = new FormGroup({
      usuario:new FormControl(),
      password:new FormControl(),
    })

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      usuario:['',[Validators.required,Validators.minLength(3),Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),]]
    })
}
login(): any{
  console.log(this.formLogin.value)
 if (this.formLogin.invalid) {
  this.resultado='Datos incorrectos'
  return;
}else{
  this.resultado='Inicio de sesion exitosa';
  return this.resultado;



}






    
  }

  

}


