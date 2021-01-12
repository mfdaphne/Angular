import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    console.log('clicked : '+this.isOpen);
    this.isOpen = !this.isOpen;
    let part = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if(this.isOpen) this.renderer.addClass(part, 'show');
    else this.renderer.removeClass(part, 'show');
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

}
