import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { LoginModule } from './login/login.module';
import { CadastroModule } from './cadastro/cadastro.module';

import { CadastroService } from './cadastro/cadastro.service';
import { LoginService } from './login/login.service';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    CadastroModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CadastroService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
