import { Component } from '@angular/core';
import { CustomLoaderComponent } from '../custom-loader/custom-loader.component';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CustomLoaderComponent, RouterModule, IonicModule],
})
export class HomePage {
  isLoading: boolean = false;

  constructor(private router: Router) {}

  startLoading() {
    this.isLoading = true;

    // setTimeout(() => {
    //   this.isLoading = false;
    //   this.router.navigate(['/post-loading']);
    // }, 5000);
  }
}
