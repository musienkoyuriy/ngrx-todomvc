import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'filters',
  template: `
    <form>
      <button (click)="onFilterChange('SHOW_ALL')">All</button>
      <button (click)="onFilterChange('SHOW_ACTIVE')">Active</button>
      <button (click)="onFilterChange('SHOW_COMPLETED')">Completed</button>
    </form>
  `
})
export class FiltersComponent {
  @Input()
  public current: Observable<{}>;
  @Output()
  public changeFilter: EventEmitter<string> = new EventEmitter<string>();

  public onFilterChange(filterValue: string): void {
    this.changeFilter.emit(filterValue);
  }
}
