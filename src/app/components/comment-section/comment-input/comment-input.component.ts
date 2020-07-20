import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css'],
})
export class CommentInputComponent implements OnInit {
  empty: string;
  @Output() commentSubmited = new EventEmitter<{ userComment: string }>();

  @ViewChild('commentInput') commentInput: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  onClickSubmit() {
    this.commentSubmited.emit({
      userComment: this.commentInput.nativeElement.value,
    });
    this.commentInput.nativeElement.value = '';
  }
}
