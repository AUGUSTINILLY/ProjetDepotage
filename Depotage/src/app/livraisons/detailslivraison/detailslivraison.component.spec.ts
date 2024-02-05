import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailslivraisonComponent } from './detailslivraison.component';

describe('DetailslivraisonComponent', () => {
  let component: DetailslivraisonComponent;
  let fixture: ComponentFixture<DetailslivraisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailslivraisonComponent]
    });
    fixture = TestBed.createComponent(DetailslivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
