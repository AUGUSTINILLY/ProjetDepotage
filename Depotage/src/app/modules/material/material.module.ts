import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { AutoOpenDatepickerDirective } from 'src/app/auto-open-datepicker.directive';


const materialModules = [
  MatIconModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AutoOpenDatepickerDirective
  ],
  imports: [
    CommonModule,
    materialModules,

  ],
  exports: [
    materialModules,
    AutoOpenDatepickerDirective
  ]
})
export class MaterialModule { }
