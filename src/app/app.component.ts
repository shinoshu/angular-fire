import { Component } from '@angular/core';

import { AngularFireRemoteConfig } from '@angular/fire/remote-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(remoteConfig: AngularFireRemoteConfig) {
    remoteConfig.parameters.subscribe(parameters => console.log(parameters));
  }
}
