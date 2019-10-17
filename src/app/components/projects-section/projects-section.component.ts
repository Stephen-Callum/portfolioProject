import { Component, OnInit } from '@angular/core';
import { ProjectJSONService } from './project-json.service';
import { IProjects } from './iprojects';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  providers: [ProjectJSONService]
})
export class ProjectsSectionComponent implements OnInit {
  projects: IProjects[] = [];

  constructor(private proService: ProjectJSONService) {

  }

  ngOnInit() {
    this.proService.getProjects(this.projects);
    console.log(this.projects);
  }

}
