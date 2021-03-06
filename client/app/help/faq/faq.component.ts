import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../core/services/config.service';
import {SeoService} from '../../core/services/seo.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  h1 = 'ooTech DTES - Disposable Temporary Email Service FAQ';
  h2 = 'Frequently Asked Questions';
  properties = ConfigService.properties;

  constructor(seoService: SeoService) {

    seoService.setTitle('ooTech DTES - FAQ');
    seoService.updateMetaTag({
      name: 'description', content: 'ooTech DTES - Disposable Temporary Email Service - Frequently Asked Questions.'
    });
  }

  ngOnInit() {
  }

  min(int1: number, int2: number): number {
    return Math.min(int1, int2);
  }
}
