import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 private readonly JSONGETPOST: string = `https://jsonplaceholder.typicode.com/posts`;

  constructor(private http: HttpClient) { }

  getJson(){
    return this.http.get(this.JSONGETPOST);
  }


}
