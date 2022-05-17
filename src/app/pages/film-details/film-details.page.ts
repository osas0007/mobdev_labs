import { FavouriteService } from './../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
	
  film: any;
  isFavourite = false;
  filmId = null;  
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private favouriteService: FavouriteService) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.dev/api/films/${id}`).subscribe(res => {
      this.film = res;
    });
 
    this.favouriteService.isFavourite(this.filmId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteFilm() {
    this.favouriteService.favouriteFilm(this.filmId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteFilm() {
    this.favouriteService.unfavouriteFilm(this.filmId).then(() => {
      this.isFavourite = false;
    });
  }

}
