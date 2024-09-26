import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { CardComponent } from "./card/card.component";
import { VacationcardComponent } from "./vacationcard/vacationcard.component";
import { ImageSliderComponent } from "./imageslider/imageslider.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, CardComponent, VacationcardComponent, ImageSliderComponent],
  templateUrl: './app.component.html',
  template: '<button (click)="onButtonClick()">New Request</button>',
  styleUrl: './app.component.css'

})

export class AppComponent {
  title = 'Welcome Back Hazem! Here are your latest updates.';
  showAlert() {
    window.alert('you have already finished your vacation');
  }
  textColor = 'green';
}


