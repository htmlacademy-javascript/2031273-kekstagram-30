// Функция Делу - Время

function isMeetingWithinWorkingDay(startTime, endTime, meetingStart, meetingDuration) {
  const workingDayStart = convertTimeStringToMinutes(startTime);
  const workingDayEnd = convertTimeStringToMinutes(endTime);

  const meetingStartTime = convertTimeStringToMinutes(meetingStart);
  const meetingEndTime = meetingStartTime + meetingDuration;

  return (meetingStartTime >= workingDayStart && meetingEndTime <= workingDayEnd);
}

function convertTimeStringToMinutes(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
}

/* eslint-disable no-console */
console.log(isMeetingWithinWorkingDay('08:00', '17:30', '14:00', 90));
console.log(isMeetingWithinWorkingDay('8:0', '10:0', '8:0', 120));
console.log(isMeetingWithinWorkingDay('08:00', '14:30', '14:00', 90));
console.log(isMeetingWithinWorkingDay('14:00', '17:30', '08:0', 90));
console.log(isMeetingWithinWorkingDay('8:00', '17:30', '08:00', 900));
/* eslint-enable no-console */
