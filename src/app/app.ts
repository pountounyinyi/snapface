import { Component } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {

  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        10
      ),
      new FaceSnap(
        'three Rock Mountain',
        'Un endroit magnifique pour les randonnée.',
        'https://pixabay.com/get/g962e990710ea3f88e23d2738503d5fb7bc277e0cdf6179bdd57031f897aa87a082b03ca90fdc0984190baa01adf75ea56005eb07d74ef04f0940b49cd02aa2f0_1920.jpg',
        new Date(),
        6
      ),
      new FaceSnap(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156
      ),
    ]
    this.faceSnaps[1].setLocation('à la montagne')
  }
}
