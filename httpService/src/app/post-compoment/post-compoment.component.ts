import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-post-compoment',
  templateUrl: './post-compoment.component.html',
  styleUrls: ['./post-compoment.component.css'],
})
export class PostCompomentComponent implements OnInit {
  post: Post[] = [];
 // post2: Post[];

  constructor(private service: PostService) {}
  ngOnInit(): void {
    this.service.getJson().subscribe(
      (data: Post[]) => { data.forEach(item => {this.post.push(item)})
      },
      (error: Response) => console.error(error.status),
      () => console.log('Data subscribe done!')
      );
      console.log(this.post, "nosso Post 2");
    this.service.getJson().subscribe(response => {console.log(response, "nosso response")})

  }
}
