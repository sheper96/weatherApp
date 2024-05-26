export function formatDate(dateData) {

  const date = new Date(dateData);
  const today = new Date

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  };

  if (date.toLocaleDateString('en-US', options) == today.toLocaleDateString('en-US', options)) {
    return `Today    ${date.toLocaleDateString('en-US', options)}`
  }
  return date.toLocaleDateString('en-US', options);
}

