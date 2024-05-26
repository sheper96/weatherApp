export function formatDate(dateData) {
  
    const date = new Date(dateData);
    const testDate = new Date("2027-05-25")
    console.log(dateData + "формат  ")
    const today = new Date
    const yesterday = new Date; 
    yesterday.setDate(today.getDate() - 1)
    
    
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    };

    if(date.toLocaleDateString('en-US', options) == today.toLocaleDateString('en-US', options)){
      return `Today    ${date.toLocaleDateString('en-US', options)}`
    }
  // // else if (date.toLocaleDateString() == yesterday.toLocaleDateString()) {
  //   return 'Yesterday'
  // }
    // else 
    return date.toLocaleDateString('en-US', options);
   

}