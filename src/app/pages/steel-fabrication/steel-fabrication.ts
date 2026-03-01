import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-steel-fabrication',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './steel-fabrication.html',
  styleUrl: './steel-fabrication.scss',
})
export class SteelFabrication {
  surfaceTreatments = [
    { title: 'Hot-Dip Galvanizing', image: '/image/Hot-Dip-Galvanizing-1.jpg' },
    { title: 'Powder Coating', image: '/image/powder-coating.jpg' },
    { title: 'Electroplating', image: '/image/electroplating.webp' },
    { title: 'Zinc Plating', image: '/image/zinc.jpg' }
  ];

  popularProducts = [
    { title: 'Clamps', image: '/image/Clamps.jpg' },
    { title: 'Hinges', image: '/image/Hinges-1.jpg' },
    { title: 'Brackets', image: '/image/Brackets.jpg' },
    { title: 'Connectors', image: '/image/Connectors.jpg' }
  ];
}
