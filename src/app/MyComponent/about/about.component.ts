import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
  // imports: [NgbAccordionModule],
  // providers: [NgbAccordionConfig],
})
export class AboutComponent {
  constructor(config: NgbAccordionConfig) {
		config.closeOthers = true;
	}
}
