import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
