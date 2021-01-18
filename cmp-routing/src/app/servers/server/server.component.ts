import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {
    id: number,
    name: string,
    status: string
  };

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    console.log('ID : ' + id);


    this.route.params.subscribe(
      (params: Params) => {
        id = +params['id'];

      }
    );
    console.log('ID : ' + id)
    this.server = this.serversService.getServer(id);
  }

}
