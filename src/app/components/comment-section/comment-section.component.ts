import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent implements OnInit {
  comments = [{ userId: 1, userName: 'Rifqi', userComment: 'hi this is from indonesia', userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Frankie_%28musician%29_2016.jpg/800px-Frankie_%28musician%29_2016.jpg' }, { userId: 2, userName: 'Yuliandri', userComment: 'I like Rohma irama', userImage: 'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg' }];
  likes = [];

  constructor() { }

  ngOnInit(): void { }

  onCommentSubmit(commentData: { userId: number, userName: string, userComment: string, userImage: string }) {
    this.comments.push({
      userId: commentData.userId,
      userName: commentData.userName,
      userComment: commentData.userComment,
      userImage: commentData.userImage
    });
  }
  onLikeAdd(likeData: { like: any }) {
    this.likes.push({
      like: likeData.like,
    });
  }
}
