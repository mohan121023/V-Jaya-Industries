import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plastic-and-rubber-moulding',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './plastic-and-rubber-moulding.html',
  styleUrl: './plastic-and-rubber-moulding.scss',
})
export class PlasticAndRubberMoulding {
  masonryImages = [
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubberr-768x512.jpg', class: 'h-64 lg:h-72' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber1.jpg', class: 'h-56 lg:h-64' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber2.jpg', class: 'h-72 lg:h-80' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber3.jpg', class: 'h-56 lg:h-64' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber4.jpg', class: 'h-48 lg:h-56' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber5.jpg', class: 'h-64 lg:h-72' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber6.jpg', class: 'h-56 lg:h-64' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber7.jpg', class: 'h-72 lg:h-96' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber8.jpg', class: 'h-64 lg:h-72' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber9.jpg', class: 'h-48 lg:h-56' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber10.jpg', class: 'h-64 lg:h-80' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/rubber11.jpg', class: 'h-56 lg:h-64' }
  ];
}
