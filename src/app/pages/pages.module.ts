import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {GraficasComponent} from './graficas/graficas.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {PAGES_ROUTES} from './pages.routes';
import {FormsModule} from '@angular/forms';
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import {ChartsModule} from 'ng2-charts';
import {GraficaDonaComponent} from '../components/grafica-dona/grafica-dona.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    IncrementadorComponent,
    GraficaDonaComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficasComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule {
}
