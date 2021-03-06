import { Component, OnInit } from '@angular/core';
import {BlogEntry} from '../../model/blog-entry-model';
import {SeoService} from '../../core/services/seo.service';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogEntries: Array<BlogEntry>;
  h1 = 'ooTech.vn Ad Hoc Email Blog';
  h2 = '';

  constructor(seoService: SeoService, private blogService: BlogService) {
    seoService.setTitle('ooTech DTES - Ad Hoc EMail Blog');
    seoService.updateMetaTag({name: 'description', content: 'ooTech DTES -  Disposable Temporary Email Service blog'}
    );
  }

  ngOnInit() {
    this.blogEntries = this.blogService.blogEntries;
    console.log(this.blogEntries);
  }
}
