import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    contactNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submited: ', this.contactForm.value);
      alert('Thank you for contacting us. We will get back to you shortly!');
      this.contactForm.reset();
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
