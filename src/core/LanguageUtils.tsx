import {Quote} from "../data/model/Quote";
import * as clm from "country-locale-map";

export class LanguageUtils {

    private static countries = [
        "Brazil",
        "United States",
        "Italy",
        "Canada",
        "France",
        "Spain"
    ]

    static getOptions = (quote: Quote): string[] => {
        const codes = new Set(quote.messages.map(quote => {
            return quote.code
        }))
        const locales = LanguageUtils.getLocales()

        return locales.filter((local) => {
            return !codes.has(local)
        })
    }

    private static getLocales(): string[] {
        const locales: string[] = this.countries.map((country) => {
            return clm.getCountryByName(country).default_locale
        })
        return locales.map((local) => {
            return local.replace('_', '-')
        })
    }
}
