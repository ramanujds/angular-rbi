import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value?: string, length?:number ): string {
    if(!value){
      return ''
    }
    if(length && length<value.length){
      return value.substring(0,length)
    }
    return value.substring(0,5);
  }

}
