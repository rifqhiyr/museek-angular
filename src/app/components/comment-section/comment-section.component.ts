import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment.model';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent implements OnInit {
  comments: Comment[];
  likes = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.comments = this.commentService.getComment();
  }

  onCommentSubmit(commentData: {
    userId: number;
    userName: string;
    userComment: string;
    userImage: string;
  }) {
    this.comments.push({
      userId: commentData.userId,
      userName: commentData.userName,
      userComment: commentData.userComment,
      userImage: commentData.userImage,
    });
  }
  onLikeAdd(likeData: { like: any }) {
    this.likes.push({
      like: likeData.like,
    });
  }
}
