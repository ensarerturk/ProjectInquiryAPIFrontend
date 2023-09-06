import { Component } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent {
  projectId: number | undefined;
  deleteSuccess: boolean = false;

  constructor(private projectService: ProjectService) {}

  deleteProject() {
    if (this.projectId) {
      this.projectService.deleteProject(this.projectId).subscribe(
        () => {
          this.deleteSuccess = true;
          setTimeout(() => {
            this.deleteSuccess = false;
          }, 3000); // Hide message after 3 seconds
        },
        (error) => {
          console.error('Proje silinirken hata oluştu:', error);
          this.deleteSuccess = false;
        }
      );
    }
  }
}