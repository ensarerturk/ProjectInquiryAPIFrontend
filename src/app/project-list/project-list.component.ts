import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-proje-listesi',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjeListesiComponent implements OnInit {
  projeler: any[] = [];

  constructor(private projeServisi: ProjectService) {}

  ngOnInit() {
    // Bring all projects
    this.projeServisi.getTumProjeler().subscribe((data) => {
      this.projeler = data;
    });
  }
}