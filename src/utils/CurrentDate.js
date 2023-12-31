export function getCurrentDate() {
    const currentDate = new Date();
  
    // Get day, month, and year
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = currentDate.getFullYear();
    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    // Format the date as a string
    const formattedDate = `${dayOfWeek < 10 ? '0' : ''}${dayOfWeek}-${month < 10 ? '0' : ''}${month}-${year}`;
  
    return [
    //   day,
    //   month,
    //   year,
      formattedDate,
    ]
  }
  
  // Example usage
//   const currentDateInfo = getCurrentDate();
//   console.log('Day:', currentDateInfo.day);
//   console.log('Month:', currentDateInfo.month);
//   console.log('Year:', currentDateInfo.year);
//   console.log('Formatted Date:', currentDateInfo.formattedDate);
  