import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyMainHeaderCardsComponent } from './main-body-main-header-cards.component';

describe('MainBodyMainHeaderCardsComponent', () => {
  let component: MainBodyMainHeaderCardsComponent;
  let fixture: ComponentFixture<MainBodyMainHeaderCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyMainHeaderCardsComponent]
    });
    fixture = TestBed.createComponent(MainBodyMainHeaderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
