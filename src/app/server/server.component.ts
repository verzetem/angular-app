import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})

export class ServerComponent {
	// for stringer interpolation
	// example: {{ 'Server' }} or {{ serverID }} or {{ serverStatus }}
	// or {{ getServerStatus() }}
	// IMPORTANT: String interpolation only works
	// while using something that can be converted
	// to a string (i.e. number, string, function 
	// that returns a string/number like getServerStatus())
	serverID: number = 10;
	serverStatus: string  = 'Offline';

	getServerStatus() {
		return this.serverStatus;
	}
} 