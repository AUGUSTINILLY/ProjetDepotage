import { Personne } from "./livreur";
import { Produit } from "./produit";

export class Livraison{
  idLivraison: number = 0;;
  date: string='';
  heure: string='';
  quantite: number= 0;
  personne: Personne= new Personne();
}
