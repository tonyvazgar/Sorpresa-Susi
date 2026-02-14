import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';
import { FinalComponent } from './pages/final/final.component';
import { MemoramaComponent } from './pages/memorama/memorama.component';

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'memorama', component: MemoramaComponent },
  { path: 'final', component: FinalComponent },
  { path: '**', redirectTo: 'intro' }
];
