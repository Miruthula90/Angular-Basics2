import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenjsonComponent } from './genjson.component';

describe('GenjsonComponent', () => {
  let component: GenjsonComponent;
  let fixture: ComponentFixture<GenjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
