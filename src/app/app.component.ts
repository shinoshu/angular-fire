import { Component } from '@angular/core';

import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { AngularFirePerformance } from '@angular/fire/performance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private remoteConfig: AngularFireRemoteConfig,
    private afp: AngularFirePerformance,
  ) {
    this.remoteConfig.parameters
      .pipe(this.afp.trace('parameters'))
      .subscribe(parameters => console.log(parameters));
  }
}
