import { Role } from "./role";

export class Utilisateur{
  id: number | undefined;
  nomUser: string='';
  email: string='';
  mdp: string='';
  remdp: string = '';
  nom: string = '';
  contact: string = '';
  role: Role= new Role();
  actif: boolean=true;
}

