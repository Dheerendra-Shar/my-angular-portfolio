import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects2 = [];
  projects3 = [
    {
      link: "https://github.com/Dheerendra-Shar/portfolio",
    },
    {
      link: "",
    },
    {
      link: "https://dheerendra-shar.github.io/Stock-analysis/#/",
    },
    {
      link:""
    },
    {

      link: "https://cybersafe.gov.in/",
    },
    // {
    //   link: "https://personal-doc.herokuapp.com/",

    // }
  ]
  constructor(public apollo: Apollo,private tokenService: TokenService) { }

  ngOnInit(): void {


    this.apollo.query<any>({
      query: gql`
      {
      user(login: "Dheerendra-Shar") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage

                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
      `
    }).subscribe((data) => {
      this.projects2 = data.data.user.pinnedItems.edges;
      console.log(this.projects2);
    });
  }

}
