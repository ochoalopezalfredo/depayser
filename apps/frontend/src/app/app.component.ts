import { Component } from '@angular/core';

@Component({
  selector: 'admission-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Depayser";
  logo = "assets/logo.svg"
  navigation = [
    { link: 'inicio', label: 'Inicio' },
    { link: 'catalogo', label: 'Catalogo' },
  ];
}
