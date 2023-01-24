import {
  Component,
  VERSION,
  OnInit,
  LOCALE_ID,
  DEFAULT_CURRENCY_CODE,
} from '@angular/core';

import { DatePipe, registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-PE';
registerLocaleData(localeEsAr);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' },
    DatePipe,
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'PE' },
  ],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  fecha_ahora: any;
  precios = [0, 5, 10, 28.5, 100.5, 200, 1050.1, 10000, 1000000];

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.mydata();
  }

  mydata() {
    this.fecha_ahora = new Date();

    let fecha_title = this.datePipe.transform(this.fecha_ahora, 'MMMM');

    console.log(fecha_title);
  }
}
