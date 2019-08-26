import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { browser } from 'protractor';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(private iab: InAppBrowser) { }

fbSMO() {
  const browser = this.iab.create('https://www.facebook.com/socmexofta/', '_system');
}
revistaSMO() {
  const browser = this.iab.create('http://www.rmo.com.mx/', '_system');
}

articulosSMO() {
  const browser = this.iab.create('https://www.smo.org.mx/solicitud_articulos.php', '_system');
}

transmision() {
  const browser = this.iab.create('https://www.smo.org.mx/index.php', '_system');
}

}
