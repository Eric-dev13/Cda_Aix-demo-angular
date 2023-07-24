import { Component } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {

  id: string | null = '0';

  // category!: any;

  category = {
    name:""
  }

  constructor(private cs: CategorieService, private router: Router, private route: ActivatedRoute) { }

  
  // CREATE UPDATE Catégory
  formulaire(form: NgForm, id: any) {
    
    if (id == null) {
      //Si l'identifiant est null alors on est en mode CREATE
      let response = this.cs.createCategory(form.value);
    } else {
      //Sinon mode UPDATE
      this.cs.updateCategory(form.value, id);
    }

    this.router.navigate(['listCategory']);
  }

  ngOnInit() {

    // Retourne l'id passe dans les paramètre de la route.
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.category = this.cs.readOneCategory(this.id);
    }
  }
}
