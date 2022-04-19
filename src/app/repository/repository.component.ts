import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  users : any 

  constructor(private service : UsersService){
    this.getusers()
  }

  ngOnInit(): void {

  }
  getusers(){
    this.service.getRepos().subscribe((user) => {
      this.users =user
      console.log (user)
    } )
  }
}
