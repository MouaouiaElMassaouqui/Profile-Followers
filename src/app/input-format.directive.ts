import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }

  @HostListener('blur') onblur(){
    if (this.format == "lowercase"){
      let value: string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toLowerCase();
    }else{
      let value: string = this.el.nativeElement.value;
      this.el.nativeElement.value = value.toUpperCase();
    }
    
     console.log('on Blur')
   }
  @HostListener('focus')  onFucus(){
     console.log('on Focus')
   }
}
