import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  project: any = {}; // An object for storing project data

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit() {
    // Get the project ID from the Route parameter
    this.route.params.subscribe(params => {
      const projectId = +params['id'];
      if (!isNaN(projectId)) {
        // Call service to retrieve project data
        this.projectService.getProjectById(projectId).subscribe(
          (data) => {
            this.project = data;
          },
          (error) => {
            console.error('Error importing project:', error);
          }
        );
      }
    });
  }

  updateProject() {
    // Call service to save updated project data
    this.projectService.updateProject(this.project.id, this.project).subscribe(
      (response) => {
        // Successful update status
        console.log('Project updated:', response);
      },
      (error) => {
        // Hata durumu
        console.error('Project update error:', error);
      }
    );
  }
}