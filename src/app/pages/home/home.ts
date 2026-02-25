import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }

  heroCarouselItems = [
    { title: 'Die Casting', id: '01', image: '/image/dei-casting.jpg', link: '/die-casting' },
    { title: 'Door Hardware', id: '02', image: '/image/dorrr-768x512.jpg', link: '/door-hardware' },
    { title: 'Steel Fabrication', id: '03', image: '/image/stel1-768x512.jpg', link: '/steel-fabrication' },
    { title: 'Wood & Ceramic', id: '04', image: '/image/woode-768x512.jpg', link: '/wood-and-ceramic' },
    { title: 'Plastic & Rubber Moudling', id: '05', image: '/image/rubberr-768x512.jpg', link: '/plastic-and-rubber-moulding' },
    { title: 'Automobile defence & Aviation', id: '06', image: '/image/air-768x512.jpg', link: '/automobile-defence-and-aviation' },
    { title: 'Private label Products', id: '07', image: '/image/your-brand-768x512.jpg', link: '/private-lable-packing' }
  ];

  servicesRow1 = [
    { title: 'Die casting', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/v22.png', link: '/die-casting' },
    { title: 'Door hardware', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/v11.png', link: '/door-hardware' },
    { title: 'Steel Fabrication', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/v33.png', link: '/steel-fabrication' },
    { title: 'Wood & ceramic', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/51BQtCUewsL._AC_SL1500_.jpg', link: '/wood-and-ceramic' }
  ];

  servicesRow2 = [
    { title: 'Plastic and Rubber Moudling', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/v55.png', link: '/plastic-and-rubber-moulding' },
    { title: 'Automobile defence & Aviation', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/55372_1.webp', link: '/automobile-defence-and-aviation' },
    { title: 'Product development & Private label products', image: 'https://v-jayaindustries.com/wp-content/uploads/2024/07/Picture6.png', link: '/private-lable-packing' }
  ];
}
