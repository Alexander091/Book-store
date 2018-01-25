import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../shared/types/Book.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent {
  @Input() item: Book;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
