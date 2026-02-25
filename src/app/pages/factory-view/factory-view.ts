import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-factory-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './factory-view.html',
  styleUrl: './factory-view.scss',
})
export class FactoryView {
  factoryCards = [
    { title: 'Custom Product manufacturing & Contact Manufacturing', image: 'https://placehold.co/600x400/e2e8f0/1e293b?font=playfair-display&text=Custom+Manufacturing', link: 'tel:917017024037' },
    { title: 'Mould/Tool making', image: 'https://placehold.co/600x400/f1f5f9/1e293b?font=playfair-display&text=Mould+Making', link: 'tel:917017024037' },
    { title: 'Electroplating,Powder coating Galvanizing', image: 'https://placehold.co/600x400/e2e8f0/1e293b?font=playfair-display&text=Electroplating', link: 'tel:917017024037' },
    { title: 'Aluminium, Zamak,Brass & cast Iron, Die casting', image: 'https://placehold.co/600x400/f8fafc/1e293b?font=playfair-display&text=Die+Casting', link: 'tel:917017024037' },
    { title: 'Injection moulding', image: 'https://placehold.co/600x400/e2e8f0/1e293b?font=playfair-display&text=Injection+Moulding', link: 'tel:917017024037' },
    { title: 'Sheet metal Fabrication', image: 'https://placehold.co/600x400/f1f5f9/1e293b?font=playfair-display&text=Sheet+Metal', link: 'tel:917017024037' }
  ];
}
