import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Depotage } from 'src/app/models/depotage';
import { DepotageService } from 'src/app/services/depotage';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit{
  id: number=1;
  depotage: Depotage = new Depotage();
  constructor(private route: ActivatedRoute,private router: Router,
    private depotageService: DepotageService) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam != null) {
      this.id = +idParam;
      console.log('ID: ', this.id);
      this.getdepot(this.id);
    }else{
      console.error('ID introuvable');
    }


  }



  list(){
    this.router.navigate(['historique']);
  }


  getdepot(id: number): void{
    this.depotageService.getDepotage(id).subscribe( data =>{
      this.depotage= data;
      console.log(data);
    });

  }

  deleteDepot(id: number) {
    this.depotageService.deleteDepotage(id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/historique'])
        },
        error => console.log(error));
  }

}
