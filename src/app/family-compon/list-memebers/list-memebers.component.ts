import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-memebers',
  templateUrl: './list-memebers.component.html',
  styleUrls: ['./list-memebers.component.css']
})
export class ListMemebersComponent implements OnInit {
  @Input() listMembers;
  @Output() selectMemberClick = new EventEmitter;
  @Output() clickDeleteMember = new EventEmitter;
  @Output() clickPostMember = new EventEmitter;

  objMember = {
    addedName:'',
    addedLastname: '',
    addedOld: ''
  }
  displayBlockinp = false;
  displayBlockbut = true;
  selectedMember = {};

  constructor() { }

  ngOnInit() {
  }

  selectMember(member){

  }

  displayBlock(){
    this.displayBlockinp = true;
    this.displayBlockbut = false;
  }

  clickSelectMember(selectedMemeber) {
    this.selectMemberClick.emit(selectedMemeber);
  }

  clickDeleteMemberr( memberId ){
    this.clickDeleteMember.emit( memberId )
  }

  clickPostMemberr( objMember ){
    if( objMember.addedName==='' || objMember.addedLastname==='' || objMember.addedOld==='' )
    alert( 'Щоб додати учасника,\n необхідно заповнити всі поля!' )
    else{
       this.clickPostMember.emit( objMember )
       objMember.addedName = ''
       objMember.addedLastname = ''
       objMember.addedOld = ''
       this.displayBlockinp = false;
       this.displayBlockbut = true;
    }
  }
 
  
}
