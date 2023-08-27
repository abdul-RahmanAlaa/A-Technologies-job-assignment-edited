import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyMainHeaderProfileComponent } from './main-body-main-header-profile.component';

describe('MainBodyMainHeaderProfileComponent', () => {
  let component: MainBodyMainHeaderProfileComponent;
  let fixture: ComponentFixture<MainBodyMainHeaderProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyMainHeaderProfileComponent]
    });
    fixture = TestBed.createComponent(MainBodyMainHeaderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
