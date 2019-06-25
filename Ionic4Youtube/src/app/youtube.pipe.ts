import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
