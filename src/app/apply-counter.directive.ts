import {HostListener, HostBinding,  Directive} from '@angular/core';

@Directive({
  selector: '.pt0[apply-counter]'
})
export class ApplyCounterDirective {

  @HostBinding('class.bg-success')
  bgClass = false;

  @HostListener('click', ['$event'])
  onClick(){
    this.bgClass = !this.bgClass;
  }
  constructor() {
    setTimeout(x =>{
      this.bgClass = true;
    }, 5000)
  }

}
