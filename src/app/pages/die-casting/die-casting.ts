import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-die-casting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './die-casting.html',
  styleUrl: './die-casting.scss',
})
export class DieCasting {

  bestProducts = [
    '/image/dia-casting/Picture1.png',
    '/image/dia-casting/Picture2.png',
    '/image/dia-casting/Picture3.png',
    '/image/dia-casting/Picture4.png'
  ];

  metalsWeCast = [
    { title: 'ZINC ZAMAK', image: '/image/dia-casting/zinccc.jpg' },
    { title: 'ALUMINIUM', image: '/image/dia-casting/aluminium.jpg' },
    { title: 'STEEL CAST IRON', image: '/image/dia-casting/STEEL-CAST-IRON.jpg' },
    { title: 'BRONZE', image: '/image/dia-casting/BRONZE.jpg' },
    { title: 'BRASS', image: '/image/dia-casting/brass.jpg' }
  ];

  methodsWeUse = [
    { title: 'High pressure die cast', image: '/image/dia-casting/Picture8.png' },
    { title: 'Gravity die casting', image: '/image/dia-casting/1.jpg' },
    { title: 'Sand die casting', image: '/image/dia-casting/252.jpg' }
  ];

  equipments = [
    '7 PDC machines 80ton-180tonn (ZINC AND ALUMINIUM)',
    '(Computerized Numerical Control) C.N.C. Wire Cut Machine.',
    '13.V.M.C (Vertical Machining Centre) Machine.',
    'Letal cutting and stamping (Power Presses)',
    'Lathe, Grinding, Milling, Drilling, Taping and Lancer.'
  ];

  software = [
    { title: 'AutoCAD', image: '/image/dia-casting/solidworks-copy.jpg' },
    { title: 'SolidWORKS', image: '/image/dia-casting/solidworks.jpg' }
  ];

  surfaceTreatments = [
    { title: 'Sand Blasting', image: '/image/dia-casting/sand-blasting.jpg' },
    { title: 'Anodizing', image: '/image/dia-casting/sand-blasting-copy.jpg' },
    { title: 'Powder Coating', image: '/image/dia-casting/powder-coating.jpg' },
    { title: 'Electroplating', image: '/image/dia-casting/electroplating.webp' },
    { title: 'Zinc Plating Vibro Finishing', image: '/image/dia-casting/zincccc.jpg' }
  ];
}
