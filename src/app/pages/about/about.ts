import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './about.html',
    styleUrl: './about.scss',
})
export class About {
    howWeWorkSteps = [
        { title: 'Step 1', desc: 'We Process your samples or drawings give you best prices in the market.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { title: 'Step 2', desc: 'Once the order is placed our engineers work in it’s devlopment and ship samples for approval.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
        { title: 'Step 3', desc: 'Once samples are approved we move forward with the mass production.', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
        { title: 'Step 4', desc: 'Inspection on regular intervals is done as per our 5 step QC system', icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514' },
        { title: 'Step 5', desc: 'Once the order is ready we send Pre-dispatch Inspection report for approval.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
        { title: 'Step 6', desc: 'After PIDR approval we ship the products via air or ocean as per customer needs.', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' }
    ];

    whyChooseUs = [
        { title: 'Comprehensive Solutions', desc: 'At V-JAYA, find everything from manufacturing to packaging under one roof.' },
        { title: 'Optimal Vendor Experience', desc: 'We ensure a seamless journey from order placement to shipment, prioritizing your satisfaction.' },
        { title: 'Increased Profitability', desc: 'V-JAYA offers competitive pricing, enhancing your margins and profitability.' },
        { title: 'Commitment to Delivery', desc: 'With a proven track record spanning over 30 years, V-JAYA ensures punctual delivery of goods.' },
        { title: 'Exceptional Quality', desc: 'All V-JAYA products pass through our rigorous 5-point quality assurance system, guaranteeing superior quality.' }
    ];

    factoryImages = [
        '/image/about/factory-view (1).jpg',
        '/image/about/factory-view (2).jpg',
        '/image/about/factory-view (3).png',
        '/image/about/factory-view (4).png',
        '/image/about/factory-view (5).png',
        '/image/about/factory-view (6).png',
        '/image/about/factory-view (7).png',
        '/image/about/factory-view (8).png',
        '/image/about/factory-view (9).png',
        '/image/about/factory-view (10).png',
        '/image/about/factory-view (11).png',
        '/image/about/factory-view (1).png'
    ];
}
