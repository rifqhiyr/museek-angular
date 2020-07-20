import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment-output',
  templateUrl: './comment-output.component.html',
  styleUrls: ['./comment-output.component.css'],
})
export class CommentOutputComponent implements OnInit {
  collapse = false;
  likesColor = false;
  @Input('commentOutput') comment: { userId: number, userName: string, userComment: string, userImage: string };

  onClick() {
    this.likesColor = !this.likesColor

  }

  constructor() { }

  ngOnInit(): void { }
}
