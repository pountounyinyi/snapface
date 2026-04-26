import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.html',
  styleUrls: ['./face-snap.scss'],
})
export class FaceSnapComponent implements OnInit {
 @Input() faceSnap!:FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;
  myLargeNumber : number = 4667916.76;

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap !';
    this.userHasSnapped = false;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap()
    } else {
      this.snap()
    }
  }

  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap';
    this.userHasSnapped = false
  }

  snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Ooops,unSnap!';
    this.userHasSnapped = true
  }
}
