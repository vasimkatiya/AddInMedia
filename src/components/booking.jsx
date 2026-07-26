import { useState } from "react";
import "../BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    packageName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "91927407020"; // Replace with your WhatsApp number

    const text = `*📌 New Package Booking*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📅 *Preferred Date:* ${formData.date}

📦 *Package:* ${formData.packageName}

📝 *Project Details:*
${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="booking-section">
      <div className="booking-container">
        <h2>Book Your Package</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              name="date"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <select
              name="packageName"
              onChange={handleChange}
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select Package
              </option>

              <optgroup label="🎬 Video Editing Packages">
                <option value="Basic Plan - ₹5,999 / Month">
                  Basic Plan - ₹5,999 / Month
                </option>

                <option value="Standard Plan - ₹14,999 / Month">
                  Standard Plan - ₹14,999 / Month
                </option>

                <option value="Gold Plan - ₹29,999 / Month">
                  Gold Plan - ₹29,999 / Month
                </option>

                <option value="Creator Plan - Custom">
                  Creator Plan - Custom
                </option>
              </optgroup>

              <optgroup label="📈 Digital Marketing Packages">
                <option value="Standard - ₹9,999 / Month">
                  Standard - ₹9,999 / Month
                </option>

                <option value="Enterprise - ₹14,999 / Month">
                  Enterprise - ₹14,999 / Month
                </option>

                <option value="Business - ₹19,999 / Month">
                  Business - ₹19,999 / Month
                </option>
              </optgroup>
            </select>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="button" >Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;