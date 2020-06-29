const oneDayInSeconds = 24 * 3600 * 1000;

const addOneDayToActualDate = () => new Date(+new Date() + oneDayInSeconds);

console.log(addOneDayToActualDate());
