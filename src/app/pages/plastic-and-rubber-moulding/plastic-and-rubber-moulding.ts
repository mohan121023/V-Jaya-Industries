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
    { src: '/image/Rubber and Plastic/Rubber and Plastic (1).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (2).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (3).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (4).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (5).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (6).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (7).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (8).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (9).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (10).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (11).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (12).webp' },
    { src: '/image/Rubber and Plastic/Rubber and Plastic (13).webp' }
  ];
}
