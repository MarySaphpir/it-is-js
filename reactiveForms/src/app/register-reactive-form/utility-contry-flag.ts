import { CountryFlag } from 'src/app/register-reactive-form/countryFlag-model';

export class CountriesFlag {
    countriesAndFlag: CountryFlag[] = [
        { title: 'Ukraine', src: '/assets/ua-flag.png' },
        { title: 'Croatia', src: '/assets/croatia-flag.png' },
        { title: 'Egypt', src: '/assets/egypt-flag.png' },
        { title: 'Hungary', src: '/assets/hungary-flag.png' },
        { title: 'Spain', src: '/assets/spain-flag.png' },
    ];

    getCountry() {
        return this.countriesAndFlag;
    }
}
