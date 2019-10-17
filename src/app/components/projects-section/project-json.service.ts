import { Injectable } from '@angular/core';
import { IProjects } from './iprojects';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectJSONService {

  private _url: string = "../../../assets/projectsJSON/projects.json"
  counter: number = 0;
  constructor(private http: HttpClient) { }

  getProjects(projects: IProjects[]) {
    return this.http.get<IProjects[]>(this._url).toPromise()
      .then(data => {
        // console.log(data);
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const projectObj = data[key];
            for (const key in projectObj) {
              if (projectObj.hasOwnProperty(key)) {
                projects.push(projectObj[key]);  
              }
            }
            
            // console.log(projects);
          }
        }
      });
  }

}
