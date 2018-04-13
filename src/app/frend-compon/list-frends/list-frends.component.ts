import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-frends',
  templateUrl: './list-frends.component.html',
  styleUrls: ['./list-frends.component.css']
})
export class listFrendssComponent implements OnInit {

  @Input() listFrends;
  @Output() selectFrendClick = new EventEmitter;
  @Output() clickDeleteFrend = new EventEmitter;
  @Output() clickPostFrend = new EventEmitter;

  objFriend = {
    name: '',
    lastName: '',
    age: ''
  }
  displayInput = false;
  displayButton = true;
  selectedMember = {};

  constructor() { }

  ngOnInit() {
  }

  displayBlock() {
    this.displayInput = true;
    this.displayButton = false;
  }

  clickSelectFrend(selectedFrend) {
    this.selectFrendClick.emit(selectedFrend);
  }

  clickDeleteFriend(frendId) {
    this.clickDeleteFrend.emit(frendId)
  }

  clickPostFrendd(objFriend) {
    if (objFriend.name === '' || objFriend.lastName === '' || objFriend.age === '')
      alert('Please fill out all fields to add new friend!')
    else {
      this.clickPostFrend.emit(objFriend)
      this.refreshState();
    }
  }

  refreshState() {
    this.objFriend.name = '';
    this.objFriend.lastName = '';
    this.objFriend.age = '';
    this.displayInput = false;
    this.displayButton = true;
  }
}
