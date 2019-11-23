import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../auth-service.service";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private toggle:boolean= false
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private _authService: AuthServiceService, config: NgbCarouselConfig) {
    config.interval = 3000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;
   }

  ngOnInit() {
  }
  onChange(){
    this.toggle = !this.toggle
  }

}
