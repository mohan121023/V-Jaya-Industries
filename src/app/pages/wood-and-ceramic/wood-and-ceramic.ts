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
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/51BQtCUewsL._AC_SL1500_.jpg', class: 'h-64' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/woode-768x512.jpg', class: 'h-80' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/71mDBiHj-qL._AC_UF8941000_QL80_-1.jpg', class: 'h-56' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/wood2.jpg', class: 'h-48' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/wood3.jpg', class: 'h-72' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/wood4.jpg', class: 'h-64' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/wood5.jpg', class: 'h-56' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/wood6.jpg', class: 'h-40' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/wood7.jpg', class: 'h-64' }
  ];
}
