import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelivraisonComponent } from './deletelivraison.component';

describe('DeletelivraisonComponent', () => {
  let component: DeletelivraisonComponent;
  let fixture: ComponentFixture<DeletelivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletelivraisonComponent]
    });
    fixture = TestBed.createComponent(DeletelivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
