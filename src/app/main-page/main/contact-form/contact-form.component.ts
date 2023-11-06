import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  animations: [
    trigger('fadeInOut', [
      // Definicja stanu 'void' odpowiada za elementy nieistniejące w DOM
      transition(':enter', [  // alias ':enter' odpowiada za stan 'void => *'
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [  // alias ':leave' odpowiada za stan '* => void'
        animate('0.5s ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ContactFormComponent {
  submitMessage: string = 'Email sent successfully!';
  isSubmit: boolean = false;
  spinning = false
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  submitEmail(value: any) {
    if (this.contactForm.valid) {
      this.firestore.collection('emails').add(value).then(() => {
        this.submitMessage = 'Email sent successfully!';
        this.spinning = false
        this.isSubmit = true
        setTimeout(() => this.isSubmit = false, 5000);
      }).catch(error => {
        console.error('Error sending message: ', error);
      });


    }
  }
}
