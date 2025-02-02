import { useEffect } from "react";
import "./Visualler.scss";

const Visualler = ({ data, setPager }) => {
  useEffect(() => {
    // Intersection Observer to trigger loading of next page when the last image is in the view
    let obs = new IntersectionObserver(
      (itms) => {
        if (itms[0].isIntersecting) {
          obs.unobserve(lastImg); // Stop observing once triggered
          setPager((prevPageNo) => prevPageNo + 1); // Increment page number for data fetch
        }
      },
      { threshold: 0.75 } // Trigger when 75% of the image is in view
    );

    // Get all images and observe the last one
    let imgs = document.querySelectorAll(".image");
    if (imgs.length < 1) {
      return; // Exit early if no images are found
    }
    let lastImg = imgs[imgs.length - 1]; // Target the last image
    obs.observe(lastImg); // Start observing
  }, [data]);

  // Render images with dynamic data
  const renderData = data.map((itm, index) => {
    return (
      <div key={index}>
        <img className="image" src={itm.download_url} alt={`item ${itm.id}`} />
      </div>
    );
  });

  return <div id="container">{renderData}</div>;
};

export default Visualler;