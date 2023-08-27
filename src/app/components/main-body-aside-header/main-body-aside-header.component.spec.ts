import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyAsideHeaderComponent } from './main-body-aside-header.component';

describe('MainBodyAsideHeaderComponent', () => {
  let component: MainBodyAsideHeaderComponent;
  let fixture: ComponentFixture<MainBodyAsideHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyAsideHeaderComponent]
    });
    fixture = TestBed.createComponent(MainBodyAsideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
