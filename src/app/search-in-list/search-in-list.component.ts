import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-in-list',
  templateUrl: './search-in-list.component.html',
  styleUrls: ['./search-in-list.component.css']
})
export class SearchInListComponent implements OnInit {
  @Output() searchFunction = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  
  valueSearch = '';
  clickSearch( valueSearch ){
    this.searchFunction.emit( valueSearch )
  }
 
}
