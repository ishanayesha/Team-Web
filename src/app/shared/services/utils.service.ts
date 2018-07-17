import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  //get date period
  getDateArray(start, end) {
    let arr: string[] = [];
    let date = new Date(start);

    while (date <= end) {

      let dateName=date.toString().slice(0, 3).toLowerCase();

      //check wheateher the date is weekend or not
      if ( dateName!= "sat" && dateName!= "sun") {
        arr.push(new Date(date).toISOString().slice(0, 10));
      }

      date.setDate(date.getDate() + 1);
    }
    //  console.log(arr);

    return arr;
  }

}
