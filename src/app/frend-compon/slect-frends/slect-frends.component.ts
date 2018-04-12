import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slect-frends',
  templateUrl: './slect-frends.component.html',
  styleUrls: ['./slect-frends.component.css']
})
export class SlectFrendsComponent implements OnInit {

  @Input() frend;
  @Output() triggerFrendUpdate = new EventEmitter;

  selectedFrend;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.frend.currentValue) {
      this.selectedFrend = Object.assign({}, changes.frend.currentValue);
    }
  }

  updateFrend(selectedFrend) {
    this.triggerFrendUpdate.emit(selectedFrend);
  }


}
