import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    private serverStatus: string = 'online';

    getServerStatus() {
        return this.serverStatus;
    }
}