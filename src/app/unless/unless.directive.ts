import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
@Directive({
  selector: '[appUnless]'
  })
export class BasicHighlightDirective implements OnInit {
  @Input() set appUnless(condition: boolean) { //make sure same name of selector
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef)  {
  }
}
