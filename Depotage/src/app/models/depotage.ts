import { Produit } from './produit';
import { Carburant } from "./carburant";
import { Cuve } from "./cuve";
import { Livreur } from "./livreur";

export class Depotage{
  id: number = 0;;
  date: string='';
  heure: string='';
  quantite: number= 0;
  livreur: Livreur= new Livreur();
  produit : Produit = new Produit();
  densite: number = 0;
  temperatue: number = 0;
  coullage: number = 0;
  quantiteTheorique: number = 0;
  quantiteAvant: number = 0;
  quantiteApres: number = 0;
  contientEau: boolean = false;
  ecart: number = 0;
  carburant: Carburant = new Carburant();
  cuve : Cuve = new Cuve();
}
