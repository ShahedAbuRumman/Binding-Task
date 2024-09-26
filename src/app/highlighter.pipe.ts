import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter',
  standalone: true  
})
export class HighlighterPipe implements PipeTransform {
  transform(value: string, searchText: string, type: string = 'full'): string {
    if (!searchText) return value;

    let re;
    if (type === 'full') {
      re = new RegExp("\\b(" + searchText + "\\b)", 'igm');
    } else {
      re = new RegExp(searchText, 'igm');
    }

    return value.replace(re, '<span class="highlighted-text">$1</span>');
  }
}
