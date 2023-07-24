import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecetteService } from '../services/recette.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipes } from './recipe.interface';
import { CategorieService } from '../services/categorie.service';



@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {

  id: string | null = '0';

  // recette!: any;

  recette= {
    titre: '',
    description: '',
    ingredients: [],
    difficulte: '',
    category: '',
    tempsPrep: '',
    tempsCuisson: '',
    cout: 0,
    photo: "",
    etapes:[] 
  }

  categories!:any;

  // Injection de dépendance du service
  constructor(private rs: RecetteService, private cs: CategorieService, private router: Router, private route: ActivatedRoute) { }


  formulaire(form: NgForm, id: any) {
    if (id == null) {
      let response = this.rs.createRecipe(form.value);
    } else {
      this.rs.updateRecipe(form.value, id);
    }

    this.router.navigate(['listRecipe']);
  }


  ngOnInit() {
    this.categories= this.cs.readCategory();

    // Retourne l'id passe dans les paramètre de la route.
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.recette = this.rs.readOneRecipe(this.id);
    }
  }


}
