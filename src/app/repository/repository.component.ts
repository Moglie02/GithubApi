import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  

  @ViewChild('form') searchForm: NgForm;
  repo: any;
  users : any 
    search:string;
    displayUserErrorMessage = false;
    displayRepoInformation = false;

  constructor(private usersservice : UsersService){
  }

  ngOnInit(): void {}
  searchGithubRepos() {
    this.search = this.searchForm.value.search;
    this.usersservice.gitUserRepos(this.search).then(
      (response) => {
        this.repo = this.usersservice.repos;
        this.displayRepoInformation = true;
      },
      (error) => {
        this.displayUserErrorMessage = true;
        console.log(error);
      }
    );
  }

  }