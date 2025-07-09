
function App() {

  return (
    <>
      <div className="min-vh-100 d-flex flex-column bg-light text-dark">
        {/* Header */}
        <header
          className="bg-dark text-warning p-4 text-center h3 fw-bold shadow"
          style={{ fontFamily: 'Notable, sans-serif' }}
        >
          AIARKP College of Engineering
        </header>

        {/* Main Content */}
        <main className="flex-fill p-4 container">
          {/* About Section */}
          <section className="bg-warning text-dark p-4 rounded mb-4">
            <h2 className="h4 border-bottom pb-2 mb-3">About the College</h2>
            <p>
              AIARKP College of Engineering is a premier institution dedicated to
              providing top-notch technical education and fostering innovation.
              Our mission is to nurture skilled professionals and responsible citizens.
            </p>
          </section>

          {/* Courses Section */}
          <section className="bg-info text-dark p-4 rounded mb-4">
            <h2 className="h4 border-bottom pb-2 mb-3">Courses Offered</h2>
            <ul className="list-unstyled">
              <li>• Diploma in Computer Engineering</li>
              <li>• Diploma in Mechanical Engineering</li>
              <li>• Diploma in Civil Engineering</li>
              <li>• Diploma in Electrical Engineering</li>
            </ul>
          </section>

          {/* Admission Section */}
          <section className="bg-success text-white p-4 rounded mb-4">
            <h2 className="h4 border-bottom pb-2 mb-3">Admission Process</h2>
            <p>
              Admissions are open for the academic year 2025-2026. Candidates can apply online
              through our website or visit the campus. Eligibility is based on 10th or 12th-grade
              scores, followed by counseling and document verification.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-warning text-center py-3 mt-auto">
          <div>
            <p>Contact Us: info@aiarkpcollege.edu.in | +91-9876543210</p>
            <p>
              Address: AIARKP College of Engineering, National Highway 66, Ratnagiri, Maharashtra - 415612
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
