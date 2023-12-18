import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from '../service/httpservice.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-tv-program',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './tv-program.component.html',
  styleUrl: './tv-program.component.css'
})
export class TvProgramComponent {
  constructor(public route : ActivatedRoute, public http : HttpserviceService) {}

  protected program_id :any;
  protected  program :any;
  protected loaded:boolean = false;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.program_id = params.get('id');
      this.http.show_program(this.program_id).subscribe((data: any) => {
        console.log(data);
        this.program = data;
        console.log(data)
        this.loaded=true;
      });
    });


  }


}
