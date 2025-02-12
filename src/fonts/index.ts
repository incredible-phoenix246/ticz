
import { Inter, Road_Rage, Roboto, } from "next/font/google";

export const roadrage = Road_Rage({
    variable: '--font-road-rage',
    weight: ["400"],
    subsets: ['latin', "latin-ext", "vietnamese"],
})

export const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'latin', 'latin-ext', 'vietnamese'],
    weight: ['100', '300', '400', '500', '700', '900']
})

export const inter = Inter({ subsets: ["latin"], variable: '--font-inter', })