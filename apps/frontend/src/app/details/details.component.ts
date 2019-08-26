import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../app.service';
import { Movie } from '../interfaces/movie.interface';
@Component({
  selector: 'admission-test-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  genders: string;
  talents: Array<any>;
  constructor(
    private app: AppService,
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public movie: Movie
  ) {
    this.app.details(this.movie.id).subscribe(details => {
      this.genders = details.genres.genre.map(item => item.desc);
      this.talents = details.roles.role.map(rol => rol.talents.talent.map(talent => ({ rol: rol.desc, name: `${talent.name} ${talent.surname}` }))).reduce((prev,next)=>prev.concat(next))
    });
  }
}
