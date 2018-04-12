import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected-member',
  templateUrl: './selected-member.component.html',
  styleUrls: ['./selected-member.component.css']
})
export class SelectedMemberComponent implements OnInit, OnChanges {
  @Input() member;
  @Output() triggerMemberUpdate = new EventEmitter;

  selectedMemeber ;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.member.currentValue) {
      this.selectedMemeber = Object.assign({}, changes.member.currentValue);
    }
  }

  updateMember(selectedMemeber) {
    this.triggerMemberUpdate.emit(selectedMemeber);
    this.selectedMemeber = {}
  }

}
