import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User';

@Pipe({
  name: 'membersSearch'
})
export class MembersSearchPipe implements PipeTransform {

  transform(members: User[], role: string, searchText: string): User[] {

    if (!searchText) return members;
    if (!members || members === undefined || members.length === 0) return null;

    return members.filter(
      function (members) {
        return (members.role.toLowerCase() == (role.toLowerCase()) &&
          (members.firstName.toLowerCase().includes(searchText.toLowerCase())
            || members.lastName.toLowerCase().includes(searchText.toLowerCase())
            || (members.firstName.toLowerCase() + " " + members.lastName.toLowerCase()).includes(searchText.toLowerCase())
          ));
      }
    );
  }

}
