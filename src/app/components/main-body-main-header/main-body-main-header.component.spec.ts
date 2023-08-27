import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyMainHeaderComponent } from './main-body-main-header.component';

describe('MainBodyMainHeaderComponent', () => {
  let component: MainBodyMainHeaderComponent;
  let fixture: ComponentFixture<MainBodyMainHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyMainHeaderComponent]
    });
    fixture = TestBed.createComponent(MainBodyMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
