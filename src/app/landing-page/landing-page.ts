import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    RouterLink
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

  constructor(private router: Router) {}

onContinue() {
  this.router.navigate(['/facesnaps']);
}

}
