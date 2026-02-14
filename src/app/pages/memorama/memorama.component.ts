import { Component } from '@angular/core';
import { ProgressService } from '../../services/progress.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memorama',
  imports: [CommonModule],
  templateUrl: './memorama.component.html',
  styleUrl: './memorama.component.scss'
})
export class MemoramaComponent {

  constructor(
    private progress: ProgressService,
    private router: Router
  ) {
  }
  cards = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'
  ];

  deck: any[] = [];
  flipped: any[] = [];
  lock = false;

  ngOnInit() {
    this.initGame();
  }

  initGame() {
    this.deck = [...this.cards, ...this.cards]
      .map((img, i) => ({
        id: i,
        img,
        flipped: false,
        matched: false
      }))
      .sort(() => Math.random() - 0.5);
  }

  flip(card: any) {
    if (this.lock || card.flipped || card.matched) return;

    card.flipped = true;
    this.flipped.push(card);

    if (this.flipped.length === 2) {
      this.checkMatch();
    }
  }

  checkMatch() {
    const [a, b] = this.flipped;
    this.lock = true;

    setTimeout(() => {
      if (a.img === b.img) {
        a.matched = b.matched = true;
        this.checkWin();
      } else {
        a.flipped = b.flipped = false;
      }

      this.flipped = [];
      this.lock = false;
    }, 700);
  }

  checkWin() {
    if (this.deck.every(c => c.matched)) {
      this.progress.setStep(3);
      setTimeout(() => this.router.navigate(['/final']), 1000);
    }
  }
}
