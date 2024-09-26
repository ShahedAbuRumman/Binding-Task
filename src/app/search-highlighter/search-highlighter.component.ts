import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlighterPipe } from 'highlighter.pipe';  

@Component({
  selector: 'app-search-highlighter',
  standalone: true, 
  imports: [FormsModule, HighlighterPipe],  
  templateUrl: './search-highlighter.component.html',
  styleUrls: ['./search-highlighter.component.css']
})
export class SearchHighlighterComponent {
  textToSearch: string = 'Angular makes frontend development efficient with components and data binding. Search and highlight text.';
  searchText: string = ''; 
}
