import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  displayStatus = false;
  historyArray = [];
  
  constructor() { }

  ngOnInit() {
  }

  changeDisplayStatus() {
    this.updateArray();
    this.displayStatus = !this.displayStatus;
  }

  updateArray() {
      this.historyArray.push(this.historyArray.length + 1);
  }

  getDisplayValue() {
    return this.displayStatus;
  }

  getColor() {
    return this.historyArray.length >= 5 ? 'red' : 'black'; 
  }

}
