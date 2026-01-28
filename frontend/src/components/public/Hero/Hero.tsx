import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="w-full" id="hero">
        <div className="hero-wrapper">
          <div className="pill-wrapper">
            <div />
            <span>Now Available</span>
          </div>

          <div className="main-text-wrapper">
            <h1>Write less, post more.</h1>
            <p>
              LinkedIn is the place to get visible if you want to better your career. Focus on
              posting more. We will do the boring stuff for you.
            </p>
          </div>

          <div className="hero-cta-wrapper">
            <div className="hero-btn-wrapper">
              <button>Try Free</button>
              <button>Log In</button>
            </div>
            <p>🎉 Try it free for 7 days</p>
          </div>

          <div className="video-wrapper">
            <div className="video-holder">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
