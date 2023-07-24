import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BoutonDetailComponent } from './bouton-detail/bouton-detail.component';
import { AppRoutingModule } from './app-routing.module';                            // Gestion du routage 
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { FormsModule } from '@angular/forms';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategoryFormComponent } from './category-form/category-form.component';                                       // Gestion de formulaire lié a ngModel


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BoutonDetailComponent,
    RecipeFormComponent,
    ListRecipeComponent,
    CategorieComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
