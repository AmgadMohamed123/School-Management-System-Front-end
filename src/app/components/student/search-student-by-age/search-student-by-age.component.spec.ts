import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudentByAgeComponent } from './search-student-by-age.component';

describe('SearchStudentByAgeComponent', () => {
  let component: SearchStudentByAgeComponent;
  let fixture: ComponentFixture<SearchStudentByAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStudentByAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStudentByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
