import { Component } from '@angular/core';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {

  constructor(private cs: CategorieService){}
  
 categories:any;

 delete(id: any)
 {
  this.cs.deleteCategory(id);
  this.ngOnInit();
 }

 // Correspond à addEventListener("DomContentLoader", ()=>{});
 ngOnInit(): void {
  this.categories= this.cs.readCategory();
 }

}
