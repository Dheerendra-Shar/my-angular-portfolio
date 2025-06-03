import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Software Developer",
        company: "Blue Iris Software Trading LLC, Dubai",
        color: "#3781c2",
        companylogo: "..//assets/images/Blueirissoft-logo-white.png",
        date: "Aug 2023 – Present",
        desc: "Translated Figma designs into responsive Angular UI, improving user satisfaction.Resolved daily bugs, improving stability and performance.Collaborated with cross-functional teams to enhance product usability",
       
      },
      {
        role: "Software Developer",
        company: "Redian Software Pvt. Ltd., Noida",
        color: "#3f703f",
        companylogo: "..//assets/images/REDIAN-SOFTWARE.png",
        date: "Apr 2022 – Aug 2023",
        desc: "Built scalable Angular applications for government sector clients.Implemented responsive layouts and optimized code, improving load speed.Integrated RESTful APIs and managed dynamic data flows.Gathered requirements and ensured on-time delivery in agile sprints.",
      
      },
      {
        role: "Full Stack Developer",
        company: "Bridge Health Medical & Digital Solutions Pvt. Ltd., Bengaluru",
        color: "#ff9102",
        companylogo: "..//assets/images/bhlogo.webp",
        date: "Jul 2021 – Apr 2022",
        desc: "Developed healthcare platforms using Angular and Node.js.Integrated Zoom SDK, Jitsi Meet, and AI tools like Simbo AI.Delivered solutions under tight deadlines and was recognized as a key problem-solver.",
        },
      
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
