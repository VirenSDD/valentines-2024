interface Event {
  date: string;
  title: string;
  description: string;
}

// Example function to fetch data from your backend
async function fetchLoveDates() {
  try {
    const response = await fetch('https://valentines-2024-backend.vercel.app/api/v1/love-dates');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return null;
  }
}

const loveDatesResponse = await fetchLoveDates()
const events = loveDatesResponse.loveDates

export default events;