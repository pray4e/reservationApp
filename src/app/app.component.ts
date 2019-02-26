import { Component } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  providers = AuthProvider
  title = 'reservationApp';
}
