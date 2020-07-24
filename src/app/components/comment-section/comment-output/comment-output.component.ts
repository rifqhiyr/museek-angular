import { Component, OnInit, Input, Output } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-comment-output',
  templateUrl: './comment-output.component.html',
  styleUrls: ['./comment-output.component.css'],
})
export class CommentOutputComponent implements OnInit {
  collapse = false;
  likesColor = false;
  @Input('cOutput') comment: Comment;

  onClick() {
    this.likesColor = !this.likesColor;
  }

  constructor() {}

  ngOnInit(): void {}
}
