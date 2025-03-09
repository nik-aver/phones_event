export const useTimeStore = defineStore("timeStore", () => {
  const timer = ref({
    milliseconds: null,
    minutes: null,
    seconds: null,
  });

  const initTimer = ref({
    milliseconds: null,
    minutes: null,
    seconds: null,
  });

  const setTimer = () => {
    if (typeof window !== "undefined") {
      return;
    }

    const date = new Date();
    const currentMinutes = date.getMinutes().toString().split("").pop();

    setMilliseconds(1000 - date.getMilliseconds());
    setSeconds(60 - date.getSeconds());
    setMinutes((currentMinutes >= 5 ? 10 : 5) - currentMinutes - 1);

    initTimer.value.seconds = timer.value.seconds;
    initTimer.value.minutes = timer.value.minutes;
    initTimer.value.milliseconds = timer.value.milliseconds;
  };

  const setMinutes = (minutes) => {
    timer.value.minutes = minutes;
  };

  const setSeconds = (seconds) => {
    timer.value.seconds = seconds;
  };

  const setMilliseconds = (milliseconds) => {
    timer.value.milliseconds = milliseconds;
  };

  return {
    initTimer,
    setMilliseconds,
    setMinutes,
    setSeconds,
    setTimer,
    timer,
  };
});
