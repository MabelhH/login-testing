import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'login-testing';
  resultado!:string;

  public formLogin!: FormGroup;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      usuario:['', 
        [
          Validators.required,
          Validators.minLength(3),
          
        ]
      ],
      password:['', 
        [
          Validators.required,
          Validators.minLength(4),
         
        ]
      ]
    
    })
  
}
login(): any{
  console.log(this.formLogin.value)
  if(this.formLogin.value){
  this.resultado= 'se ha iniciado sesion correctamnete'
  }else{
   this.resultado= 'formulario vacio'
  }

}

}
