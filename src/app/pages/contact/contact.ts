import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  // Form submission logic can be added here
  onSubmit(event: Event) {
    event.preventDefault();
    // Simulate form submission
    alert('Thank you for contacting us. We will get back to you shortly!');
  }
}
