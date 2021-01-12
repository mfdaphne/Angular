import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective implements OnInit{
  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleDropdown(){
    this.isOpen = !this.isOpen; 
    console.log('on click - '+this.isOpen);
  } 
  constructor() { }

  ngOnInit(): void {
   
  }

}
