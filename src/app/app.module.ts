import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

/* Modulos */

/* Componentes */
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBrazil } from 'ng-brazil';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localeBr, 'pt');

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,

        NgbModule,
        NgBrazil,
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: LOCALE_ID, useValue: 'pt' },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
