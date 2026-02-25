import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { DieCasting } from './pages/die-casting/die-casting';
import { DoorHardwareParts } from './pages/door-hardware-parts/door-hardware-parts';
import { SteelFabrication } from './pages/steel-fabrication/steel-fabrication';
import { WoodAndCeramic } from './pages/wood-and-ceramic/wood-and-ceramic';
import { PlasticAndRubberMoulding } from './pages/plastic-and-rubber-moulding/plastic-and-rubber-moulding';
import { AutomobileDefenceAndAviation } from './pages/automobile-defence-and-aviation/automobile-defence-and-aviation';
import { PrivateLablePacking } from './pages/private-lable-packing/private-lable-packing';
import { FactoryView } from './pages/factory-view/factory-view';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'die-casting', component: DieCasting },
    { path: 'door-hardware', component: DoorHardwareParts },
    { path: 'steel-fabrication', component: SteelFabrication },
    { path: 'wood-and-ceramic', component: WoodAndCeramic },
    { path: 'plastic-and-rubber-moulding', component: PlasticAndRubberMoulding },
    { path: 'automobile-defence-and-aviation', component: AutomobileDefenceAndAviation },
    { path: 'private-lable-packing', component: PrivateLablePacking },
    { path: 'factory-view', component: FactoryView },
    { path: 'contact', component: Contact }
];
