import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

	appPages = [
		{
			title: 'Countries',
			url: '/app/tabs/country-list',
			icon: 'list-box'
		},
		{
			title: 'Categories',
			url: '/app/tabs/categories',
			icon: 'options'
		},
		{
			title: 'Favourites',
			url: '/app/tabs/favourites',
			icon: 'heart'
		},
		{
			title: 'About',
			url: '/app/tabs/about',
			icon: 'information-circle'
		}
	];

	constructor(
		private platform: Platform,
		private router: Router,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}


	ngOnInit() {
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}