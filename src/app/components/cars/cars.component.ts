import {Component} from '@angular/core';
import {cars} from '../../dataBases';
import {CarInterface} from '../../interfaces';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent {
  cars: CarInterface[] = cars;
}
