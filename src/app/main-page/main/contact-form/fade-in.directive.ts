import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appFadeInOnScroll]'
})
export class FadeInOnScrollDirective {
    @Input() appFadeInOnScroll: 'left' | 'right' | 'up' | 'down' = 'up';

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const elementPosition = this.el.nativeElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Sprawdzenie czy dolna krawędź elementu jest widoczna w viewport
        const elementInView = elementPosition.bottom > 0 && elementPosition.top < viewportHeight;

        // Sprawdzenie czy element wyszedł poza viewport
        const elementOutView = elementPosition.bottom < 0 || elementPosition.top > viewportHeight;

        if (elementInView) {
            this.renderer.addClass(this.el.nativeElement, 'in-viewport-' + this.appFadeInOnScroll);
        }
        if (elementOutView) {
            this.renderer.removeClass(this.el.nativeElement, 'in-viewport-' + this.appFadeInOnScroll);
        }
    }

}
