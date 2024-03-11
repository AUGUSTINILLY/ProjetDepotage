import { Produit } from './produit';
import { Carburant } from "./carburant";
import { Cuve } from "./cuve";
import { Livreur } from "./livreur";
import { Categorie } from './categorie';

export class Depotage {
  id: number = 0;
  categorie: Categorie = new Categorie();
  densite: number = 0;
  temperatue: number = 0;
  coullage: number = 0;
  quantiteTheorique: number = 0;
  quantiteAvant: number = 0;
  quantiteApres: number = 0;
  contientEau: boolean = false;
  ecart: number = 0;
  cuve : Cuve = new Cuve();
}
