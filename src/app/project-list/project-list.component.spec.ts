import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeListesiComponent } from './project-list.component';

describe('ProjectListComponent', () => {
  let component: ProjeListesiComponent;
  let fixture: ComponentFixture<ProjeListesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjeListesiComponent]
    });
    fixture = TestBed.createComponent(ProjeListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
