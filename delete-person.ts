import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-delete-person',
  template: `
    <h3>Are you sure you want to delete?</h3>
    <button (click)="deletePerson()">Yes</button>
  `
})
export class DeletePersonComponent implements OnInit {
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  deletePerson(): void {
    this.peopleService.deletePerson(this.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
