import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageUrls: (string | IImage)[] = [
    { url: './assets/Slide1.JPG', backgroundSize: 'contain', caption: '' },
    { url: './assets/Slide2.JPG', backgroundSize: 'contain' },
    { url: './assets/Slide3.JPG', backgroundSize: 'contain' },
    { url: './assets/Slide4.JPG', backgroundSize: 'contain' },
    { url: './assets/Slide5.JPG', backgroundSize: 'contain' },
    { url: './assets/Slide6.JPG', backgroundSize: 'contain' }
  ];
  height: string = '700px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = false;
  // autoPlayInterval: number = 3333;
  // stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';

  ngOnInit() {
  }

}
