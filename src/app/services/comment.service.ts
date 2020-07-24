import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private comments: Comment[] = [
    new Comment(
      'Rifqi',
      // 'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg',
      'i love metalica'
    ),
    new Comment(
      'Yuliandri',
      // 'https://cdn.pixabay.com/photo/2019/01/05/22/39/musician-3916095_960_720.jpg',
      'i love metalica too'
    ),
  ];

  getComment() {
    return this.comments.slice();
  }

  onSubmitComment(name: string, content: string) {
    this.comments.push({ name: name, content: content });
  }

  onReplyComment(id: number, content: string) {
    this.comments[id].content = content;
  }
}
