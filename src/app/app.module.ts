import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent, TranspositionGuide, TranspositionInquisition, PageNotFoundComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '/', component: TranspositionGuide },
  { path: 'TranspositionGuide', component: TranspositionGuide },
  { path: 'appcomponent', component: AppComponent },
  { path: 'TranspositionInquisition', component: TranspositionInquisition },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent],
  imports: [FormsModule, BrowserModule, RouterModule.forRoot(appRoutes, {enableTracing: true})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
