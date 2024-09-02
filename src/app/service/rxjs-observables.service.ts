import { Injectable } from '@angular/core';
import { concat, of, from, interval, Observable } from 'rxjs';
import { take, catchError, map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjsDemoService {

  // Task 1: Creating and Subscribing to an Observable with `of`
  createNumberObservable() {
    return of(1, 2, 3, 4, 5);
  }

  // Task 2: Working with `from`
  createColorObservable() {
    const colors = ['red', 'green', 'blue'];
    return from(colors);
  }


  // Task 3: Using `interval`
  createIntervalObservable() {
    return interval(1000).pipe(take(5));
  }

  // Task 4: Combining Observables
  combineObservables() {
    const numberObs = of(10, 20, 30);
    const colorObs = from(['yellow', 'pink', 'purple']);
    console.log(numberObs)
    return concat(numberObs,colorObs);
  }

  // Task 5: Error Handling
  createErrorObservable() {
    return new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.error('Something went wrong!');
    }).pipe(
      catchError(err => of(`Error caught: ${err}`))
    );
  }



  //Additional operation

  // Custom Operator that doubles each emitted value
  doubleValues<T>() {
    return (source$: Observable<T>) => source$.pipe(
      map(value => {
        if (typeof value === 'number') {
          return (value as any) * 2;
        } else {
          return value;
        }
      })
    );
  }

// Using the custom operator with an observable
useCustomOperator() {
  const sourceObservable = of(1, 2, 3, 4, 5);
  return sourceObservable.pipe(this.doubleValues());
}

createDebouncedIntervalObservable() {
  return interval(1000).pipe(
    debounceTime(500),  // 500ms debounce
    take(5)
  );
}





}
