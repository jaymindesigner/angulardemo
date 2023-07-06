import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  styleUrls: ['./slider.component.scss'],
  templateUrl: './slider.component.html',
})
export class SliderComponent {
  // showNavigationArrows = false;
	// showNavigationIndicators = false;
  image1: string = 'assets/images/slider1.jpg';
  image2: string = 'assets/images/slider2.jpg';

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		// config.showNavigationArrows = true;
		// config.showNavigationIndicators = true;
	}
}
