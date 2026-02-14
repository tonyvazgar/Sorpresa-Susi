import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private key = 'susi-surprise-step';

  setStep(step: number) {
    localStorage.setItem(this.key, step.toString());
  }

  getStep(): number {
    return Number(localStorage.getItem(this.key)) || 1;
  }

  reset() {
    localStorage.removeItem(this.key);
  }

  constructor() { }
}
