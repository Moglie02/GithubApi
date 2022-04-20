import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../users';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  user: Users;
  repo: any;
  search: string;

  constructor(private usersService: UsersService) { }

  @ViewChild('form')
  searchForm: NgForm;



  ngOnInit(): void {
    this.users('Moglie02');
    this.repos('Moglie02');
  }
  users(githubUsername: string) {
    this.usersService.githubUser(githubUsername).then(
        (response) => {
          this.user = this.usersService.users;
          console.log(this.user);
        },
        (error) => {
          console.log(error);
        }
      ); 
    }
  
    repos(githubUsername: string) {
      this.usersService.gitUserRepos(githubUsername).then(
        (response) => {
          this.repo = this.usersService.repos;
          console.log(this.repo);
        },

        (error) => {
          console.log(error);
        }
      );
    }

    searchGithubUser() {
      this.search = this.searchForm.value.search;
      this.usersService.githubUser(this.search).then(
        (response) => {
          this.users = this.usersService.users;
        },
        (error) => {
          console.log(error);
        }
      ); 
    }}