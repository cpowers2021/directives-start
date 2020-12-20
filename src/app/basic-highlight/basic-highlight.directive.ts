import { Directive } from '@angular/core'; //how to initialize directive
@Directive({
  selector: '[appBasicHighlight]'
  })
export class BasicHighlightDirective implements OnInit { //implement different hooks
  constructor(private elementRef: ElementRef)  {
  }
  ngOnInit() {
  this.elementRef.nativeElement.style.backgroundColor = 'green'; //getting access to element directive placed on,
  //access to element, overriding style
  }
}
