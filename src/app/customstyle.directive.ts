import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(private el: ElementRef) {
    console.log(el.nativeElement);
    el.nativeElement.style.fontSize = "40px";
  }

}
