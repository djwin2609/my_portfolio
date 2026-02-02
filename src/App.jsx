import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";


;
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Database,
  Wrench,
  User,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const profile = useMemo(
    () => ({
      name: "PHUC NGUYEN HOANG THIEN",
      role: "Backend Developer",
      dob: "09/12/2004",
      email: "nguyenhoangthienphuc09@gmail.com",
      phone: "0349.996.408",
      linkedin: "https://www.linkedin.com/in/thienphucnguyenhoang/",
      summary:
        "Fourth-year Information Technology student passionate about backend web development. Hands-on experience through academic and personal projects using Java Core, Spring Framework, HTML, CSS, JavaScript and system analysis. Seeking a fresher backend web developer position to further develop technical skills and contribute to real-world web applications.",
      education: {
        school: "Hue University of Science",
        degree: "Bachelor of Information Technology",
        major: "Specialization in Software Technologies",
        years: "2022 – 2026",
      },
      skills: {
        "Programming Languages": ["Java", "SQL", "JavaScript"],
        Frameworks: ["Spring Boot", "Spring MVC", "Spring Data JPA (Hibernate)"],
        "UI / Frontend": ["HTML", "CSS", "JavaScript", "JSTL", "Bootstrap"],
        Database: ["Microsoft SQL Server"],
        Tools: ["Git", "GitHub", "IntelliJ IDEA", "Eclipse", "Figma (basic)"],
        "Soft Skills": [
          "Teamwork",
          "Self-learning",
          "Problem-solving",
          "Responsibility in task delivery",
        ],
      },
      projects: [
        {
          title: "Hotel & Service Booking System",
          subtitle: "Full-Stack Web Developer",
          stack: {
            Frontend: ["HTML", "CSS", "JavaScript", "JSTL"],
            Backend: ["Java Core", "Spring Framework"],
            Database: ["Microsoft SQL Server"],
          },
          features: [
            {
              label: "Authentication",
              text: "User registration (hashed password using MD5), login, logout.",
            },
            {
              label: "Client",
              text: "Room details with price-range suggestions, booking, booking & service history, search, loyalty point redemption, online payment via VNPay, retry payment on network failure, service booking, chatbot integration (DeepSeek API).",
            },
            {
              label: "Admin",
              text: "Room & service management (CRUD), customer management, booking & service management, check-in/check-out, cancellation, monthly revenue statistics.",
            },
          ],
        },
        {
          title: "Online Shoe Store Website",
          subtitle: "Full-Stack Web Developer",
          stack: {
            Frontend: ["HTML", "CSS", "JavaScript", "JSP"],
            Backend: ["Java Servlet"],
            Database: ["Microsoft SQL Server"],
          },
          features: [
            {
              label: "Authentication",
              text: "User registration, login, logout.",
            },
            {
              label: "Client",
              text: "Browse product details, search, add to cart, checkout/order placement, order history.",
            },
            {
              label: "Admin",
              text: "Admin login, product management (CRUD), account management (CRUD), order management (update status, view details).",
            },
          ],
        },
      ],
    }),
    []
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (

    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <TopNav
        name={profile.name}
        role={profile.role}
        nav={nav}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onNavigate={scrollTo}
      />
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <Hero profile={profile} onNavigate={scrollTo} />

        <Section id="about" title="About" icon={<User className="h-5 w-5" />}>
          <Card className="bg-white/5 backdrop-blur border-white/10">
            <CardContent className="p-6">
              <p className="text-slate-200 leading-relaxed">{profile.summary}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <InfoRow icon={<GraduationCap className="h-5 w-5" />}>
                  <div>
                    <div className="font-semibold">{profile.education.degree}</div>
                    <div className="text-sm text-slate-300">{profile.education.school}</div>
                    <div className="text-sm text-slate-300">{profile.education.major}</div>
                    <div className="text-sm text-slate-400">{profile.education.years}</div>
                  </div>
                </InfoRow>
                <InfoRow icon={<MapPin className="h-5 w-5" />}>
                  <div>
                    <div className="font-semibold">Open to opportunities</div>
                    <div className="text-sm text-slate-300">Fresher / Internship Backend Developer</div>
                    <div className="text-sm text-slate-400">Java • Spring • SQL</div>
                  </div>
                </InfoRow>
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section id="skills" title="Skills" icon={<Code2 className="h-5 w-5" />}>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(profile.skills).map(([group, items]) => (
              <Card key={group} className="bg-white/5 backdrop-blur border-white/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    {group === "Database" ? (
                      <Database className="h-4 w-4" />
                    ) : group === "Tools" ? (
                      <Wrench className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    {group}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <Badge key={s} variant="secondary" className="bg-white/10 text-slate-100 border-white/10">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" icon={<Briefcase className="h-5 w-5" />}>
          <div className="grid gap-6">
            {profile.projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" icon={<Mail className="h-5 w-5" />}>
          <Card className="bg-white/5 backdrop-blur border-white/10">
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replaceAll(".", "")}`}
                />
                <ContactItem
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                  value="linkedin.com/in/thienphucnguyenhoang"
                  href={profile.linkedin}
                />
                <ContactItem
                  icon={<User className="h-5 w-5" />}
                  label="Date of birth"
                  value={profile.dob}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="bg-white text-slate-950 hover:bg-slate-200"
                  onClick={() => (window.location.href = `mailto:${profile.email}`)}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email me
                </Button>
                <Button
                  variant="secondary"
                  className="bg-white/10 text-slate-100 border-white/10 hover:bg-white/15"
                  onClick={() => window.open(profile.linkedin, "_blank", "noopener,noreferrer")}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  View LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </Section>

        <footer className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          <div>
            © {new Date().getFullYear()} {profile.name}. Built with React.
          </div>
        </footer>
      </main>
    </div>
  );
}

function TopNav({ name, role, nav, mobileOpen, setMobileOpen, onNavigate }) {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          className="text-left"
          onClick={() => onNavigate("top")}
          aria-label="Go to top"
        >
          <div className="text-sm font-semibold tracking-wide">{name}</div>
          <div className="text-xs text-slate-400">{role}</div>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Button
              key={n.id}
              variant="ghost"
              className="text-slate-200 hover:text-white hover:bg-white/10"
              onClick={() => onNavigate(n.id)}
            >
              {n.label}
            </Button>
          ))}
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-slate-100 hover:bg-white/10"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90">
          <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 lg:px-8">
            {nav.map((n) => (
              <button
                key={n.id}
                className="w-full rounded-xl px-3 py-3 text-left text-slate-200 hover:bg-white/10"
                onClick={() => onNavigate(n.id)}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Hero({ profile, onNavigate }) {
  return (
    <div id="top" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 md:grid-cols-12 md:items-center"
      >
        <div className="md:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for Backend Developer opportunities
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-slate-300">{profile.role}</p>
          <p className="mt-4 max-w-2xl text-slate-200 leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              className="bg-white text-slate-950 hover:bg-slate-200"
              onClick={() => onNavigate("projects")}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              View Projects
            </Button>
            <Button
              variant="secondary"
              className="bg-white/10 text-slate-100 border-white/10 hover:bg-white/15"
              onClick={() => onNavigate("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>

        <div className="md:col-span-4">
          <Card className="bg-white/5 backdrop-blur border-white/10">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                {/* AVATAR */}
                <img
                 src="/profile.jpg"
                  alt="Profile"
                  className="h-16 w-16 rounded-2xl object-cover border border-white/10 hover:scale-105 transition"
                />
                <div className="min-w-0">
                  <div className="text-sm font-semibold">Quick Info</div>
                  <div className="mt-2 space-y-2 text-sm text-slate-200">
                    <MiniLine icon={<Mail className="h-4 w-4" />}>
                      <a className="hover:underline" href={`mailto:${profile.email}`}>
                        {profile.email}
                      </a>
                    </MiniLine>
                    <MiniLine icon={<Phone className="h-4 w-4" />}>
                      <a className="hover:underline" href={`tel:${profile.phone.replaceAll(".", "")}`}>
                        {profile.phone}
                      </a>
                    </MiniLine>
                    <MiniLine icon={<Linkedin className="h-4 w-4" />}>
                      <a
                        className="hover:underline"
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </MiniLine>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <Badge className="justify-center bg-white/10 text-slate-100 border-white/10">Java</Badge>
                <Badge className="justify-center bg-white/10 text-slate-100 border-white/10">Spring</Badge>
                <Badge className="justify-center bg-white/10 text-slate-100 border-white/10">SQL Server</Badge>
                <Badge className="justify-center bg-white/10 text-slate-100 border-white/10">JavaScript</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}

function Section({ id, title, icon, children }) {
  return (
    <section id={id} className="mt-12 scroll-mt-24">
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-2">{icon}</div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card className="bg-white/5 backdrop-blur border-white/10">
        <CardContent className="p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.subtitle}</p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {Object.entries(project.stack).map(([k, list]) => (
              <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold text-slate-100">{k}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {list.map((x) => (
                    <Badge key={x} variant="secondary" className="bg-white/10 text-slate-100 border-white/10">
                      {x}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3">
            {project.features.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-sm font-semibold text-slate-100">{f.label}</div>
                <p className="mt-1 text-sm text-slate-200 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function InfoRow({ icon, children }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mt-0.5 text-slate-200">{icon}</div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function ContactItem({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mt-0.5 text-slate-200">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs text-slate-400">{label}</div>
        <div className="text-sm font-semibold text-slate-100 break-words">{value}</div>
      </div>
    </div>
  );

  if (!href) return inner;
  return (
    <a href={href} className="block hover:brightness-110" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {inner}
    </a>
  );
}

function MiniLine({ icon, children }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-slate-300">{icon}</span>
      <span className="min-w-0 truncate">{children}</span>
    </div>
  );
}
