import { Observable } from 'rxjs';
import { PostService } from './../post-compoment/post.service';
import { Component, OnInit } from '@angular/core';

export interface Followers {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id?: any;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];
  followersArray: Followers[] = [];
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getFollowers().subscribe((data: Followers[]) => {
      this.followers.push(data);
      data.forEach((element) => {
        this.followersArray.push(element);
      });
    });
  }
}
