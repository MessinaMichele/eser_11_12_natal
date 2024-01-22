import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client-angular';
  title1 = 'routing-test-app';
  constructor(private router: Router, private location: Location) {}

  navigateTo(route: string): void {
      this.router.navigateByUrl(route);
  }
  imagePath1: string = "/assets/fer1.png";
  imagePath2: string = "/assets/fer2.png";
  imagePath3: string = "/assets/fer3.png";
  imagePath4: string = "/assets/fer4.png";
  imagePath5: string = "/assets/fer5.png";
  imagePath6: string = "/assets/fer6.png";
  imagePath7: string = "/assets/ferrari_488_GTB.JPG";
  imagePath8: string = "/assets/29_Ferrari_Portofino.jpg"
  imagePath9: string = "/assets/Ferrari-SF90-Stradale.jpg"
  imagePath10: string = "/assets/Ferrari-Purosangue.jpg"
  imagePath11: string = "/assets/ferrariPininf.jpg"
  imagePath12: string = "/assets/ferrari-mythos.jpg"
  imagePath13: string = "/assets/cavaferrari.png"
  imageSize: string = "200px";
  sitePath: string = "/app/ferrari-488/ferrari-488.component.html";
}




