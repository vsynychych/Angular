import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  inc: number;

  ngOnInit(): void {
    this.dataService.getInc().subscribe(value => this.inc = value);
  }

  countInc(): void {
    this.dataService.setInc();
  }

  countDec(): void {
    this.dataService.setDec();
  }
}
