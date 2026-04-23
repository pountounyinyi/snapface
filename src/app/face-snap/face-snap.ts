import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone:true,
  imports: [],
  templateUrl: './face-snap.html',
  styleUrls: ['./face-snap.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
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
    this.snaps--;
    this.snapButtonText = 'Oh Snap';
    this.userHasSnapped = false
  }

  snap() {
    this.snaps++;
    this.snapButtonText = 'Ooops,unSnap!';
    this.userHasSnapped = true
  }
}
