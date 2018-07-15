import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timelineFilter' })

export class TimelineFilterPipe implements PipeTransform {

    transform(issues: any[], column: string, searchText: string): any[] {

        if (!searchText) return issues;
        if (!issues || issues === undefined || issues.length === 0) return null;

        return issues.filter(
            function (issue) {

                if (column.toLowerCase() == "dev" || column.toLowerCase() == "qa") {
                    return issue[column].toLowerCase() === searchText.toLowerCase();
                }
                else {
                    return issue[column].toLowerCase().includes(searchText.toLowerCase());
                }
            }
        );
    }

}