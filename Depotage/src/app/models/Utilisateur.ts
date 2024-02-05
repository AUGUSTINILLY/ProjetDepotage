import { Role } from "./role";

export class Utilisateur{
  id: number | undefined;
  nomuser: string='';
  email: string='';
  mdp: string='';
  role: Role= new Role();
  actif: boolean=false;
}
