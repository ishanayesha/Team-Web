import { Pipe, PipeTransform } from '@angular/core';
import { Issue } from '../models/Issue';

@Pipe({
  name: 'sortIssues'
})
export class SortIssuesPipe implements PipeTransform {

  transform(issues: Issue[], column: string, ascending: boolean): Issue[] {
    if (!issues || issues === undefined || issues.length === 0) return null;
    
    issues.sort((a: Issue, b: Issue) => {

      if (ascending) {
        if (a[column] < b[column]) {
          return -1;
        } else if (a[column] > b[column]) {
          return 1;
        } else {
          return 0;
        }
      }
      else {
        if (a[column] > b[column]) {
          return -1;
        } else if (a[column] < b[column]) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    return issues;

  }

}
