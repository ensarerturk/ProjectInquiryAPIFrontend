import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { ProjectService } from './project.service';
import { ProjeListesiComponent } from './project-list/project-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { FormsModule } from '@angular/forms'; // FormsModule ekleyin
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { UpdateComponent } from './update/update.component';
import { FilterComponent } from './filter/filter.component';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjeListesiComponent,
    HomepageComponent,
    NewProjectComponent,
    ProjectDetailsComponent,
    UpdateComponent,
    FilterComponent,
    ProjectDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // FormsModule'ü ekleyin
  ],
  providers: [DatePipe, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }