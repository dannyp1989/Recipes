import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes = 'recipe';
  onNavChange(features: string) {
    console.log('app get: ' + features);
    if ( features === 'recipe') {
      this.showRecipes = 'recipe';
    } else {
      this.showRecipes = 'shopping';
    }
  }

}
