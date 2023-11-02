import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

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
        height: '30vh',
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

  get menuClass() {
    return {
      'bgc-color-black': this.menuVisible,
    };
  }


  toggleMenu() {
    this.menuVisible = !this.menuVisible;

  }
}
