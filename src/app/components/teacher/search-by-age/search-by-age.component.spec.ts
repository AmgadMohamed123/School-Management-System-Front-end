import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByAgeComponent } from './search-by-age.component';

describe('SearchByAgeComponent', () => {
  let component: SearchByAgeComponent;
  let fixture: ComponentFixture<SearchByAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
