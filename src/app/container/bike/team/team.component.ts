import { Component, Inject } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Bike } from '../bike';
import { BikeService } from '../bikeservice';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})

export class TeamComponent {
    teams: Bike[];
    constructor(private bikeservice: BikeService) {

        this.bikeservice.getBikes().subscribe((bikes: Array<Bike>) => {
            let num = 0;
            if (bikes != null) {
                this.teams =new Array<Bike>;
                for (var _i = 0; _i < bikes.length; _i++) {
                    if (bikes[_i].type == 1) {
                        this.teams[num]=bikes[_i];
                        num++;
                    }
                }
            }
        });

    }

    changeContainer(name: string) {
        console.log(name);
    }
}