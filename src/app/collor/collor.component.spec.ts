import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollorComponent } from './collor.component';

describe('CollorComponent', () => {
  let component: CollorComponent;
  let fixture: ComponentFixture<CollorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
