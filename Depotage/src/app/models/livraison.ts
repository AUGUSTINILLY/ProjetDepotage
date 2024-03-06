import { Depotage } from "./depotage";
import { Livreur } from "./livreur";
import { Produit } from "./produit";

export class Livraison{
  id: number = 0;;
  date: string='';
  heure: string='';
  quantite: number= 0;
  livreur: Livreur= new Livreur();
  depotage: Depotage = new Depotage();
}