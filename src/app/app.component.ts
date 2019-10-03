import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedNumbers: string[] = [];
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  n5: number;
  n6: number;

  pickedNumber: string;
  totalNumbers: number;

  maxNumberReached = false;

  maxLengthAllowed = 15;

  possibilities = 50063860;
  currentPossibilities: number;

  quant: number;

  raffle(qnt: number) {
    for (let i = 0; i < qnt; i++) {
      this.maxLengthAllowed = this.possibilities;

      let picked = this.generateCombination();

      let found: string [];

      found = this.selectedNumbers.filter(filter => filter === picked);
      while (found.length > 0) {
          picked =  this.generateCombination();
          found = this.selectedNumbers.filter(filter => filter === picked);
      }
      this.pickedNumber = picked;
      this.selectedNumbers.push(this.pickedNumber);
      this.totalNumbers = this.selectedNumbers.length;
      this.currentPossibilities = this.selectedNumbers.length / this.possibilities * 100;
      if (this.selectedNumbers.length > this.maxLengthAllowed ) {
        this.maxNumberReached = true;
      }
    }
  }

  generateCombination() {
    this.n1 = Math.trunc((Math.random() * 60) + 1);

    this.n2 = Math.trunc((Math.random() * 60) + 1);
    while (this.n1 === this.n2) {
      this.n2 = Math.trunc((Math.random() * 60) + 1);
    }

    this.n3 = Math.trunc((Math.random() * 60) + 1);
    while (this.n3 === this.n2 || this.n3 === this.n1) {
      this.n3 = Math.trunc((Math.random() * 60) + 1);
    }

    this.n4 = Math.trunc((Math.random() * 60) + 1);
    while (this.n4 === this.n3 || this.n4 === this.n2 || this.n4 === this.n1) {
      this.n4 = Math.trunc((Math.random() * 60) + 1);
    }

    this.n5 = Math.trunc((Math.random() * 60) + 1);
    while (this.n5 === this.n4 || this.n5 === this.n3 || this.n5 === this.n2 || this.n5 === this.n1) {
      this.n5 = Math.trunc((Math.random() * 60) + 1);
    }

    this.n6 = Math.trunc((Math.random() * 60) + 1);
    while (this.n6 === this.n5 || this.n6 === this.n4 || this.n6 === this.n3 || this.n6 === this.n2 || this.n6 === this.n1) {
      this.n6 = Math.trunc((Math.random() * 60) + 1);
    }

    return  ('00' + this.n1).slice(-2) + ' - ' + ('00' + this.n2).slice(-2) + ' - ' + ('00' + this.n3).slice(-2) + ' - ' +
            ('00' + this.n4).slice(-2) + ' - ' + ('00' + this.n5).slice(-2) + ' - ' + ('00' + this.n6).slice(-2);
  }
}
