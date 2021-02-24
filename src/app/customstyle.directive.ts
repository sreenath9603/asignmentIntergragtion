import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(public el: ElementRef) {
    el.nativeElement.style.color="blue"
   }

}
