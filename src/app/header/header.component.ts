import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output()
  navChange = new EventEmitter<string>();

  onNavClick(features: string) {
    this.navChange.emit(features);
    console.log('Header send: ' + features);
  }

}
