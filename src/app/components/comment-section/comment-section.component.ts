import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent implements OnInit {
  comments = [{ userComment: 'hi this is from indonesia' }];

  constructor() {}

  ngOnInit(): void {}

  onCommentSubmit(commentData: { userComment: string }) {
    this.comments.push({
      userComment: commentData.userComment,
    });
  }
}
