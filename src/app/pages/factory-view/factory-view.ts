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
    { title: 'Custom Product manufacturing & Contact Manufacturing', image: '/image/factory_view (1).webp', link: 'tel:917017024037' },
    { title: 'Mould/Tool making', image: '/image/factory_view (2).jpg', link: 'tel:917017024037' },
    { title: 'Electroplating,Powder coating Galvanizing', image: '/image/factory_view (2).webp', link: 'tel:917017024037' },
    { title: 'Aluminium, Zamak,Brass & cast Iron, Die casting', image: '/image/factory_view (3).jpg', link: 'tel:917017024037' },
    { title: 'Injection moulding', image: '/image/factory_view (1).jpeg', link: 'tel:917017024037' },
    { title: 'Sheet metal Fabrication', image: '/image/factory_view (1).jpg', link: 'tel:917017024037' }
  ];
}
