import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLevelComponent } from './details-level.component';

describe('DetailsLevelComponent', () => {
  let component: DetailsLevelComponent;
  let fixture: ComponentFixture<DetailsLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
