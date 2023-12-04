import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordcalculatorService {
  constructor() {}

  filterEmptyStringInArray(stringArr: string[]) {
    return stringArr.filter((stringArr) => stringArr !== '');
  }

  getAllTExtCounter<T>(text: T) {
    let count = 0;
    for (let val in text) {
      count++;
    }
    return count;
  }
}
