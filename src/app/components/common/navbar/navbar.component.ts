import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corrected property name
})
export class NavbarComponent {

  constructor(public authService: AuthService, private router: Router) { // Inject Router

  }

  logout() { // Corrected method name
    this.authService.deleteUser();
    this.router.navigateByUrl('');
  }
}
