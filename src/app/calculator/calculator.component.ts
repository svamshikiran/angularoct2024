import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  addResult: number = 0;
  subResult: number = 0;
  multiplyResult: number = 0;
  divideResult: number = 0;

  add(first: String, second: String){
    this.addResult = Number(first) + Number(second);
  }

  subtract(first: String, second: String){
    this.subResult = Number(first) - Number(second);
  }

  multiply(first: String, second: String){
    this.multiplyResult = Number(first) * Number(second);
  }

  divide(first: String, second: String){
    this.divideResult = Number(first) / Number(second);
  }

}
