import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  firstSubs: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstSubs = interval(1000).subscribe(
    //   (count) => {
    //     console.log(count);
    //   }
    // );
    const customCountObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000)
    });

    this.firstSubs = customCountObservable.subscribe(obs => {
      console.log(obs);
    });
  }

  ngOnDestroy() {
    this.firstSubs.unsubscribe();
  }
}
