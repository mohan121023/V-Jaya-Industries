import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-automobile-defence-and-aviation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './automobile-defence-and-aviation.html',
  styleUrl: './automobile-defence-and-aviation.scss',
})
export class AutomobileDefenceAndAviation {
  industries = [
    { title: 'Automotive Industry', desc: 'Including two-wheelers, three-wheelers, four-wheelers, and heavy vehicles. We specialize in products such as brake pads, levers, caps, and more.' },
    { title: 'Engineering/Electrical Industry', desc: 'Providing components like lugs, caps, and brackets.' },
    { title: 'Defence Sector', desc: 'Meeting specific requirements for defense applications.' },
    { title: 'Aviation', desc: 'Offering assembly line products tailored to aviation needs.' }
  ];

  capabilities = [
    '7 PDC machines 80ton-180ton (ZINC AND ALUMINIUM)',
    'C.N.C. (Computerized Numerical Control) Wire Cut Machine. 13.V.M.C (Vertical Machining Centre) Machine.',
    'Injection moulding',
    'Metal cutting and stamping (Power Presses)',
    'Lathe, Grinding, Milling, Drilling, Taping and Lancer.',
    'Laser cutting',
    'Electrostatic Lacquer',
    'Electrostatic Spray Lacquer',
    'Ultrasonic Degreasing',
    'Polishing',
    'Electroplating and Anodizing in variety of finishes',
    'Powder Coating and Galvanizing'
  ];

  masonryImages = [
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/auto1.jpg', class: 'h-48 md:h-56' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/auto2.jpg', class: 'h-64' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/auto3.jpg', class: 'h-56' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/auto4.jpg', class: 'h-48' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/auto5.jpg', class: 'h-72' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/auto7.jpg', class: 'h-56 md:h-64' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/auto8.jpg', class: 'h-64' },
    { src: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/auto6.jpg', class: 'h-48 md:h-56' }
  ];
}
