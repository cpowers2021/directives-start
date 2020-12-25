import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]'
  })
export class BetterHighlightDirective implements OnInit { //implement different hooks

  constructor(private elRef: ElementRef, private renderer: Renderer2)  {
  }
  ngOnInit() {
  //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
   //element, attribute, selection
   //need access to underlying element with nativeElement
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    }
}
