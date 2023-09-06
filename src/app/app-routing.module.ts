import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjeListesiComponent } from './project-list/project-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { UpdateComponent } from './update/update.component';
import { FilterComponent } from './filter/filter.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'api/projects/listAll', component: ProjeListesiComponent }, 
  { path: 'api/projects/new-project', component: NewProjectComponent },
  { path: 'api/projects/project-details', component: ProjectDetailsComponent }, 
  { path: 'api/projects/update', component: UpdateComponent }, 
  { path: 'api/projects/filter', component: FilterComponent }, 
  { path: 'api/projects/delete', component: ProjectDeleteComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }