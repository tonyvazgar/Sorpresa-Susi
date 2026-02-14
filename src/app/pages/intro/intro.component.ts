import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressService } from '../../services/progress.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

  noquiero = true;
  tituloContinuar = "Continuar"

  constructor(
    private router: Router,
    private progress: ProgressService
  ) { }

  continuar() {
    this.progress.setStep(2);
    this.router.navigate(['/memorama']);
  }

  noQuiero() {
    this.noquiero = false;
    this.tituloContinuar = "Estas segura? 🥺"
  }
}
