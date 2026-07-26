import "../Services.css";

const videoServices = [
  {
    title: "Basic Plan",
    price: "₹5,999",
    reels: "10 Reels or 10 Posts",
    color: "basic",
    features: [
      "Basic Video Editing",
      "Clip Trimming",
      "Music Sync",
      "Simple Transitions",
      "Basic Text & Titles",
      "Logo Addition",
      "Audio Balance",
      "Basic Color Correction",
      "HD Export",
    ],
  },

  {
    title: "Standard Plan",
    price: "₹14,999",
    reels: "10 Reels or 20 Posts",
    color: "standard",
    features: [
      "Professional Editing",
      "Best Sync Editing",
      "Trending Transitions",
      "Motion Text Animation",
      "Captions",
      "Sound Effects",
      "Cinematic Effects",
      "Color Correction",
      "HD / 4K Export",
      "2 Free Revisions",
    ],
  },

  {
    title: "Gold Plan",
    price: "₹29,999",
    reels: "10 Reels or 20 Posts",
    color: "gold",
    features: [
      "Professional Editing",
      "Best Sync Editing",
      "Trending Transitions",
      "Motion Text Animation",
      "Custom Captions",
      "Sound Effects",
      "Visual Effects",
      "Color Correction",
      "HD / 4K Export",
      "2 Free Revisions",
    ],
  },

  {
    title: "Creator Plan",
    price: "Custom",
    reels: "Custom Package",
    color: "creator",
    features: [
      "Cinematic Editing",
      "Premium Color Grading",
      "VFX & AI Effects",
      "Speed Ramping",
      "Sound Design",
      "Advanced Transitions",
      "Commercial Style Edit",
      "Professional Typography",
      "4K Ultra HD Export",
      "Priority Delivery",
    ],
  },
];

const marketingPlans = [
  {
    title: "Standard",
    price: "₹9,999",
    color: "marketing-standard",
    reels: "3 Reels + 3 Story Videos",
    features: [
      "1 Organic Design (Post/Banner)",
      "Facebook & Instagram Management",
      "Lead Generation Ads",
      "Monthly Content Calendar",
      "Basic Branding Support",
    ],
  },

  {
    title: "Enterprise",
    price: "₹14,999",
    color: "marketing-enterprise",
    reels: "5 Reels + 5 Story Videos",
    features: [
      "3 Organic Designs",
      "Facebook & Instagram Management",
      "Lead Generation Ads",
      "Monthly Performance Report",
      "Priority Support",
    ],
  },

  {
    title: "Business",
    price: "₹19,999",
    color: "marketing-business",
    reels: "7 Reels + 8 Story Videos",
    features: [
      "5 Organic Designs",
      "Facebook & Instagram Management",
      "Lead Generation Ads",
      "Advanced Branding Strategy",
      "Dedicated Account Manager",
      "Monthly Analytics Report",
    ],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      {/* ===================== VIDEO SERVICES ===================== */}

      <div className="heading">
        <h4>Content Creation</h4>
        <h2>Video Editing Packages</h2>
        <p>
          Professional editing solutions for creators, brands and businesses.
          Choose the package that fits your content goals.
        </p>
      </div>

      <div className="service-grid">
        {videoServices.map((service, index) => (
          <div className={`service-card ${service.color}`} key={index}>
            <h3>{service.title}</h3>

            <div className="price">
              <span>Per Month</span>
              <h2>{service.price}</h2>
            </div>

            <h4>{service.reels}</h4>

            <ul>
              {service.features.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ===================== MARKETING SERVICES ===================== */}

      <div className="heading marketing-heading">
        <h4>Digital Marketing</h4>
        <h2>Marketing Packages</h2>

        <p>
          Build your online presence with engaging content, strategic marketing,
          and lead generation designed to grow your business.
        </p>
      </div>

      <div className="service-grid">
        {marketingPlans.map((plan, index) => (
          <div className={`service-card ${plan.color}`} key={index}>
            <h3>{plan.title}</h3>

            <div className="price">
              <span>Per Month</span>
              <h2>{plan.price}</h2>
            </div>

            <h4>{plan.reels}</h4>

            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}