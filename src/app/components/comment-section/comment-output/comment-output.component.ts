import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-output',
  templateUrl: './comment-output.component.html',
  styleUrls: ['./comment-output.component.css'],
})
export class CommentOutputComponent implements OnInit {
  @Input('commentOutput') comment: { userComment: string };

  constructor() {}

  ngOnInit(): void {}
}
