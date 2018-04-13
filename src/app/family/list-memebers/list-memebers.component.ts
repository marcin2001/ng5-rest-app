import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-memebers',
  templateUrl: './list-memebers.component.html',
  styleUrls: ['./list-memebers.component.css']
})
export class ListMemebersComponent implements OnInit {
  @Input() membersList;
  @Output() selectMemberClick = new EventEmitter();
  @Output() clickDeleteMember = new EventEmitter();
  @Output() clickPostMember = new EventEmitter();

  objMember = {
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

  clickSelectMember(selectedMember) {
    this.selectMemberClick.emit(selectedMember);
  }

  clickDeleteMemberr(memberId) {
    this.clickDeleteMember.emit(memberId)
  }

  clickPostMemberr(objMember) {
    if (objMember.name === '' || objMember.lastName === '' || objMember.age === '')
      alert('Please fill out all fields to add new member!');
    else {
      this.clickPostMember.emit(objMember)
      this.resetComponentState();
    }
  }

  resetComponentState() {
    this.displayInput = false;
    this.displayButton = true;
    this.objMember.name = '';
    this.objMember.lastName = '';
    this.objMember.age = '';
  }

}
