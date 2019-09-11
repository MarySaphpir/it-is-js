export class CountriesFlag {

    countriesAndFlag: object[] = [
        { title: 'Ukraine', src: '/assets/ua-flag.png' },
        { title: 'Croatia', scr: '/assets/croatia-flag.png' },
        { title: 'Egypt', src: '/assets/egypt-flag.png' },
        { title: 'Hungary', src: '/assets/hungary-flag.png' },
        { title: 'Spain', src: '/assets/spain-flag.png' },
    ];

    getCountry(): object[] {
        return this.countriesAndFlag;
    }
}
