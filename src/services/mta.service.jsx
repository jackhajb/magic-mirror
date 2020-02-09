import { Mta } from '../utils/mta-util';

const APP_ID = process.env.MTA_API_KEY;

console.log(APP_ID)

export class MTA {
  churchBQTimes () {
    const mta = new Mta({
      key: '2b8057801e6ded30243c384861eda0d9',
      feed_id: 1,
    })

    return (async () => {
        try {
          const stop = await mta.stop('D28')
          const schedule = await mta.schedule(['635'])
          console.log(stop)
          console.log(schedule.schedule[635])
          mta.subwayStatus().then(function (result) {
            console.log(result)
            console.log('test')
          });
          return stop
        }
        catch(err) {
          console.log(err)
        }
    })()
  }
}

