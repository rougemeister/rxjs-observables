import { Component } from '@angular/core';
import { RxjsDemoService } from '../../service/rxjs-observables.service';

@Component({
  selector: 'app-rxjs-observables',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-observables.component.html',
  styleUrl: './rxjs-observables.component.scss'
})
export class RxjsObservablesComponent {
  constructor(private rxjsDemoService: RxjsDemoService) {}

  ngOnInit() {
    // Task 1: Subscribe to number observable
    this.rxjsDemoService.createNumberObservable().subscribe(
      value => console.log('Number Value:', value),
      null,
      () => console.log('Number Observable complete')
    );

    // Task 2: Subscribe to color observable
    this.rxjsDemoService.createColorObservable().subscribe(
      color => console.log('Color:', color),
      null,
      () => console.log('Color Observable complete')
    );

    // Task 3: Subscribe to interval observable
    this.rxjsDemoService.createIntervalObservable().subscribe(
      value => console.log(`Interval value: ${value}, Timestamp: ${new Date().toISOString()}`),
      null,
      () => console.log('Interval Observable complete')
    );

    // Task 4: Subscribe to combined observable
    this.rxjsDemoService.combineObservables().subscribe(
      value => console.log('Combined value:', value),
      null,
      () => console.log('Combined Observable complete')
    );

    // Task 5: Subscribe to error observable
    this.rxjsDemoService.createErrorObservable().subscribe(
      value => console.log('Error Observable Value:', value),
      error => console.log('Caught error:', error),
      () => console.log('Error Observable complete')
    );
  }
}
