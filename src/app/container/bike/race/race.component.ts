import { Component, Inject, ViewChild } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Bike } from '../bike';
import { BikeService } from '../bikeservice';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular5-data-table';
import { Eventbike } from '../eventbike';

@Component({
    selector: 'app-race',
    templateUrl: './race.component.html',
    styleUrls: ['./race.component.css']
})

export class RaceComponent {
    races: Bike[];
    listRaces: Eventbike[];
    bikeResource = new DataTableResource(this.listRaces);
    racesCount = 0;

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
      };
    @ViewChild(DataTable) racesTable: DataTable;

    constructor(private bikeservice: BikeService) {

        this.bikeservice.getBikes().subscribe((bikes: Array<Bike>) => {
            let num = 0;
            if (bikes != null) {
                this.races =new Array<Bike>();
                for (var _i = 0; _i < bikes.length; _i++) {
                    if (bikes[_i].type == 2) {
                        this.races[num]=bikes[_i];
                        console.log(bikes[_i]);
                        this.listRaces=bikes[_i].elements;
                        this.bikeResource = new DataTableResource(this.listRaces);
                        num++;
                        this.racesCount++;
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

    reloadRaces(params) {
        console.log(this.listRaces);
        this.bikeResource.query(params).then(listRaces => this.listRaces = listRaces);
       // this.filmResource.query(params).then(films => this.films = films);
    }
}