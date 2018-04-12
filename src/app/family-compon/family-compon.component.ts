import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { MembService } from '../app.service';

@Component({
  selector: 'app-family-compon',
  templateUrl: './family-compon.component.html',
  styleUrls: ['./family-compon.component.css']
})
export class FamilyComponComponent implements OnInit {
  
  listMembers;
  selectedMember = {};
  
  constructor( private familyMembers:  MembService){}
  
  ngOnInit() {
    this.refreshListMember()
  }
  refreshListMember(){
    this.familyMembers.getMembers()
    .subscribe(data => {
      this.listMembers = data;
    })
  }


  
  addMember( objMember ){
    const NewMembr = {
      name : objMember.addedName,
      lastname : objMember.addedLastname,
      old : objMember.addedOld
    };
    this.familyMembers.addMember( NewMembr )
      .subscribe( data => {
        this.listMembers.push(data);
      })
  }



  deleteMember(memberId){
    this.familyMembers.delMember( memberId )
    .subscribe( data => {
        this.refreshListMember();
      })
  }
  selectMember( memeber ){
    this.selectedMember = memeber;
  }
  
  updateMember(member) {  
     this.familyMembers.updateMember(member)
      .subscribe(data => {
        this.refreshListMember();
      });
  }
  searchFunction( valueSearch ){
      const dobleValueSearch = valueSearch.toLowerCase().trim();
      this.familyMembers.getFindMembers(dobleValueSearch).subscribe( data => 
        this.listMembers = data
       )
  }
    
} 
