export default defineEventHandler((event) => {
  const date = new Date();
  const currentMinutes = date.getMinutes().toString().split("").pop();
  const currentSeconds = date.getSeconds();
  const currentMilliseconds = date.getMilliseconds();

  return {
    minutes: (currentMinutes >= 5 ? 10 : 5) - currentMinutes - 1,
    seconds: 60 - (currentSeconds ? currentSeconds : 1),
    milliseconds: 1000 - currentMilliseconds ? currentMilliseconds : 1,
  };
});
