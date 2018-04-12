import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';

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

  objFrend = {
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

  displayBlock(){
    this.displayBlockinp = true;
    this.displayBlockbut = false;
  }

  clickSelectFrend(selectedFrend) {
    this.selectFrendClick.emit(selectedFrend);
    console.log( selectedFrend )
  }

  clickDeleteFrendd( frendId ){
    this.clickDeleteFrend.emit( frendId )
  }

  clickPostFrendd( objFrend ){
    if( objFrend.addedName==='' || objFrend.addedLastname==='' || objFrend.addedOld==='' )
    alert( 'Щоб додати учасника,\n необхідно заповнити всі поля!' )
    else{
       this.clickPostFrend.emit( objFrend )
       objFrend.addedName = ''
       objFrend.addedLastname = ''
       objFrend.addedOld = ''
       this.displayBlockinp = false;
       this.displayBlockbut = true;
    }
  }
}
