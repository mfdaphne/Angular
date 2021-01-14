import { Injectable } from "@angular/core";
import { CounterService } from "./counter-service.service";

@Injectable()
export class UsersService{
    
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
  
    constructor(private counterServie : CounterService){
    }

    setInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      console.log(this.counterServie.countInactive++);
    }
  
    setActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      console.log(this.counterServie.countActive++);
    }
  
}