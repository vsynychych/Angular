import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective {

  constructor(element: ElementRef, renderer2: Renderer2) {
    element.nativeElement.style.background = 'lightgreen';
    // or
    // renderer2.setStyle(element.nativeElement, 'background', 'lightyellow');
  }
}
