import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyMainTableComponent } from './main-body-main-table.component';

describe('MainBodyMainTableComponent', () => {
  let component: MainBodyMainTableComponent;
  let fixture: ComponentFixture<MainBodyMainTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyMainTableComponent]
    });
    fixture = TestBed.createComponent(MainBodyMainTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
