import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  selectedFilterOption: string = 'projectManager'; // "Project Manager" is selected by default
  filters: any = {
    projectManager: '',
    projectName: '',
    projectTopic: ''
  };
  filteredProjects: any[] = []; // Array for storing filtered projects

  constructor(private http: HttpClient) {}

  searchProjects() {
    const filterOption = this.selectedFilterOption;
    const filterValue = this.filters[filterOption];
  
    let apiUrl = 'http://localhost:8080/api/projects/filter';
  
    if (filterOption === 'within1Week') {
      // Bring projects with an end date within 1 week
      const currentDate = new Date();
      const oneWeekLater = new Date(currentDate);
      oneWeekLater.setDate(currentDate.getDate() + 7); // add 7 days
  
      apiUrl += `?projectEndDate=${currentDate.toISOString()}/${oneWeekLater.toISOString()}`;
    } else if (filterOption === 'within2Weeks') {
      // Bring projects with an end date within 2 week
      const currentDate = new Date();
      const twoWeeksLater = new Date(currentDate);
      twoWeeksLater.setDate(currentDate.getDate() + 14);
  
      apiUrl += `?projectEndDate=${currentDate.toISOString()}/${twoWeeksLater.toISOString()}`;
    } else if (filterOption === 'within1Month') {
      // Bring projects with an end date within 1 mountg
      const currentDate = new Date();
      const oneMonthLater = new Date(currentDate);
      oneMonthLater.setMonth(currentDate.getMonth() + 1);
  
      apiUrl += `?projectEndDate=${currentDate.toISOString()}/${oneMonthLater.toISOString()}`;
    } else {
      // Created API path for other filtering options
      apiUrl += `?${filterOption}=${filterValue}`;
    }
  
    this.http.get(apiUrl).subscribe(
      (response) => {
        console.log('Filtering results:', response);
        // Assign to the filteredProjects array to show the results on the screen
        this.filteredProjects = response as any[]; // Convert array to any[] type
      },
      (error) => {
        console.error('Filtering error:', error);
      }
    );
  }
}