import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  faStar = farStar;
  i : number = 0;
 @Input('is-selected') isFavorite : boolean;
 @Output('change') click = new EventEmitter();

  onFavorite(){

      this.isFavorite = !this.isFavorite;
      this.faStar = this.isFavorite ? fasStar : farStar;
      this.click.emit({newState: this.isFavorite});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
