import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Users;
  search: string;
  repo: any;

  constructor(private usersService: UsersService) { }

  @ViewChild('form')
  searchForm: NgForm;
  ngOnInit(): void {
  }
  searchGithubUser() {
    this.search = this.searchForm.value.search;
    this.usersService.githubUser(this.search).then(
      (response) => {
        this.user = this.usersService.users;
      },
      (error) => {
        console.log(error);
      }
    ); 
  }}

