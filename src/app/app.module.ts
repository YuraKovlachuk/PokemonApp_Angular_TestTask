import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PokemonListComponent } from './feature/home/components/pokemon-list/pokemon-list.component';
import { PokemonInfoComponent } from './feature/home/components/pokemon-info/pokemon-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import { SkeletonComponent } from './shared/components/skeleton/skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonInfoComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
