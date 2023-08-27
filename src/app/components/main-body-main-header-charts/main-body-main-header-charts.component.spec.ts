import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyMainHeaderChartsComponent } from './main-body-main-header-charts.component';

describe('MainBodyMainHeaderChartsComponent', () => {
  let component: MainBodyMainHeaderChartsComponent;
  let fixture: ComponentFixture<MainBodyMainHeaderChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyMainHeaderChartsComponent]
    });
    fixture = TestBed.createComponent(MainBodyMainHeaderChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
