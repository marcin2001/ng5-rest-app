import { Component, OnInit } from '@angular/core';
import { MemberService } from '../app.service';

@Component({
  selector: 'app-frend-compon',
  templateUrl: './frend-compon.component.html',
  styleUrls: ['./frend-compon.component.css']
})
export class FrendComponComponent implements OnInit {
  friendsList;
  selectedFrend = {};

  constructor(private familyMembers: MemberService) { }

  ngOnInit() {
    this.loadFriends()
  }
  loadFriends() {
    this.familyMembers.getFrends()
      .subscribe(data => {
        this.friendsList = data;
      })
  }

  addFriend(objFriend) {
    const NewFriend = {
      name: objFriend.name,
      lastname: objFriend.lastName,
      old: objFriend.age
    };
    this.familyMembers.addFriend(NewFriend)
      .subscribe(data => {
        this.loadFriends()
      })
  }

  deleteFrend(ferndId) {
    this.familyMembers.deleteFrend(ferndId)
      .subscribe(data => {
        this.loadFriends();
      })
  }

  selectFrend(frend) {
    this.selectedFrend = frend;
  }

  updateFrend(frend) {
    this.familyMembers.updateFrend(frend)
      .subscribe(data => {
        this.loadFriends();
      });
  }

  searchFunction(valueSearch) {
    const rawValue = valueSearch.toLowerCase().trim();
    this.familyMembers.getFindFrend(rawValue).subscribe(data => {
      this.friendsList = data;
    }) 
  }

}
