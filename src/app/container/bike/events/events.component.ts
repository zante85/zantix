import { Component, Inject, ViewChild } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Bike } from '../bike';
import { BikeService } from '../bikeservice';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular5-data-table';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})



export class EventsComponent {
    bikeevents: Bike[];
    eventsCount = 0;

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
      };
    @ViewChild(DataTable) eventsTable: DataTable;

    constructor(private bikeservice: BikeService) {

        this.bikeservice.getBikes().subscribe((bikes: Array<Bike>) => {
            let num = 0;
            if (bikes != null) {
                this.bikeevents =new Array<Bike>();
                for (var _i = 0; _i < bikes.length; _i++) {
                    if (bikes[_i].type == 3) {
                        this.bikeevents[num]=bikes[_i];
                        num++;
                        this.eventsCount++;
                    }
                }
            }
        });

    }

    /*cellColor(car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    };*/

    changeContainer(name: string) {
        console.log(name);
    }

    /*reloadEvents(params) {
        this.filmResource.query(params).then(films => this.films = films);
    }*/
}