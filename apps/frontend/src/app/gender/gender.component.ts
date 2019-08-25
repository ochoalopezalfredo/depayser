import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'admission-test-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  listMovies: Array<Movie>
  filter = "";
  page = 1;
  itemsPerPage = 40;
  gender: string
  endOfList: boolean;
  constructor(private route: ActivatedRoute, private app: AppService) { }
  ngOnInit() {
    this.route.params.subscribe(params => this.gender = params.gender)
    this.route.data.subscribe(params => {this.listMovies = params.movies; this.endOfList = false})
  }
  get movies() {
    return this.listMovies.filter(item => item.title.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1)
  }
  loadMoreMovies() {
    if (!this.endOfList) {
      this.app.loadMore(this.gender, this.page * this.itemsPerPage).subscribe(newMovies => {
        if (newMovies.length > 0) {
          this.listMovies.push(...newMovies);
          this.page++;
        } else {
          this.endOfList = true;
        }
      })
    }
  }
}
