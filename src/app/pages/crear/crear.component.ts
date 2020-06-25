import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbTabsetModule } from '@nebular/theme';


@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
//   styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

    forma: FormGroup;

    constructor( private fb:FormBuilder) {
    
        this.crearFormulario();
    
    }
        
        
        
    ngOnInit(): void {
    }
    
    get procesoNoValido(){
        return this.forma.get('proceso').invalid && this.forma.get('proceso').touched
    }

    get alcanceNoValido(){
        return this.forma.get('alcance').invalid && this.forma.get('alcance').touched
    }

    get objetivoNoValido(){
        return this.forma.get('objetivo').invalid && this.forma.get('objetivo').touched
    }

    get observacionesNoValido(){
        return this.forma.get('observaciones').invalid && this.forma.get('observaciones').touched
    }

    
    
    crearFormulario(){
        //inicializando el formulario

        this.forma = this.fb.group({
            proceso      : ['', Validators.required],
            alcance      : ['', Validators.required],
            objetivo    : ['', Validators.required],
            observaciones: ['', Validators.required]
        })
    }

    //metodo cuando el usuario presione click en guardar
    guardar(){
        //validacion si el usuario presiona guardar y tiene campos sin llenar
        if(this.forma.invalid){
            
            return this.forma.markAllAsTouched();
            
        }
    }


}
