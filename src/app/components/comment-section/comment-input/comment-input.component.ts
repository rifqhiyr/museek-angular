import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css'],
})
export class CommentInputComponent implements OnInit {
  empty: string;
  @Output() commentSubmited = new EventEmitter<{ userComment: string }>();

  @ViewChild('commentInput') commentInput: ElementRef;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  onClickSubmit() {
    this.commentSubmited.emit({
      userComment: this.commentInput.nativeElement.value,
    });
    this.commentInput.nativeElement.value = '';
  }
}
