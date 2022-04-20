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
    this.users = new Users('','','',0,'',new Date(),0,0);
    this.repos = new Repos('','','',new Date());
   }
   
   githubUser(githubUsername: string) {
      interface ApiUserResponse {
        name: string;
        bio:string;
        user:string;
        url:string;
        html_url: string;
        public_repos: number;
        description: string;
        created_at: Date;
        login: string;
        location:string;
        followers: number;
        following: number;
        avatar_url: string;
      }
       }

       let userPromise = new Promise<void>((resolve, reject) => {
        this.http.get<ApiUserResponse>(environment.apiUrl + '/' + githubUsername + '?access_token=' + environment.apiKey).toPromise().then(response => {
          this.users =response;
          resolve();
        },
        error => {
          reject(error);
          console.log(error);
        });
      });  
        return userPromise;
      }
      gitUserRepos(githubUsername: string) {
        interface ApiRepoResponse {
          name: string;
          html_url:string;
          description: string;
          created_at: Date;
          forks: any;
          watchers_count: number;
          language: any;
        }

        const repoPromise = new Promise<void>((resolve, reject) => {
          this.http.get<ApiRepoResponse>(environment.apiUrl + '/' + githubUsername + '/repos?order=created&sort=asc?access_token=' + environment.apiKey).toPromise().then(response => {
            this.repos = response;
              resolve();
            }, error => {
              reject(error);
            });
          });
          return repoPromise;
        }
      }