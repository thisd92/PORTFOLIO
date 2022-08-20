import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlack]'
})
export class BlackDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = 'black';
  }
}
