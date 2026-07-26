import "../About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h4>Who We Are</h4>
          <h2>About Us</h2>

          <p>
            We are a creative studio based in <strong>Surat</strong>, passionate
            about turning ideas into powerful visual stories. Specializing in
            <strong> photography</strong>,
            <strong> cinematography</strong>, and
            <strong> digital marketing</strong>, we help individuals, brands,
            and businesses create a lasting impact through stunning visuals and
            strategic marketing solutions.
          </p>

          <p>
            From capturing life's most memorable moments to producing cinematic
            brand films, our team combines creativity, innovation, and
            attention to detail in every project. Whether it's weddings, fashion,
            product photography, corporate shoots, commercial advertisements, or
            social media content, we ensure every frame tells a compelling
            story.
          </p>

          <p>
            Beyond visual production, we offer result-driven marketing services
            designed to grow your brand, increase online visibility, and connect
            you with your target audience. Our goal is not just to create
            beautiful content but to help businesses achieve measurable success.
          </p>

          <p className="highlight">
            At our studio, <span>Creativity Meets Strategy.</span>
          </p>
        </div>

        <div className="about-cards">
          <div className="card">
            <h3>📸 Photography</h3>
            <p>
              Weddings, Fashion, Product, Corporate, Events, Lifestyle &
              Portrait Photography.
            </p>
          </div>

          <div className="card">
            <h3>🎥 Cinematography</h3>
            <p>
              Cinematic films, Commercial Ads, Promotional Videos, Reels &
              Creative Productions.
            </p>
          </div>

          <div className="card">
            <h3>📱 Digital Marketing</h3>
            <p>
              Social Media Management, Branding, Content Strategy, SEO &
              Performance Marketing.
            </p>
          </div>

          <div className="card">
            <h3>🚀 Our Mission</h3>
            <p>
              Creating meaningful visual experiences that inspire audiences and
              help businesses grow successfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}