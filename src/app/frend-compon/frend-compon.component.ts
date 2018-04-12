import { Component, OnInit } from '@angular/core';
import { MembService } from '../app.service';

@Component({
  selector: 'app-frend-compon',
  templateUrl: './frend-compon.component.html',
  styleUrls: ['./frend-compon.component.css']
})
export class FrendComponComponent implements OnInit {

  constructor( private familyMembers:  MembService){}
  
  ngOnInit() {
    this.refreshFrend()
  }
  refreshFrend(){
    this.familyMembers.getFrends()
    .subscribe(data => {
      this.listFrendss = data;
    })
  }
  listFrendss;
  selectedFrend = {};
  


  addFrend( objFrend ){
    const NewFrend = {
      name : objFrend.addedName,
      lastname : objFrend.addedLastname,
      old : objFrend.addedOld
    };
    this.familyMembers.addFrend( NewFrend )
      .subscribe( data => {
        this.refreshFrend()
      } )
  }



  deleteFrend(ferndId){
    this.familyMembers.deleteFrend( ferndId )
    .subscribe( data => {
        this.refreshFrend();
      })
  }
  selectFrend( frend ){
    this.selectedFrend = frend;
  }
  
  updateFrend(frend) {
     this.familyMembers.updateFrend(frend)
      .subscribe(data => {
        this.refreshFrend();
      });
  }
  searchFunction( valueSearch ){
      const dobleValueSearch = valueSearch.toLowerCase().trim();
      this.familyMembers.getFindFrend(dobleValueSearch).subscribe( data => 
        this.listFrendss = data
       )
  }

}
