import {Component, Input} from '@angular/core';
import {CarInterface} from '../../interfaces';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input()
  car: CarInterface;
}
