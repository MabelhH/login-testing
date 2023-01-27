import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule ,FormBuilder  } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        
        
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Formulario de Pruebas Unitarias'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Formulario de Pruebas Unitarias');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Formulario de Pruebas Unitarias');
  });
  it('Should return valid form',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; 
    fixture.detectChanges(); 
      const usuario=app.formLogin.controls['usuario'];
      const password=app.formLogin.controls['password'];
      
       usuario.setValue('mabel23@gmail.com');
       password.setValue('mabel05');

       const miboton=fixture.debugElement.query(By.css('button'))
       miboton.nativeElement.click();

        const datatest='loguedo';

        //expect(app.ischeck).toEqual(datatest);
        expect(app.formLogin.invalid).toBeFalsy();  
     });
  
  

     it('Should return invalid form',()=>{
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance; 
      fixture.detectChanges(); 
        const usuario=app.formLogin.controls['usuario'];
        const password=app.formLogin.controls['password'];
        
         usuario.setValue('');
         password.setValue('');
  
        const miboton=fixture.debugElement.query(By.css('button'))
         miboton.nativeElement.click();
  
        
          expect(app.formLogin.invalid).toBeTruthy();  
       });

    });
     
 
      
  


 
