import { Component } from '@angular/core';
import { SearchHighlighterComponent } from "../search-highlighter/search-highlighter.component";



@Component({
  selector: 'app-vacationcard',
  standalone: true,
  templateUrl: './vacationcard.component.html',
  styleUrl: './vacationcard.component.css',
  imports: [SearchHighlighterComponent]
})

export class VacationcardComponent {

  
}
