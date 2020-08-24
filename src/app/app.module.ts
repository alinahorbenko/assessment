import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { ChatModule } from './core/chat/chat.module';
import { TranslatePipeModule } from './pipes/translate.pipe.module';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    TranslatePipeModule
  ],
  providers: [
    AuthService,
    TranslatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
