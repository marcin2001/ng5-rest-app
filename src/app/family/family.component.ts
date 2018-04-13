import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemberService } from '../app.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponComponent implements OnInit {

  membersList;
  selectedMember = {};

  constructor(private familyMembers: MemberService) { }

  ngOnInit() {
    this.loadListMember()
  }

  loadListMember() {
    this.familyMembers.getMembers()
      .subscribe(data => {
        this.membersList = data;
      })
  }

  addMember(objMember) {
    const NewMember = {
      name: objMember.name,
      lastname: objMember.lastName,
      old: objMember.age
    };
    this.familyMembers.addMember(NewMember)
      .subscribe(data => {
        this.membersList.push(data);
      })
  }



  deleteMember(memberId) {
    this.familyMembers.delMember(memberId)
      .subscribe(data => {
        this.loadListMember();
      })
  }
  selectMember(memeber) {
    this.selectedMember = memeber;
  }

  updateMember(member) {
    this.familyMembers.updateMember(member)
      .subscribe(data => {
        this.loadListMember();
      });
  }
  searchFunction(valueSearch) {
    const rawValue = valueSearch.toLowerCase().trim();
    this.familyMembers.getFindMembers(rawValue).subscribe(data =>
      this.membersList = data
    )
  }

} 
