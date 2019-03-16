import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msAsPrettyTime'
})
export class MsAsPrettyTimePipe implements PipeTransform {
  transform(value: number, args?: any): string {
    let seconds = Math.floor(value / 1000);
    let milliseconds = ("00" + (value % 1000)).slice(-3);
        
    return seconds + "s " + milliseconds + "ms";
  }
}
