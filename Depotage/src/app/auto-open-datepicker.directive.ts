import { Directive, AfterViewInit, ElementRef } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Directive({
  selector: '[appAutoOpenDatepicker]'
})
export class AutoOpenDatepickerDirective implements AfterViewInit {

  constructor(private datepicker: MatDatepicker<any>, private el: ElementRef) {}

  ngAfterViewInit() {
    this.datepicker.open();
  }
}
