import "./App.css";

const profile = {
  name: "PHUC NGUYEN HOANG THIEN",
  title: "Backend Developer",
  dob: "09/12/2004",
  phone: "0349.996.408",
  email: "nguyenhoangthienphuc09@gmail.com",
  linkedin: "https://www.linkedin.com/in/thienphucnguyenhoang/",
  summary:
    "Fourth-year Information Technology student passionate about backend web development. Hands-on experience through academic and personal projects using Java Core, Spring Framework, HTML, CSS, JavaScript and system analysis. Seeking a fresher backend web developer position to further develop technical skills and contribute to real-world web applications.",
  education: {
    degree: "Bachelor of Information Technology",
    school: "Hue University of Science",
    specialization: "Specialization in Software Technologies",
    time: "2022 - 2026",
  },
  skills: {
    programming: ["Java", "SQL", "JavaScript"],
    frameworks: ["Spring Boot", "Spring MVC", "Spring Data JPA (Hibernate)"],
    ui: ["HTML", "CSS", "JavaScript", "JSTL", "Bootstrap"],
    database: ["Microsoft SQL Server"],
    tools: ["Git", "GitHub", "IntelliJ IDEA", "Eclipse", "Figma (basic)"],
    soft: ["Teamwork", "Self-learning", "Problem-solving", "Responsibility"],
  },
  projects: [
    {
      name: "Hotel & Service Booking System",
      role: "Full-Stack Web Developer",
      stack: ["Java", "Spring Framework", "SQL Server", "HTML/CSS/JS", "JSTL"],
      bullets: [
        "Frontend: HTML, CSS, JavaScript, JSTL",
        "Backend: Java Core, Spring Framework",
        "Database: Microsoft SQL Server",
        "Authentication: user registration (hashed password using MD5), login, logout",
        "Client: room details with price-range suggestions, booking & service history, search, loyalty points; online payment via VNPAY; retry payment on network failure; service booking; chatbot integration (DeepSeek API)",
        "Admin: room & service management (CRUD), customer management, booking & service management, check-in/check-out, cancellation, monthly revenue statistics",
      ],
      links: { demo: "#", repo: "#" },
    },
    {
      name: "Online Shoe Store Website",
      role: "Full-Stack Web Developer",
      stack: ["Java Servlet", "SQL Server", "HTML/CSS/JS", "JSP"],
      bullets: [
        "Frontend: HTML, CSS, JavaScript, JSP",
        "Backend: Java Servlet",
        "Database: Microsoft SQL Server",
        "Authentication: user registration, login, logout",
        "Client: register/login/logout, product details, search, add to cart, checkout/order placement, order history",
        "Admin: admin login, product management (CRUD), account management (CRUD), order management (update status, view details)",
      ],
      links: { demo: "#", repo: "#" },
    },
  ],
};

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="sectionHead">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Field({ label, value }) {
  return (
    <div className="field">
      <div className="fieldLabel">{label}</div>
      <div className="fieldValue">{value}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <div className="navInner">
          <a className="brand" href="#top">
            <span className="dot" /> {profile.name}
          </a>
          <nav className="menu">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a className="cta" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="main">
        {/* HERO */}
        <section className="hero">
          <div className="heroLeft">
            <p className="kicker">Available for Fresher / Internship</p>

            <h1>
              <span className="grad">{profile.name}</span>
            </h1>

            <h3 className="role">{profile.title}</h3>
            <p className="bio">{profile.summary}</p>

            <div className="heroActions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn" href="#contact">
                Contact
              </a>

              {/* Nếu bạn có file CV, đặt vào public/CV.pdf rồi bỏ comment dòng dưới */}
              {/* <a className="btn" href="/CV.pdf" download>Download CV</a> */}
            </div>

            <div className="socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>Email</a>
              <a href={`tel:${profile.phone.replaceAll(".", "")}`}>Phone</a>
            </div>
          </div>

          <div className="heroCard">
            <div className="avatar" aria-hidden="true">
              <div className="avatarInner">P</div>
            </div>

            <div className="miniGrid">
              <div className="miniCard">
                <div className="miniTitle">Email</div>
                <div className="miniText">{profile.email}</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">Phone</div>
                <div className="miniText">{profile.phone}</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">DOB</div>
                <div className="miniText">{profile.dob}</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">Focus</div>
                <div className="miniText">Backend Web Development</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About" subtitle="Quick overview">
          <div className="grid2">
            <div className="card">
              <h3>Summary</h3>
              <p className="muted">{profile.summary}</p>
            </div>
            <div className="card">
              <h3>Contacts</h3>
              <div className="fields">
                <Field label="Email" value={profile.email} />
                <Field label="Phone" value={profile.phone} />
                <Field label="LinkedIn" value={profile.linkedin} />
              </div>
            </div>
          </div>
        </Section>

        {/* EDUCATION */}
        <Section
          id="education"
          title="Education"
          subtitle="Academic background"
        >
          <div className="card">
            <div className="eduTop">
              <div>
                <h3 className="m0">{profile.education.degree}</h3>
                <p className="muted m0">{profile.education.school}</p>
              </div>
              <span className="tag">{profile.education.time}</span>
            </div>
            <p className="muted">
              {profile.education.specialization}
            </p>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills" subtitle="Technical & soft skills">
          <div className="skillGrid">
            <div className="card">
              <h3>Programming Languages</h3>
              <div className="pillWrap">
                {profile.skills.programming.map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </div>
            </div>

            <div className="card">
              <h3>Frameworks</h3>
              <div className="pillWrap">
                {profile.skills.frameworks.map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </div>
            </div>

            <div className="card">
              <h3>UI / Frontend</h3>
              <div className="pillWrap">
                {profile.skills.ui.map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </div>
            </div>

            <div className="card">
              <h3>Database</h3>
              <div className="pillWrap">
                {profile.skills.database.map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </div>
            </div>

            <div className="card">
              <h3>Tools</h3>
              <div className="pillWrap">
                {profile.skills.tools.map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </div>
            </div>

            <div className="card">
              <h3>Soft Skills</h3>
              <div className="pillWrap">
                {profile.skills.soft.map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          title="Projects"
          subtitle="Personal projects"
        >
          <div className="projectGrid">
            {profile.projects.map((p) => (
              <article key={p.name} className="projectCard">
                <div className="projectTop">
                  <div>
                    <h3 className="m0">{p.name}</h3>
                    <p className="muted m0">{p.role}</p>
                  </div>
                  <div className="tagRow">
                    {p.stack.slice(0, 3).map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="pillWrap small">
                  {p.stack.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                <ul className="list">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="projectLinks">
                  <a className="link" href={p.links.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                  <a className="link" href={p.links.repo} target="_blank" rel="noreferrer">
                    Repo
                  </a>
                </div>

               
              </article>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          title="Contact"
          subtitle="Let’s connect"
        >
          <div className="grid2">
            <div className="card">
              <h3>Direct</h3>
              <p className="muted">Bạn có thể liên hệ qua email/LinkedIn:</p>
              <div className="contactBtns">
                <a className="btn primary" href={`mailto:${profile.email}`}>
                  Email Me:nguyenhoangthienphuc09@gmail.com
                </a>
                <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn:https://www.linkedin.com/in/thienphucnguyenhoang/
                </a>
              </div>
            </div>

            <form
              className="card form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Hello, chuc nang nay Phuc chua phat trien ne");
              }}
            >
              <h3>Message</h3>
              <label>
                Your name
                <input placeholder="Your name" required />
              </label>
              <label>
                Message
                <textarea rows="4" placeholder="Write something..." required />
              </label>
              <button className="btn" type="submit">Send</button>
            </form>
          </div>
        </Section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="sep">•</span>
          <a href="#top">Back to top</a>
        </footer>
      </main>
    </div>
  );
}
