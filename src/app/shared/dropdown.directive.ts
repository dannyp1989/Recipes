import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open')
  classOfToggle = false;

  @HostListener('click')
  openToggle() {
    this.classOfToggle = !this.classOfToggle;
  }

}
