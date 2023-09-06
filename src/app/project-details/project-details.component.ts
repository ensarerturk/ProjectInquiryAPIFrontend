import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  
  projectId: number | undefined; // Selected project ID
  project: any; // Project details

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}

  // Function used to get project details
  getProjectDetails() {
    if (this.projectId) {
      this.projectService.getProjectById(this.projectId).subscribe(data => {
        this.project = data;
      });
    }
  }
}