import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private router: Router) { }


  navigateToSection(sectionId: string): void {
    // Prevent the default anchor click behavior
    event?.preventDefault();

    // Find the element with the corresponding ID
    const element = document.querySelector(sectionId);

    // If the element exists, scroll to it
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;

  }
}
