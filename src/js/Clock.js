
export class Clock {
   init() {
      const app = document.getElementById('app')
      app.append(this.createClock())
   }

   createClock() {
      const clock = document.createElement('div')
      clock.classList = 'clock'
      const second = this.createArrowSecond()
      const minute = this.createArrowMinute()
      const hour = this.createArrowHour()
      const audio = this.createAudio()
      clock.append(second, minute, hour, audio);
      return clock;
   }

   createArrowSecond() {
      const arrow = document.createElement('div')
      arrow.classList = "clock__arrow clock__arrow--second"
      arrow.style = `transform: translate(-50%, -50%) rotate(${(new Date).getSeconds() * 6}deg);`
      setInterval(() => {
         arrow.style = `transform: translate(-50%, -50%) rotate(${(new Date).getSeconds() * 6}deg);`
      }, 1000);
      return arrow;

   }

   createArrowMinute() {
      const arrow = document.createElement('div')
      arrow.classList = "clock__arrow clock__arrow--minute"
      arrow.style = `transform: translate(-50%, -50%) rotate(${(new Date).getMinutes() * 6}deg);`
      setInterval(() => {
         arrow.style = `transform: translate(-50%, -50%) rotate(${(new Date).getMinutes() * 6}deg);`
      }, 1000);
      return arrow;
   }

   createArrowHour() {
      const arrow = document.createElement('div')
      arrow.classList = "clock__arrow clock__arrow--hour"
      arrow.style = `transform: translate(-50%, -50%) rotate(${(new Date).getHours() * 6 * 5}deg);`
      setInterval(() => {
         arrow.style = `transform: translate(-50%, -50%) rotate(${(new Date).getHours() * 6 * 5}deg);`
      }, 1000);
      return arrow;
   }

   createAudio() {
      const figure = document.createElement('figure')
      figure.style = `opacity:0; position:absolute; left:-100%;`
      const audio = document.createElement('audio')
      figure.append(audio)
      audio.classList = 'clock__audio audio'
      audio.setAttribute('controls', '')
      audio.src = "/src/audio/clock.mp3"
      audio.setAttribute('autoplay', 'true')
      audio.setAttribute('muted', 'muted')
      audio.loop = true
      return figure;
   }

}
