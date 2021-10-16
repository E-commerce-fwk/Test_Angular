import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailPipe } from './email.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlocArticlesComponent } from './bloc-articles/bloc-articles.component';
import { ArticleComponent } from './article/article.component';
import { BlocSocialComponent } from './bloc-social/bloc-social.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailPipe,
    FooterComponent,
    NavbarComponent,
    BlocArticlesComponent,
    ArticleComponent,
    BlocSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}