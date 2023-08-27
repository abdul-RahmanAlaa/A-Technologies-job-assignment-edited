import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyAsideBodyComponent } from './main-body-aside-body.component';

describe('MainBodyAsideBodyComponent', () => {
  let component: MainBodyAsideBodyComponent;
  let fixture: ComponentFixture<MainBodyAsideBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyAsideBodyComponent]
    });
    fixture = TestBed.createComponent(MainBodyAsideBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
