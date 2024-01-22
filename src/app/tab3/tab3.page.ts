import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  introduction = '¡Hola! Soy una estudiante del ciclo formativo de grado superior en desarrollo de aplicaciones multiplataforma.';

  // Define las habilidades y lenguajes aquí
  languages = [
    { name: 'JetBrains', icon: 'jetbrains' },
    { name: 'Java', icon: 'java' },
    { name: 'Kotlin', icon: 'kotlin' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Android Studio', icon: 'android-studio' },
    { name: 'PHP', icon: 'php' },
    { name: 'Tomcat', icon: 'tomcat' },
    { name: 'CSS', icon: 'css' },
    { name: 'Bootstrap', icon: 'bootstrap' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Ionic', icon: 'ionic' },
    { name: 'HTML', icon: 'html' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'SQLite', icon: 'sqlite' },
    { name: 'Git', icon: 'git' },
    { name: 'Python', icon: 'python' },
    { name: 'Anaconda', icon: 'anaconda' },
    { name: 'Unity', icon: 'unity' },
    { name: 'C#', icon: 'c-sharp' },
  ];

  // Define los idiomas aquí
  languagesProficiency = [
    { language: 'Español', flag: 'es', proficiency: 'Nativo' },
    { language: 'Inglés', flag: 'us', proficiency: 'Avanzado' },
    // Agrega otros idiomas aquí
  ];

  // Agrega más información de contacto si es necesario
  contactEmail = 'tucorreo@example.com';

  constructor(private platform: Platform) {}

  sendEmail() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      window.open(`mailto:${this.contactEmail}`, '_system');
    } else {
      // Lógica para manejar otros dispositivos o navegadores
      // Puede ser una redirección a una página de contacto, por ejemplo.
    }
  }
}
