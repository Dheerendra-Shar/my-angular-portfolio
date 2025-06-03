import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/Dheerendra-Shar",
    linkedin: "https://www.linkedin.com/in/dheerendra-sharma-05b563199/",
    gmail: "dheerendrasharma394@gmail.com",
    instagram : "https://www.instagram.com/reeta_nandan_dheerendra/",
    facebook: "https://www.facebook.com/profile.php?id=100006834633012"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
