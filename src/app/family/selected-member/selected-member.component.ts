import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected-member',
  templateUrl: './selected-member.component.html',
  styleUrls: ['./selected-member.component.css']
})
export class SelectedMemberComponent implements OnInit, OnChanges {
  @Input() member;
  @Output() triggerMemberUpdate = new EventEmitter();

  selectedMember;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.member.currentValue) {
      this.selectedMember = Object.assign({}, changes.member.currentValue);
    }
  }

  updateMember(selectedMember) {
    this.triggerMemberUpdate.emit(selectedMember);
    this.selectedMember = {}
  }

}
