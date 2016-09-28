import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { XMenModule } from './xmen/xmen.module';

// import { FilterNamePipe } from './xmen/xmen.pipe';

import { CredentialService } from './shared/credentials/index';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, HomeModule, SharedModule.forRoot(), AuthModule, XMenModule],
  declarations: [AppComponent/*, FilterNamePipe*/],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, CredentialService],
  bootstrap: [AppComponent]

})

export class AppModule { }
