import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  activeIndex = 0;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted (Home): ', this.contactForm.value);
      alert('Thank you for getting in touch. We will respond shortly!');
      this.contactForm.reset();
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  setActive(index: number) {
    this.activeIndex = index;
  }

  heroCarouselItems = [
    { title: 'Die Casting', id: '01', image: '/image/dei-casting.jpg', link: '/die-casting' },
    { title: 'Door Hardware', id: '02', image: '/image/dorrr-768x512.jpg', link: '/door-hardware' },
    { title: 'Steel Fabrication', id: '03', image: '/image/stel1-768x512.jpg', link: '/steel-fabrication' },
    { title: 'Wood & Ceramic', id: '04', image: '/image/woode-768x512.jpg', link: '/wood-and-ceramic' },
    { title: 'Plastic & Rubber Moudling', id: '05', image: '/image/rubberr-768x512.jpg', link: '/plastic-and-rubber-moulding' },
    { title: 'Automobile defence & Aviation', id: '06', image: '/image/air-768x512.jpg', link: '/automobile-defence-and-aviation' },
    { title: 'Private label Products', id: '07', image: '/image/your-brand-768x512.jpg', link: '/private-lable-packing' }
  ];

  servicesRow1 = [
    { title: 'Die casting', image: '/image/Die casting.png', link: '/die-casting' },
    { title: 'Door hardware', image: '/image/Door hardware.png', link: '/door-hardware' },
    { title: 'Steel Fabrication', image: '/image/Steel Fabrication.png', link: '/steel-fabrication' },
    { title: 'Wood & ceramic', image: '/image/Wood & ceramic.jpg', link: '/wood-and-ceramic' }
  ];

  servicesRow2 = [
    { title: 'Plastic and Rubber Moudling', image: '/image/Plastic and Rubber.png', link: '/plastic-and-rubber-moulding' },
    { title: 'Automobile defence & Aviation', image: '/image/Automobile defence & Aviation.webp', link: '/automobile-defence-and-aviation' },
    { title: 'Product development & Private label products', image: '/image/Product development & Private label products.png', link: '/private-lable-packing' }
  ];
}
