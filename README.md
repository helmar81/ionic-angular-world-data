# Ionic Country Data

App that displays details about countries using data from the [Rest Countries](https://restcountries.eu/), using the [Ionic 5 framework](https://ionicframework.com/docs).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* The [Rest Countries API](https://restcountries.eu/) has a lot more detailed functionality available:

## Screenshots

![Ionic page](./img/list.png)

## Technologies

* [Ionic v5.0.0](https://ionicframework.com/)

* [Angular v7.2.2](https://angular.io/)

* [Ionic/angular v4.1.0](https://www.npmjs.com/package/@ionic/angular)

* [Rest Countries API](https://restcountries.eu/)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* tba.

```typescript
tba
```

## Features

* Displays list of countries with country flag, title, capital and region.

* (future) search bar to search for country from list.

* (future) clicking on the More Info button will route to a detailed info page.

* (future) clicking on the Map button will route to a (Google) Map view of the country.

* (future) clicking on Analysis will route to World Bank statistics - 2nd API.

## Status & To-do list

* Status: Working Country List page. Ion segment used to allow user to select country_list by continent. Routes to detail page but data binding not working due to api get error.

* To-do: Change ion-segment to ion-select-option or top bar menu sliding columns. Add search, fix detail page. Add filter to filter countries by select option chosen (ie Africa, Europe etc). Add to categories page/add extra pages with rankings data from World Bank etc. Add contact info to about page. Add scss color themes.

## Inspiration

* none

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!