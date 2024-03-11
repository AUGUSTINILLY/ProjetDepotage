import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { Cuve } from 'src/app/models/cuve';
import { CuveService } from 'src/app/services/cuve';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{

  id1: number = 1;
  id2: number = 2;
  id3: number = 3;
  currentUser: Utilisateur = new Utilisateur();
  cuve1: Cuve = new Cuve();
  cuve2: Cuve = new Cuve();
  cuve3: Cuve = new Cuve();

  cuves: Cuve[] = [];

  constructor(
    private router: Router,
    private cuveService: CuveService
  ){}

  ngOnInit(): void {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      this.currentUser = JSON.parse(userString);
      console.log('Informations de l\'utilisateur connecté :', this.currentUser);
      // Vous pouvez maintenant utiliser this.currentUser dans votre composant
    }

    this.getAllCuves();
    this.getcuve(this.id1);
    this.getcuve2(this.id2);
    this.getcuve3(this.id3);


  }

  getAllCuves(){
    this.cuves=[];
    this.cuveService.getAllCuves().subscribe(
      result => {
        this.cuves = result;

      }
    )
  }

  getcuve(id: number): void{
    this.cuveService.getCuve(id).subscribe( data =>{
      this.cuve1= data;
      console.log(data);
    });

  }
  getcuve2(id: number): void{
    this.cuveService.getCuve(id).subscribe( data =>{
      this.cuve2= data;
      console.log(data);
    });

  }
  getcuve3(id: number): void{
    this.cuveService.getCuve(id).subscribe( data =>{
      this.cuve3= data;
      console.log(data);
    });

  }
}
