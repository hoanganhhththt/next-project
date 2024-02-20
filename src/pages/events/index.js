import { useEffect, useState } from 'react';
import AllEvents from '../../components/events/events-page';
const jsonData = require("../../../data/data.json")

const EventsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const { events_categories } = jsonData;
    setData(events_categories);
  }, [])
  return <AllEvents data={data} />;
};

export default EventsPage;
