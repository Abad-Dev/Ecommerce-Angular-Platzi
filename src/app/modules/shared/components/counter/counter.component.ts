import { Component, Input, SimpleChanges, signal } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message = '';

  counter = signal(this.duration);
  counterRef: number | undefined;

  constructor() {
    // Not async
    console.log('Primer log');
    console.log('states: ', this.duration, this.message);
  }

  ngOnChanges(changes: SimpleChanges){
    // Before and during render
    console.log('Segundo log');
    console.log(changes);
  }

  ngOnInit(){
    // After render, async things...
    this.counterRef = window.setInterval(() =>  {
      this.counter.update((count) => count+=1);
      console.log('contador mas uno');
    }, 1000);
    console.log('OnInit');
  }

  ngAfterViewInit(){
    // After children render
    console.log('Cuarto log');
  }

  ngOnDestroy(){
    window.clearInterval(this.counterRef);
    console.log('Contador destruido');
  }
}
