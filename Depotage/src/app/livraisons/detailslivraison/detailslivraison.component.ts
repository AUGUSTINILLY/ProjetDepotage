import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Depot } from 'src/app/models/depot';
import { LivaisonService } from 'src/app/services/livaison.service';

@Component({
  selector: 'app-detailslivraison',
  templateUrl: './detailslivraison.component.html',
  styleUrls: ['./detailslivraison.component.css']
})
export class DetailslivraisonComponent implements OnInit{

  id: number=0;
  depot: Depot = new Depot();
  constructor(private route: ActivatedRoute,private router: Router,
    private livraisonService: LivaisonService) { }

  ngOnInit() {

    this.id = +this.route.snapshot.params['id'];

     this.getdepot(this.id);

  }



  list(){
    this.router.navigate(['liste']);
  }


  getdepot(id: number): void{
    this.livraisonService.getLivraison(id).subscribe( data =>{
      this.depot= data;
      console.log(data);
    });

  }

  deleteEmployee(id: number) {
    this.livraisonService.deleteLivraison(id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/liste'])
        },
        error => console.log(error));
  }
}
