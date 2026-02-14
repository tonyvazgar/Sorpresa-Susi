import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProgressService } from './services/progress.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sorpresa-susi';

  constructor(
    private progress: ProgressService,
    private router: Router
  ) {
    const step = this.progress.getStep();

    if (step === 1) this.router.navigate(['/intro']);
    if (step === 2) this.router.navigate(['/memorama']);
    if (step === 3) this.router.navigate(['/final']);
  }
}
