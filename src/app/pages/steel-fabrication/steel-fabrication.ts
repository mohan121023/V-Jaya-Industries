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
    { title: 'Hot-Dip Galvanizing', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/stel1-768x512.jpg' },
    { title: 'Powder Coating', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/powder.jpg' },
    { title: 'Electroplating', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/electro.jpg' },
    { title: 'Zinc Plating', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/zinc.jpg' }
  ];

  popularProducts = [
    { title: 'Clamps', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/clamp.jpg' },
    { title: 'Hinges', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/hinge.jpg' },
    { title: 'Brackets', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/bracket.jpg' },
    { title: 'Connectors', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/connector.jpg' }
  ];
}
