import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { LangService } from 'src/app/services/lang.service';
import { TranslatePipeModule } from 'src/app/pipes/translate.pipe.module';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslatePipeModule
  ], 
  providers: [
    LangService
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }