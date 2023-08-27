import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyMainFooterComponent } from './main-body-main-footer.component';

describe('MainBodyMainFooterComponent', () => {
  let component: MainBodyMainFooterComponent;
  let fixture: ComponentFixture<MainBodyMainFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyMainFooterComponent]
    });
    fixture = TestBed.createComponent(MainBodyMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
