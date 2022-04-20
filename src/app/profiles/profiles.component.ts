import { Component, OnInit } from '@angular/core';
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

  constructor(private usersService: UsersService) {
    
   }


  ngOnInit(): void {
    this.users('Moglie');
    this.repos('Moglie');
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
    }}