import { Component } from '@angular/core';
export const genders = [
  { link: '/genero/accion', label: 'Acción y Aventura' },
  { link: '/genero/anime', label: 'Animé y Videojuegos' },
  { link: '/genero/biograficas', label: 'Biográficas' },
  { link: '/genero/scifi', label: 'Ciencia Ficción' },
  { link: '/genero/cineoro', label: 'Cine de Oro' },
  { link: '/genero/clasicas', label: 'Clásicas' },
  { link: '/genero/comedia', label: 'Comedia' },
  { link: '/genero/deportes', label: 'Deportes' },
  { link: '/genero/docu', label: 'Documentales' },
  { link: '/genero/drama', label: 'Drama' },
  { link: '/genero/familiares', label: 'Familiares' },
  { link: '/genero/historicas', label: 'Históricas' },
  { link: '/genero/infantiles', label: 'Infantiles' },
  { link: '/genero/latino', label: 'Latinoamericanas' },
  { link: '/genero/musica', label: 'Música' },
  { link: '/genero/romanticas', label: 'Románticas' },
  { link: '/genero/terror', label: 'Terror y Suspenso' },
]
@Component({
  selector: 'admission-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Depayser";
  logo = "assets/logo.svg"
  showGendersMobile = false;
  genders = genders
  navigation = [
    { link: 'inicio', label: 'Inicio' },
    { link: 'catalogo', label: 'Catalogo' },
  ];
}
