import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes=[
  { path:"", component: HomeComponent },                     // Page d'accueil

  { path:"formRecipe", component: RecipeFormComponent},        // Ajouter 1 recette via un formulaire partagé
  { path:"formRecipe/:id", component: RecipeFormComponent},    // Modifier 1 recette via le formulaire partagé
  { path:"listRecipe", component: ListRecipeComponent},        // Voir tous les recttes

  { path:"formCategory", component: CategoryFormComponent},      // Ajouter 1 catégorie via un formulaire partagé
  { path:"formCategory/:id", component: CategoryFormComponent},  // Modifier 1 catégorie via le formulaire partagé
  { path:"listCategory", component: CategorieComponent}          // Voir tous les catégories
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

  
 }
