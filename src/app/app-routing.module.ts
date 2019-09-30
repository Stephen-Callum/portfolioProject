import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: WelcomeSectionComponent, pathMatch: 'full'},
  { path: 'about', component: AboutSectionComponent },
  { path: 'projects', component: ProjectsSectionComponent },
  { path: 'skills', component: SkillsSectionComponent },
  { path: 'footer', component: FooterSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
