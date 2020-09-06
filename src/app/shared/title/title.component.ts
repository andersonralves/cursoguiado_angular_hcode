import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: any;
  @ViewChild('trailer', { static: true }) trailer: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(): void {
    
    this.trailer.nativeElement.play();
  }

  stopVideo(): void{
    this.trailer.nativeElement.pause();
    this.trailer.nativeElement.currentTime = 0;
  }

  getMuted(): boolean {
    return this.trailer.nativeElement.muted;
  }
  
  toggleSound(): void {
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;
  }

}
