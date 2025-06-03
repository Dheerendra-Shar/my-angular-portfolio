import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  // animations:[  trigger('list1', [
  //   state('in', style({
  //     opacity: 1,
  //     transform: 'translateX(0)'
  //   })),
  //   transition('void => *', [
  //     style({
  //       opacity: 0,
  //       transform: 'translateX(-100px)'
  //     }),
  //     animate(300)
  //   ]),
  //   transition('* => void', [
  //     animate(300, style({
  //       transform: 'translateX(100px)',
  //       opacity: 0
  //     }))
  //   ])
  // ])]
  //
  //
  // animations: [
  //   trigger('visibilityChanged', [
  //     state('in', style({
  //       opacity: 0
  //     })),
  //     state('out',   style({
  //       opacity: 1
  //     })),
  //     transition('in => out', animate('100ms ease-in')),
  //     transition('out => in', animate('100ms ease-out'))
  //   ])
  // ]


})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Dheerendra Sharma",
    title: "Hi all, I'm Dheerendra",
    subTitle: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with Frontend Developer | Angular 15 | TypeScript | RxJS | HTML5 | CSS3 | Tailwind CSS | REST API | Git and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1ELMiPEQ_usUzRZZ4u8n2rwihOc7iMNo3/view?usp=sharing"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
