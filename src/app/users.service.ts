import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { environment } from "../environments/environment.prod";
import { Users } from "./users";
import { Repos } from "./repos";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:any = Users;
  repos:any = Repos;
  newRepository: any;
  username = "moglie"

  constructor(private http: HttpClient) {
    
   }

   getRepos (): Observable<any>{
    const userUrl=`https://api.github.com/users/${this.username}?${environment.apiKey}`
    return this.http.get<any>(userUrl)
       }

      



  
   }