import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators'

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

        if (count === 1) {
          observer.complete();
        }

        if (count > 2) {
          observer.error(new Error('Greater than 2'));
        }

        count++;
      }, 1000)
    });

    this.firstSubs = customCountObservable.pipe(filter(data => {
      return data > 0;
    }), map((data: number) => {
      return 'Round ' + (data + 1);
    })).subscribe(obs => {
      console.log(obs);
    }, error => {
      console.log(error);
      alert(error);
    }, () => {
      console.log('Completed');
    });
  }

  ngOnDestroy() {
    this.firstSubs.unsubscribe();
  }
}
