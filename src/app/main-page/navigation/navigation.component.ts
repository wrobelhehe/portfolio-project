import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('slideDown', [
      state('hidden', style({
        height: '0vh',
        opacity: '0',
        overflow: 'hidden',
      })),
      state('visible', style({
        height: '30vh', // lub inna wartość, którą chcesz ustawić
        opacity: '1'
      })),
      transition('hidden <=> visible', [
        animate('5s')
      ]),
    ])
  ]
})
export class NavigationComponent {

  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;

  }
}
