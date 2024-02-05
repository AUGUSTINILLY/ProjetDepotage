import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelivraisonComponent } from './listelivraison.component';

describe('ListelivraisonComponent', () => {
  let component: ListelivraisonComponent;
  let fixture: ComponentFixture<ListelivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListelivraisonComponent]
    });
    fixture = TestBed.createComponent(ListelivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
