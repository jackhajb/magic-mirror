import { icons } from '../assets/icons/weather/black/svg/index'

const {
  chanceFlurries,
  chanceRain,
  chanceSleet,
  chanceSnow,
  chanceTstorms,
  clear,
  cloudy,
  flurries,
  fog,
  hazy,
  mostlyCloudy,
  mostlySunny,
  partlyCloudy,
  partlySunny,
  rain,
  sleet,
  snow,
  sunny,
  tstorms,
  unknown,
  ntChanceFlurries,
  ntChanceRain,
  ntChanceSleet,
  ntChanceSnow,
  ntChanceTstorms,
  ntClear,
  ntCloudy,
  ntFlurries,
  ntFog,
  ntHazy,
  ntMostlyCloudy,
  ntMostlySunny,
  ntPartlyCloudy,
  ntPartlySunny,
  ntRain,
  ntSleet,
  ntSnow,
  ntSunny,
  ntTstorms,
  ntUnknown,
} = icons;

export const weatherConditions = {
  200: { 
    type: 'Thunderstorm',
    description: 'thunderstorm with light rain',
    icon: [chanceTstorms, ntChanceTstorms],
  },
  201: {
    type: 'Thunderstorm',
    description: 'thunderstorm with rain',
    icon: [tstorms, ntTstorms],
  },
  202: {
    type: 'Thunderstorm',
    description: 'thunderstorm with heavy rain',
    icon: [tstorms, ntTstorms],
  },
  210: {
    type: 'Thunderstorm',
    description:
    'light thunderstorm',
    icon: [chanceTstorms, ntChanceTstorms],
  },
  211: {
    type: 'Thunderstorm',
    description: 'thunderstorm',
    icon: [tstorms, ntTstorms],
  },
  212: {
    type: 'Thunderstorm',
    description: 'heavy thunderstorm',
    icon: [tstorms, ntTstorms],
  },
  221: {
    type: 'Thunderstorm',
    description: 'ragged thunderstorm',
    icon: [tstorms, ntTstorms], 
  },
  230: {
    type: 'Thunderstorm',
    description: 'thunderstorm with light drizzle',
    icon: [chanceTstorms, ntChanceTstorms],
  },
  231: {
    type: 'Thunderstorm',
    description: 'thunderstorm with drizzle',
    icon: [tstorms, ntTstorms],
  },
  232: {
    type:'Thunderstorm',
    description: 'thunderstorm with heavy drizzle',
    icon: [tstorms, ntTstorms],
  },
  300: {
    type:'Drizzle',
    description: 'light intensity drizzle',
    icon: [chanceRain, ntChanceRain],
  },
  301: {
    type:'Drizzle',
    description: 'drizzle',
    icon: [chanceRain, ntChanceRain],
  },
  302: {
    type:'Drizzle',
    description: 'heavy intensity drizzle',
    icon: [chanceRain, ntChanceRain],
  },
  310: {
    type:'Drizzle',
    description: 'light intensity drizzle rain',
    icon: [chanceRain, ntChanceRain],
  },
  311: {
    type:'Drizzle',
    description: 'drizzle rain',
    icon: [chanceRain, ntChanceRain],
  },
  312: {
    type:'Drizzle',
    description: 'heavy intensity drizzle rain',
    icon: [chanceRain, ntChanceRain],
  },
  313: {
    type:'Drizzle',
    description: 'shower rain and drizzle',
    icon: [chanceRain, ntChanceRain],
  },
  314: {
    type:'Drizzle',
    description: 'heavy shower rain and drizzle',
    icon: [chanceRain, ntChanceRain],
  },
  321: {
    type:'Drizzle',
    description: 'shower drizzle',
    icon: [chanceRain, ntChanceRain],
  },
  500: {
    type:'Rain',
    description: 'light rain',
    icon: [rain, ntRain],
  },
  501: {
    type:'Rain',
    description: 'moderate rain',
    icon: [rain, ntRain],
  },
  502: {
    type:'Rain',
    description: 'heavy intensity rain',
    icon: [rain, ntRain],
  },
  503: {
    type:'Rain',
    description: 'very heavy rain',
    icon: [rain, ntRain],
  },
  504: {
    type:'Rain',
    description: 'extreme rain',
    icon: [rain, ntRain],
  },
  511: {
    type:'Rain',
    description: 'freezing rain',
    icon: [sleet, ntSleet],
  },
  520: {
    type:'Rain',
    description: 'light intensity shower rain',
    icon: [rain, ntRain],
  },
  521: {
    type:'Rain',
    description: 'shower rain',
    icon: [rain, ntRain],
  },
  522: {
    type:'Rain',
    description: 'heavy intensity shower rain',
    icon: [rain, ntRain],
  },
  531: {
    type:'Rain',
    description: 'ragged shower rain',
    icon: [rain, ntRain],
  },
  600: {
    type:'Snow',
    description: 'light snow',
    icon: [chanceFlurries, ntChanceFlurries],
  },
  601: {
    type:'Snow',
    description: 'Snow',
    icon: [snow, ntSnow],
  },
  602: {
    type:'Snow',
    description: 'Heavy snow',
    icon: [snow, ntSnow],
  },
  611: {
    type:'Snow',
    description: 'Sleet',
    icon: [sleet, ntSleet],
  },
  612: {
    type:'Snow',
    description: 'Light shower sleet',
    icon: [sleet, ntSleet],
  },
  613: {
    type:'Snow',
    description: 'Shower sleet',
    icon: [sleet, ntSleet],
  },
  615: {
    type:'Snow',
    description: 'Light rain and snow',
    icon: [chanceSnow, ntChanceSnow],
  },
  616: {
    type:'Snow',
    description: 'Rain and snow',
    icon: [chanceSnow, ntChanceSnow],
  },
  620: {
    type:'Snow',
    description: 'Light shower snow',
    icon: [chanceSnow, ntChanceSnow],
  },
  621: {
    type:'Snow',
    description: 'Shower snow',
    icon: [snow, ntSnow],
  },
  622: {
    type:'Snow',
    description: 'Heavy shower snow',
    icon: [snow, ntSnow],
  },
  701: {
    type:'Mist',
    description: 'mist',
    icon: [fog, ntFog],
  },
  711: {
    type:'Smoke',
    description: 'Smoke',
    icon: [hazy, ntHazy],
  },
  721: {
    type:'Haze',
    description: 'Haze',
    icon: [hazy, ntHazy],
  },
  731: {
    type:'Dust',
    description: 'sand/ dust whirls',
    icon: [hazy, ntHazy],
  },
  741: {
    type:'Fog',
    description: 'fog',
    icon: [fog, ntFog]
  },
  751: {
    type:'Sand',
    description: 'sand',
    icon: [hazy, ntHazy],
  },
  761: {
    type:'Dust',
    description: 'dust',
    icon: [hazy, ntHazy],
  },
  762: {
    type:'Ash',
    description: 'volcanic ash',
    icon: [hazy, ntHazy],
  },
  771: {
    type:'Squall',
    description: 'squalls',
    icon: [snow, ntSnow],
  },
  781: {
    type:'Tornado',
    description: 'tornado',
    icon: [hazy, ntHazy],
  },
  800: {
    type:'Clear',
    description: 'clear sky',
    icon: [clear, ntClear]
  },
  801: {
    type:'Clouds',
    description: 'few clouds: 11-25%',
    icon: [mostlySunny, ntMostlySunny],
  },
  802: {
    type:'Clouds',
    description: 'scattered clouds: 25-50%',
    icon: [partlySunny, ntPartlySunny],
  },
  803: {
    type:'Clouds',
    description: 'broken clouds: 51-84%',
    icon: [mostlyCloudy, ntMostlyCloudy],
  },
  804: {
    type:'Clouds',
    description: 'overcast clouds: 85-100%',
    icon: [cloudy, ntCloudy]
  },
  unknown: {
    type:'unknown',
    description: 'unknown',
    icon: [unknown, ntUnknown],
  }
}
