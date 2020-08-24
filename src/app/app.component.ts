import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription, from } from 'rxjs';
import { flatMap, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}