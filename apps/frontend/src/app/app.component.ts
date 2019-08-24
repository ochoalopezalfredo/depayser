import { Component } from '@angular/core';
export const genders = [
  { link: 'gen_accion', label: 'Acción y Aventura' },
  { link: 'gen_anime', label: 'Animé y Videojuegos' },
  { link: 'gen_biograficas', label: 'Biográficas' },
  { link: 'gen_scifi', label: 'Ciencia Ficción' },
  { link: 'gen_cineoro', label: 'Cine de Oro' },
  { link: 'gen_clasicas', label: 'Clásicas' },
  { link: 'gen_comedia', label: 'Comedia' },
  { link: 'gen_deportes', label: 'Deportes' },
  { link: 'gen_docu', label: 'Documentales' },
  { link: 'gen_drama', label: 'Drama' },
  { link: 'gen_familiares', label: 'Familiares' },
  { link: 'gen_historicas', label: 'Históricas' },
  { link: 'gen_infantiles', label: 'Infantiles' },
  { link: 'gen_latino', label: 'Latinoamericanas' },
  { link: 'gen_musica', label: 'Música' },
  { link: 'gen_romanticas', label: 'Románticas' },
  { link: 'gen_terror', label: 'Terror y Suspenso' },
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
