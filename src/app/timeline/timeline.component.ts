import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline = [
    {
      heading: "Blue Iris Software Trading LLC, Dubai ",
      duration: "current",
      content: "Working as an Software Engineer",
      className: "direction-r"
    },
      {
      heading: "Redian Software Pvt. Ltd., Noida",
      duration: "Apr 2022 – Aug 2023",
      content: "Software Developer",
      className: "direction-l"
    },
      {
      heading: "Bridge Health Medical & Digital Solutions Pvt. Ltd., Bengaluru",
      duration: " Jul 2021 – Apr 2022",
      content: "Full stack develover at BHCare!",
      className: "direction-r"
    },
      {
      heading: "Contrivance Droid Pvt. Ltd., Agra",
      duration: "Jun 2020 – Dec 2020",
      content: "Full Stack Developer (Intern)",
      className: "direction-l"
    },
    {
      heading: "BCA",
      duration: "2017 - 2020",
      content: "Successfully completed my BCA  from Chhatrapati Shahu Ji Maharaj University, Kanpur.",
      className: "direction-r"
    },
    {
      heading: "Intermediate",
      duration: "2015-2017",
        content: "Successfully completed my intermediate studies in 2017 from Radha Krishna Memorial Education Centre, Kanpur.\n" +
        "Major: PCM.",
      className: "direction-l"
    },
    {
      heading: "High School",
      duration: "2013-2015",
      content: "Successfully completed my high school studies in 2015 from City Model College, Kanpur.",

      className: "direction-r"
    }

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
