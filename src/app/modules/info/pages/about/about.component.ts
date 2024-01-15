import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  time = signal(1000);

  handleChangeTime = (e: Event) => {
    const input = e.target as HTMLInputElement;
    this.time.set(parseInt(input.value));
  }
}
