import {Component, VERSION} from '@angular/core';
import { Constants } from '../config/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  get copyright() { return Constants.COPYRIGHT; }
  get contact() { return Constants.CONTACT};
  get version() { return VERSION.full }
}
