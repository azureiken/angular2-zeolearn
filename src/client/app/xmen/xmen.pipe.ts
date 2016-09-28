import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterName'})
export class FilterNamePipe implements PipeTransform {
    transform(list: any[], filterString: string): any[] {
        var filteredList: any[] = []
        for(var i = 0; i < list.length; i++) {
            if(list[i].name.indexOf(filterString) !== -1){
                filteredList.push(list[i])
            }
        }
        return filteredList;
    }
}