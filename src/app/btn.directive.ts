import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btn]'
})
export class BtnDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {  

    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '10px')
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer')
    this.renderer.setStyle(this.el.nativeElement, 'width', '50px')
    this.renderer.setStyle(this.el.nativeElement, 'height', '50px')
    //this.renderer.setStyle(this.el.nativeElement, 'padding-top', '0px')
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '30px')
    this.renderer.setStyle(this.el.nativeElement, 'background', 'purple')
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white')
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none')
    
   }


  
}
