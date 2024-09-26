import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHighlighterComponent } from './search-highlighter.component';

describe('SearchHighlighterComponent', () => {
  let component: SearchHighlighterComponent;
  let fixture: ComponentFixture<SearchHighlighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchHighlighterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
