import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  imports: [
    CommonModule
  ],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: String

  @Input()
  public alt: String = ''

  public hasLoaded: boolean = false

  ngOnInit(): void {
    if (!this.url) throw console.error('URL property is required.');
  }

  onLoad(){
    // setTimeout(() => {
    // this.hasLoaded = true;
    // }, 100);
    this.hasLoaded = true;
  }

 }
