import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../core/services/config.service';
import {SeoService} from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  h1 = 'About ooTech DTES';
  h2 = 'Disposable Temporary Email Service';

  constructor(seoService: SeoService) {

    seoService.setTitle('About ooTech DTES');
    seoService.updateMetaTag({
      name: 'description', content: 'About ooTech DTES - Frequently Asked Questions.'
    });
  }

  ngOnInit() {
  }

}
