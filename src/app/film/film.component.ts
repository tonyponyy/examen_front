import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {

  constructor(public route : ActivatedRoute, public http : HttpserviceService) {}

  protected film_id :any;
  protected  film :any;
  protected loaded:boolean = false;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.film_id = params.get('id');
      this.http.show_film(this.film_id).subscribe((data: any) => {
        console.log(data);
        this.film = data;
        console.log(data)
        this.loaded=true;
      });
    });


  }


}
