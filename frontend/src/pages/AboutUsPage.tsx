import "./AboutUsPage.css";

function AboutUsPage() {
  return (
    <section className="about-container">
      <div className="about-overlay">
        <div className="about-content">
          <div className="about-text">
            <span className="tagline">OUR STORY</span>
            <h2>Redefining Everyday Fashion</h2>
            <p>
              At <strong>Jolly House</strong>, fashion meets comfort.  
              We craft designer-quality clothing that blends modern elegance 
              with everyday wearability, so you can look effortlessly stylish 
              no matter the occasion.
            </p>
            <p>
              With timeless collections, premium fabrics, and a passion for 
              detail, Jolly House is more than just clothing — it’s your new 
              everyday style.
            </p>
            <div className="about-buttons">
              <button className="btn-primary">Explore Collection</button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsPage;


