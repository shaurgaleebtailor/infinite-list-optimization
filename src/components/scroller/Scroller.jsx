import { useState, useEffect } from 'react';
import Visualler from '../visualler/Visualler.jsx';
const Scroller = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    // Fetch data for the current page when pageNo changes
    fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=4`)
      .then((res) => res.json())
      .then((data) => setData((prevData) => [...prevData, ...data]));
  }, [pageNo]);
  return (
    <>
      <Visualler data={data} setPager={setPageNo} />
    </>
  );
};
export default Scroller;
