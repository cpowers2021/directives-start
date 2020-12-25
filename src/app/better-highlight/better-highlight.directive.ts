import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]'
  })
export class BetterHighlightDirective implements OnInit { //implement different hooks
  constructor(private elRef: ElementRef, private renderer: Renderer2)  {
  }
  ngOnInit() {
  this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
   //element, attribute, selection
   //need access to underlying element with nativeElement
  }
}
