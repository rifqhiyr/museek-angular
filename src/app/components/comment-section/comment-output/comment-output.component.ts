import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-output',
  templateUrl: './comment-output.component.html',
  styleUrls: ['./comment-output.component.css'],
})
export class CommentOutputComponent implements OnInit {
  like = false;
  @Input('commentOutput') comment: { userComment: string };

  onClick() {
    this.like = !this.like;
  }

  constructor() {}

  ngOnInit(): void {}
}
