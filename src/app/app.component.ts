import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsObservablesComponent } from "./components/rxjs-observables/rxjs-observables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RxjsObservablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-observables';
}
