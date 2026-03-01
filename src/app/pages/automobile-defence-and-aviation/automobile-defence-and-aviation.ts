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
    { src: '/image/Automobile Defence and Aviation/Automobile Defence and Aviation (1).webp' },
    { src: '/image/Automobile Defence and Aviation/Automobile Defence and Aviation (2).webp' },
    { src: '/image/Automobile Defence and Aviation/Automobile Defence and Aviation (3).webp' },
    { src: '/image/Automobile Defence and Aviation/Automobile Defence and Aviation (4).jpg' },
    { src: '/image/Automobile Defence and Aviation/Automobile Defence and Aviation (5).jpg' },
    { src: '/image/Automobile Defence and Aviation/Automobile Defence and Aviation (6).jpg' },
    { src: '/image/Automobile Defence and Aviation/Automobile Defence and Aviation (7).jpg' }
  ];
}
