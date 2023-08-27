import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyMainComponent } from './main-body-main.component';

describe('MainBodyMainComponent', () => {
  let component: MainBodyMainComponent;
  let fixture: ComponentFixture<MainBodyMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyMainComponent]
    });
    fixture = TestBed.createComponent(MainBodyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
