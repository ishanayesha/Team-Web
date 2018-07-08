import { Pipe, PipeTransform } from '@angular/core';
import { Issue } from '../models/Issue';

@Pipe({ name: 'issuesSearchFilter' })

export class IssuesSearchFilter implements PipeTransform {

    transform(issues: Issue[],column:string, searchText: string): Issue[] {
        
        if (!searchText) return issues;
        if(!issues || issues === undefined || issues.length === 0) return null;
       
        return issues.filter(
            function(issue){
                return issue[column].toLowerCase().includes(searchText.toLowerCase());
            }
        );
    }

}