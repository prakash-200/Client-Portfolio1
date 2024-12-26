
import React from "react";
import HTMLFlipBook from "react-pageflip";
import ProjectComponent from './ProjectComponent'

function PageFlipComponent() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <HTMLFlipBook
        width={window.innerWidth} // Fullscreen width
        height={window.innerHeight} // Fullscreen height
        size="fixed" // Maintains fixed dimensions
        usePortrait={true} // Enables single-page view
        showCover={false} // Disables cover mode for consistency
        drawShadow={true} // Removes shadow
        flippingTime={700} // Reduces animation time for quicker flips
        useMouseEvents={true} // Enables mouse drag for navigation
        swipeDistance={30} // Reduces the drag distance required to flip pages
        onMouseMove={() => {}} // Ensures smooth drag for both directions
      >
        <div style={styles.page} className="demoPage">
          <ProjectComponent />
        </div>
        <div style={styles.page} className="demoPage">Page 2</div>
        <div style={styles.page} className="demoPage">Page 3</div>
        <div style={styles.page} className="demoPage">Page 4</div>
      </HTMLFlipBook>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: "#fff",
    width: "100%", // Ensures page fills container width
    height: "100%", // Ensures page fills container height
  },
};

export default PageFlipComponent;


