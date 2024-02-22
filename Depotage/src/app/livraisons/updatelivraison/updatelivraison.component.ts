import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Depot } from 'src/app/models/depot';
import { LivaisonService } from 'src/app/services/livaison.service';

@Component({
  selector: 'app-updatelivraison',
  templateUrl: './updatelivraison.component.html',
  styleUrls: ['./updatelivraison.component.css']
})
export class UpdatelivraisonComponent implements OnInit{

  id: number=0;
  depot: Depot= new Depot();

  constructor(private route: ActivatedRoute,private router: Router,
    private livraisonService: LivaisonService) { }

  ngOnInit() {

    this.id = +this.route.snapshot.params['id'];

    this.getdepot(this.id);
  }

  update() {
    this.livraisonService.updateLivraison(this.id, this.depot)
      .subscribe(data => {
        this.router.navigate(['/details/' + this.depot.id]);
        console.log(data)
      });
  }

  onSubmit() {
    this.update();
  }

  gotoList() {
    this.router.navigate(['/liste']);
  }
  getdepot(id: number): void{
    this.livraisonService.getLivraison(id).subscribe( data =>{
      this.depot= data;
      console.log(data);
    });

  }
}
