import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'dk-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('videoBox') videoBox: ElementRef;
  youtubePlayerWidth = 300;

  constructor(private cdref: ChangeDetectorRef) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.videoBox?.nativeElement?.clientWidth) {
      this.youtubePlayerWidth = this.videoBox.nativeElement.clientWidth;
    }
  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngAfterViewInit() {
    this.onResize();
    this.cdref.detectChanges();
  }
}
