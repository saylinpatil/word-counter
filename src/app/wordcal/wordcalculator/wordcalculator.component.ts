import { Component, OnInit } from '@angular/core';
import { WordcalculatorService } from '../wordcalculator.service';


@Component({
  selector: 'app-wordcalculator',
  templateUrl: './wordcalculator.component.html',
  styleUrls: ['./wordcalculator.component.css']
})
export class WordcalculatorComponent implements OnInit {

  pageInput = {
    toCalculatText: ""
  }
  wordCount: number = 0;
  charCount: number = 0;
  sentenceCount: number = 0;

  constructor(
    private wordcalculatorService: WordcalculatorService
  ) { }

  ngOnInit(): void {
  }

  calculateWordCount() {
    if (this.pageInput.toCalculatText.length > 0) {
      this.wordCount = this.wordcalculatorService.getAllTExtCounter(this.getWordCount());
      this.charCount = this.wordcalculatorService.getAllTExtCounter(this.getCharCount());
      this.sentenceCount = this.wordcalculatorService.getAllTExtCounter(this.getSentenceCount());
    } else {
      this.wordCount = 0;
      this.charCount = 0;
      this.sentenceCount = 0;
    }
    return this.wordCount && this.charCount && this.sentenceCount
  }

  getWordCount() {
    let splitByWord = (this.pageInput.toCalculatText.replace(/[^a-zA-Z\s]/g, "")).split(" ")
    return this.wordcalculatorService.filterEmptyStringInArray(splitByWord);
  }

  getCharCount() {
    let splitByChar = (this.pageInput.toCalculatText.replace(/[^a-zA-Z]/g, "")).split("")
    return this.wordcalculatorService.filterEmptyStringInArray(splitByChar);
  }

  getSentenceCount() {
    let splitBySentence = (this.pageInput.toCalculatText.replace(/\n/g, "")).split(".")
    let result = [];

    for (let val of splitBySentence) {
      if (val.length > 1) {
        result.push(val);
      }
    }
    return result;
  }
}
