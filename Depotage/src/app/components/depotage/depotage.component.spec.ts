import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotageComponent } from './depotage.component';

describe('DepotageComponent', () => {
  let component: DepotageComponent;
  let fixture: ComponentFixture<DepotageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotageComponent]
    });
    fixture = TestBed.createComponent(DepotageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
