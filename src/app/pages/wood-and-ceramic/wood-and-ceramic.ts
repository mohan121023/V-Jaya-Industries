import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wood-and-ceramic',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wood-and-ceramic.html',
  styleUrl: './wood-and-ceramic.scss',
})
export class WoodAndCeramic {
  featuresList = [
    { title: 'Wood Products', desc: 'From elegant wooden knobs to functional cutting boards and versatile hooks.' },
    { title: 'Ceramic Products', desc: 'Featuring stylish ceramic knobs and durable handles that add a touch of sophistication to any space.' },
    { title: 'Superior Craftsmanship', desc: 'Each item is meticulously crafted by our dedicated team, ensuring attention to detail and exceptional quality.' },
    { title: 'Customization', desc: 'We offer the flexibility to customize designs and finishes to suit your specific needs.' },
    { title: 'Customer Satisfaction', desc: 'Our commitment is to deliver products that not only meet but exceed your expectations.' }
  ];

  masonryImages = [
    { src: '/image/wood and ceramic/wood and ceramic (1).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (2).jpeg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (2).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (3).jpeg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (3).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (4).jpeg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (4).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (5).jpeg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (5).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (6).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (7).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (8).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (9).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (10).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (11).jpg', class: '' },
    { src: '/image/wood and ceramic/wood and ceramic (1).jpeg', class: '' }
  ];
}
