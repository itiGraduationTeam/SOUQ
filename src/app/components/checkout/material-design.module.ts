import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';



const materialComponents=[
  MatButtonModule,
  MatFormFieldModule,
  MatStepperModule
]
@NgModule({
  
  imports: [
    materialComponents
  ],
  exports:[
    materialComponents
  ]
})
export class MaterialDesignModule { }
