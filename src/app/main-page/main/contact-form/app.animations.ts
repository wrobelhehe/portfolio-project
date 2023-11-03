// app.animations.ts
import {
    trigger,
    animate,
    transition,
    style,
    query,
    AnimationTriggerMetadata,
} from '@angular/animations';

export const fadeInAnimation: AnimationTriggerMetadata = trigger('fadeInAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
    ]),
]);
