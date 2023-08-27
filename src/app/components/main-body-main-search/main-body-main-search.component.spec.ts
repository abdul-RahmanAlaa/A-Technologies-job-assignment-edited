import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyMainSearchComponent } from './main-body-main-search.component';

describe('MainBodyMainSearchComponent', () => {
  let component: MainBodyMainSearchComponent;
  let fixture: ComponentFixture<MainBodyMainSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBodyMainSearchComponent]
    });
    fixture = TestBed.createComponent(MainBodyMainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
