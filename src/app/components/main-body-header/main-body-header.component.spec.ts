import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyHeaderComponent } from './main-body-header.component';

describe('MainBodyHeaderComponent', () => {
  let component: MainBodyHeaderComponent;
  let fixture: ComponentFixture<MainBodyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyHeaderComponent]
    });
    fixture = TestBed.createComponent(MainBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
