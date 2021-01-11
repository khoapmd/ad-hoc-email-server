import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() showMailboxSelector = true;
  @Input() h1 = 'ooTech DTES -  Disposable Temporary Email Service';
  @Input() h2 = 'The temporary mail service to keep your real mailbox safe';

  constructor(           iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'envelopes',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/envelopes.svg'));
    iconRegistry.addSvgIcon(
      'sky',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/sky.svg'));
  }

  ngOnInit() {
  }

}
