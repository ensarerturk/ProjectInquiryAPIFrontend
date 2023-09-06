import { Component } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent {
  newProject: any = {
    projectName: '',
    projectTopic: '',
    projectStartDate: '',
    projectEndDate: '',
    projectManager: '',
    projectStatus: 'PLANNING', // Planning selected by default
  };

  constructor(private projectService: ProjectService) {}

  createProject() {
    this.projectService.createProject(this.newProject).subscribe((data) => {
      // Perform actions here when the new project is successfully created.
      console.log('Yeni proje oluşturuldu:', data);
      // Clean Form
      this.newProject = {
        projectName: '',
        projectTopic: '',
        projectStartDate: '',
        projectEndDate: '',
        projectManager: '',
        projectStatus: 'PLANNING',
      };
    });
  }
}