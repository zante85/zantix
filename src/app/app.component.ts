import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  ngOnInit() {
    /*$('#homeScroll').click(function () {
      $('#home').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });*/

  }

  scrollToElement(nomeElemento): void {
    const element = document.querySelector(nomeElemento)
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
