import {Component, VERSION} from '@angular/core';
import { Constants } from '../config/constants';
import { version } from '../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  get copyright() { return Constants.COPYRIGHT; }
  get contact() { return Constants.CONTACT};
  get version() { return version }
}
