import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyAsideComponent } from './main-body-aside.component';

describe('MainBodyAsideComponent', () => {
  let component: MainBodyAsideComponent;
  let fixture: ComponentFixture<MainBodyAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyAsideComponent]
    });
    fixture = TestBed.createComponent(MainBodyAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
