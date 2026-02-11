import { Component, OnInit } from '@angular/core';
import { _window } from '../token.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: _window().phonenumber,
    email_address: "dheerendrasharma394@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
