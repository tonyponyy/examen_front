import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpserviceService } from '../service/httpservice.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tv-programs',
    standalone: true,
    templateUrl: './tv-programs.component.html',
    styleUrl: './tv-programs.component.css',
    imports: [NavbarComponent,RouterLink],
})
export class TvProgramsComponent {

    protected programs :any;
    constructor(public http: HttpserviceService){}
  
    ngOnInit() {
  
      this.http.show_programs().subscribe((data: any) => {
        console.log(data);
        this.programs = data.results;
      });
    }
  
  search(arg0: string) {
  throw new Error('Method not implemented.');
  }


}
