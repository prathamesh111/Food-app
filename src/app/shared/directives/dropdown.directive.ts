import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.show') toggleClass:boolean= true;

  @HostListener('click') toggledd(e:Event){
    this.toggleClass= !this.toggleClass ;
  }
}