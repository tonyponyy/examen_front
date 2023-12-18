import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpserviceService } from '../service/httpservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent {
  protected films :any;
  constructor(public http: HttpserviceService){}

  ngOnInit() {

    this.http.show_films().subscribe((data: any) => {
      console.log(data);
      this.films = data.results;
    });


  }

search(arg0: string) {
throw new Error('Method not implemented.');
}

}
