import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input() initialValue: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  counterValue: number = 0;

  ngOnInit() {
    this.counterValue = this.initialValue;
  }

  increment() {
    this.counterValue++;
    this.emitValueChange();
  }

  decrement() {
    this.counterValue--;
    this.emitValueChange();
  }

  emitValueChange() {
    this.valueChange.emit(this.counterValue);
  }
}
