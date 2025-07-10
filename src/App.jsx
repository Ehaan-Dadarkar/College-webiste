import { useEffect } from "react";

function App() {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar-collapse");

    links.forEach(link => {
      link.addEventListener("click", () => {
        if (navbar.classList.contains("show")) {
          navbar.classList.remove("show");
        }
      });
    });

    // Cleanup (important!)
    return () => {
      links.forEach(link => {
        link.removeEventListener("click", () => { });
      });
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark px-4 fixed-top">
        <a className="navbar-brand notable fs-2" href="#">AIARKP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link poppins link-info" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link poppins link-info" href="#courses">Courses</a></li>
            <li className="nav-item"><a className="nav-link poppins link-info" href="#admission">Admission</a></li>
            <li className="nav-item"><a className="nav-link poppins link-info" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero section text-center pt-5 mt-5">
        <dotlottie-wc
          src="https://lottie.host/e2ea65ab-9df2-4c49-9495-ab6eb435e272/Bl33akyHDz.lottie"
          style={{ width: 300, height: 300 }}
          speed="1"
          autoplay
          loop
          className="container"
        />
        <h1 className="notable hero-text">ABDUL RAZZAK KALSEKAR<br />POLYTECHNIC</h1>
        <h1 className="notable hero-text mobile-hero d-none">ABDUL RAZZAK KALSEKAR POLYTECHNIC</h1>
        <p className="poppins">Empowering Students for a Better Tomorrow</p>
        <a href="#courses" className="btn btn-primary poppins">Explore Courses</a>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <h2 className="text-center mb-5 rubik">About</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img src="/kalsekar.jpg" alt="College Building" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p className="sans">Established in 2002–03, AIARKP is run by the well-regarded Anjuman-I-Islam Trust, which has been in the education field since 1874.</p>
              <h5 className="mt-4 sans">Vision :</h5>
              <p className="sans">To be the most sought after polytechnic that others would wish to emulate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="section">
        <div className="container">
          <h2 className="text-center mb-5 rubik">Courses</h2>
          <div className="row g-4">
            {[
              { title: "Computer Engineering", icon: "/icons8-computer-50.png" },
              { title: "Mechanical Engineering", icon: "/icons8-mechanical-engineering-32.png" },
              { title: "Civil Engineering", icon: "/icons8-civil-engineer-50.png" },
              { title: "Electrical Engineering", icon: "/icons8-voltmeter-50.png" }
            ].map((course, index) => (
              <div key={index} className="col-md-3 col-sm-6 card-section">
                <div className="course-card text-center">
                  <img src={course.icon} alt={course.title} className="course-icon" />
                  <p className="sans">Diploma in {course.title}</p>
                  <p className="sans">Duration: 3 Years</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="section">
        <div className="container text-center">
          <h2 className="mb-5 rubik">Admission</h2>
          <div className="mx-auto" style={{ maxWidth: "400px" }}>
            <div className="admission-step sans">1. Online Registration</div>
            <div className="admission-step sans">2. Document Verification</div>
            <div className="admission-step sans">3. Final Admission</div>
            <a href="https://www.aiarkp.ac.in" className="btn btn-warning mt-4" target="_blank" rel="noreferrer">Apply Now</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <h2 className="text-center mb-5 rubik">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-12 d-flex align-items-center gap-3 m-2">
              <img src="/icons8-address-24.png" alt="Address Icon" style={{ width: 30 }} />
              <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="text-white text-decoration-none link-info sans">
                AIARKP Institute<br />
                Karnala Knowledge Park,<br />
                Panvel, Navi Mumbai – 410206
              </a>
            </div>
            <div className="col-12 d-flex align-items-center gap-3 m-2">
              <img src="/icons8-phone-30.png" alt="Phone Icon" style={{ width: 30 }} />
              <a href="tel:+911234567890" className="text-white text-decoration-none link-info sans">+91 1234567890</a>
            </div>
            <div className="col-12 d-flex align-items-center gap-3 m-2">
              <img src="/icons8-email-30.png" alt="Email Icon" style={{ width: 30 }} />
              <a href="mailto:example@gmail.com" className="text-white text-decoration-none link-info sans">example@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
