import { Component, OnInit } from '@angular/core';
declare var GitHubCalendar;
@Component({
  selector: 'app-github-calendar',
  templateUrl: './github-calendar.component.html',
  styleUrls: ['./github-calendar.component.scss']
})
export class GithubCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    GitHubCalendar(".calendar", "Dheerendra-Shar", {
      responsive: true,
      tooltips: true
    });
  }

}
