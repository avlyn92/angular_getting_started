import {
  Component,
  OnChanges,
  Input,
  EventEmitter,
  Output
} from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); //@Output() decorator must return an EVENT() and therefore is a METHOD() props! so is init with new Event object and used in Event binding.

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!` );
  }
}
