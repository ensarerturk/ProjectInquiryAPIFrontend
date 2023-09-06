import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = 'http://localhost:8080/api/projects'; // Spring Boot API URL

  constructor(private http: HttpClient) {}

  filterProjects(filterOption: string, filterValue: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/filter?${filterOption}=${filterValue}`);
  }

  // An HTTP GET request that fetches all projects
  getTumProjeler(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listAll`);
  }

  // An HTTP POST request that creates a project
  createProject(proje: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, proje);
  }

  // An HTTP GET request fetching a specific project information
  getProjectById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/project-details/${id}`);
  }

  // An HTTP PUT request to update the project
  updateProject(id: number, proje: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, proje);
  }

  // An HTTP DELETE request to delete a project
  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}