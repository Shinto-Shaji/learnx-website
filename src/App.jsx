

import "./App.css";

const categories = [

  {

    number: "01",

    icon: "🌱",

    title: "Early Learning",

    description: "Building strong foundations through engaging books and joyful activities.",

    tags: "LKG · UKG · Kindergarten",

    tone: "mint",

  },

  {

    number: "02",

    icon: "📚",

    title: "School Education",

    description: "Learning resources that help students understand, practise and grow.",

    tags: "Textbooks · Subject Guides",

    tone: "peach",

  },

  {

    number: "03",

    icon: "✏️",

    title: "Workbooks & Practice",

    description: "Activity-based exercises that make everyday learning more meaningful.",

    tags: "Practice · Revision · Activities",

    tone: "blue",

  },

  {

    number: "04",

    icon: "🎯",

    title: "Competitive Exams",

    description: "Preparation resources for developing knowledge, aptitude and reasoning.",

    tags: "Aptitude · Reasoning · Exam Prep",

    tone: "lavender",

  },

];

const learningValues = [

  {

    icon: "💡",

    title: "Learning with purpose",

    description: "Resources designed to make knowledge meaningful and accessible.",

  },

  {

    icon: "🌿",

    title: "Growth at every stage",

    description: "Supporting learners from their first letters to bigger ambitions.",

  },

  {

    icon: "✨",

    title: "Curiosity that lasts",

    description: "Encouraging questions, discovery and a lifelong love of learning.",

  },

];

const programSubjects = [

  "English",

  "Mathematics",

  "General Awareness",

  "Logical Reasoning",

  "Visual Observation",

];

const examDetails = [

  { icon: "🎒", label: "Eligibility", value: "LKG & UKG students" },

  { icon: "🏫", label: "Examination mode", value: "Offline" },

  { icon: "⏰", label: "Duration", value: "45 minutes" },

  { icon: "✏️", label: "Question format", value: "Picture-based MCQs and simple activities" },

  { icon: "💳", label: "Registration fee", value: "₹200 per student, including examination material" },

];

const programDates = [

  "Registration opening",

  "Registration deadline",

  "Examination date",

  "Results announcement",

];

function SectionLabel({ children }) {

  return <span className="section-label">{children}</span>;

}

function Brand({ footer = false }) {

  return (

    <a

      className={`brand ${footer ? "footer-brand" : ""}`}

      href="#home"

      aria-label="LearnX Edu Solutions home"

    >

      <span className="brand-mark">L<span>X</span></span>

      <span className="brand-copy">

        <strong>LearnX</strong>

        <span className="brand-subtitle">EDU SOLUTIONS</span>

      </span>

    </a>

  );

}

function Header() {

  return (

    <header className="site-header">

      <div className="header-inner">

        <Brand />

        <nav className="desktop-nav" aria-label="Main navigation">

          <a href="#publications">Our Publications</a>

          <a href="#about">About Us</a>

          <a href="#program">Our Programs</a>

          <a href="#contact">Contact</a>

        </nav>

        <a className="header-cta" href="#publications">

          Explore Books <span>↗</span>

        </a>

      </div>

    </header>

  );

}


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        {/* Left column: hero text and buttons */}
        <div className="hero-copy">
          <SectionLabel>LEARNING FOR EVERY JOURNEY</SectionLabel>

          <h1>
            Every page opens
            <br />
            a world of <span>possibilities.</span>
          </h1>

          <p className="hero-description">
            From the first letters to the biggest ambitions, we believe
            learning has the power to shape brighter futures.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#publications">
              Explore Our Publications <span>↗</span>
            </a>

            <a className="text-link" href="#about">
              Discover LearnX <span>→</span>
            </a>
          </div>

          <div className="hero-footnote">
            <span className="footnote-line" />
            <span>Inspiring learning. Empowering futures.</span>
          </div>
        </div>

        {/* Right column: book photograph */}
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85"
            alt="Books for learning and discovery"
            className="hero-real-books"
          />

          <div className="visual-note note-bottom">
            A little learning, a lot of possibility.
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>EARLY LEARNING</span>
        <span className="hero-bottom-dot">✳</span>
        <span>SCHOOL EDUCATION</span>
        <span className="hero-bottom-dot">✳</span>
        <span>COMPETITIVE EXAMS</span>
        <span className="hero-bottom-dot">✳</span>
        <span>LIFELONG LEARNING</span>
      </div>
    </section>
  );
}


function Publications() {
  const publicationItems = [
    {

      title: "Early Learning",
      subtitle: "A joyful beginning",
      description:
        "Books and activities for little learners discovering letters, numbers, shapes and the world around them.",
      tags: ["LKG & UKG", "Foundational learning"],
      tone: "mint",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "School Textbooks",
      subtitle: "Learning, chapter by chapter",
      description:
        "Learning resources to support classroom teaching, subject understanding and steady academic progress.",
      tags: ["School subjects", "Textbooks"],
      tone: "peach",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85",
    },
    {
      
      title: "Workbooks & Practice",
      subtitle: "Make learning stick",
      description:
        "Practice pages, revision exercises and activities that help learners build confidence through doing.",
      tags: ["Exercises", "Revision & activities"],
      tone: "blue",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=85",
    },
    {
      title: "Competitive Exam Books",
      subtitle: "Prepare for the next step",
      description:
        "Study and practice resources for learners working on aptitude, reasoning and exam readiness.",
      tags: ["Aptitude", "Reasoning & preparation"],
      tone: "lavender",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <section className="publications section-pad" id="publications">
      <div className="publication-intro">
        <div>
          <SectionLabel>THE LEARNX CATALOGUE</SectionLabel>
          <h2>Books for every<br /><span>chapter of learning.</span></h2>
        </div>
        <div className="publication-intro-copy">
          <p>
            From first discoveries to focused preparation, explore learning
            resources for different ages, subjects and ambitions.
          </p>
          <a className="text-link" href="#contact">
            Ask about our publications <span>→</span>
          </a>
        </div>
      </div>

      <div className="publication-shelf" aria-label="Publication categories">
        {publicationItems.map((item) => (
          <article className={`publication-item publication-${item.tone}`} key={item.number}>
            <div className="publication-art">
              <img
                className="publication-photo"
                src={item.image}
                alt={`${item.title} books`}
                loading="lazy"
              />
              <span className="publication-art-number">{item.number}</span>
            </div>
            <div className="publication-item-copy">
              <span className="publication-subtitle">{item.subtitle}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="publication-tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href="#contact" className="publication-link">
                Publication enquiries <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="catalogue-note">
        <span className="catalogue-note-icon" aria-hidden="true">📖</span>
        <div>
          <strong>Looking for a particular learning resource?</strong>
          <p>Tell us what you need and contact LearnX for publication enquiries.</p>
        </div>
        <a href="#contact">Contact LearnX <span>→</span></a>
      </div>
    </section>
  );
}

function LittleStarsBanner() {

  return (

    <section className="little-stars-banner" aria-labelledby="little-stars-title">

      <div className="stars-banner-copy">

        <span className="stars-eyebrow">A SPECIAL OPPORTUNITY FOR LITTLE LEARNERS</span>

        <h2 id="little-stars-title">

          Little minds.

          <br />

          <span>Limitless stars.</span>

        </h2>

        <p>

          Introducing the Little Stars Scholarship Examination —

          a joyful opportunity for young learners to explore their

          potential and celebrate what they know.

        </p>

        <a className="button button-pink" href="#program">

          Discover Little Stars <span>↓</span>

        </a>

      </div>

      <div className="stars-banner-art" aria-hidden="true">

        <div className="stars-banner-sun">☀</div>

        <span className="banner-star banner-star-one">✦</span>

        <span className="banner-star banner-star-two">✧</span>

        <span className="banner-star banner-star-three">★</span>

        <div className="banner-rainbow">

          <div />

          <div />

          <div />

        </div>

        <div className="banner-kids">

          <div className="banner-kid banner-kid-one">

            <div className="banner-kid-hair" />

            <div className="banner-kid-face"><i /><i /><b /></div>

            <div className="banner-kid-body">📚</div>

          </div>

          <div className="banner-kid banner-kid-two">

            <div className="banner-kid-hair" />

            <div className="banner-kid-face"><i /><i /><b /></div>

            <div className="banner-kid-body">🎒</div>

          </div>

        </div>

        <div className="banner-art-caption">LEARN · DISCOVER · SHINE</div>

      </div>

    </section>

  );

}

function ProgramDetails() {
  const subjectIcons = ["🔤", "🔢", "🌍", "🧩", "👀"];
  const subjectColors = ["rose", "gold", "mint", "lavender", "blue"];

  return (
    <section className="program-section section-pad" id="program">
      <div className="program-container">
        {/* Programme introduction */}
        
<div className="program-heading">
  <div className="program-heading-copy">
    <SectionLabel>LEARNX EDU SOLUTIONS · FEATURED PROGRAMME</SectionLabel>

    <h2>
      Introducing <span>Little Stars.</span>
    </h2>

    <p>
      A scholarship examination that celebrates curiosity,
      encourages young minds and recognises every step of learning.
    </p>
  </div>
</div>


        {/* Subjects */}
        <div className="program-section-heading">
          <div>
            <span className="program-overline">WHAT THEY'LL EXPLORE</span>
            <h3>Learning through discovery.</h3>
          </div>
          <p>
            Five engaging areas designed around the way young children
            observe, think and learn.
          </p>
        </div>

        <div className="program-subject-grid">
          {programSubjects.map((subject, index) => (
            <article
              className={`program-subject-card subject-${subjectColors[index]}`}
              key={subject}
            >
              <div className="program-subject-top">
                <span className="program-subject-icon" aria-hidden="true">
                  {subjectIcons[index]}
                </span>
                <span className="program-subject-number">
                  0{index + 1}
                </span>
              </div>
              <h4>{subject}</h4>
              <span className="program-subject-accent" />
            </article>
          ))}
        </div>

        {/* Examination overview */}
        <div className="program-section-heading exam-heading">
          <div>
            <span className="program-overline">THE ESSENTIALS</span>
            <h3>Everything parents need to know.</h3>
          </div>
          <p>
            A simple overview of the examination, from its format to the
            registration fee.
          </p>
        </div>

        <div className="program-details-grid">
          {examDetails.map((detail, index) => (
            <article className="program-detail-card" key={detail.label}>
              <span className="program-detail-icon" aria-hidden="true">
                {detail.icon}
              </span>
              <span className="program-detail-label">{detail.label}</span>
              <strong>{detail.value}</strong>
            </article>
          ))}
        </div>

        {/* Recognition and rewards */}
        <div className="program-awards">
          <div className="program-awards-emblem" aria-hidden="true">
            🏆
          </div>
          <div className="program-awards-copy">
            <span className="program-overline">CELEBRATING EVERY ACHIEVEMENT</span>
            <h3>Every little star deserves a chance to shine.</h3>
            <p>
              Scholarships and prizes for national rank holders, medals and
              certificates for rank holders, and a participation certificate
              and performance report for every participant.
            </p>
          </div>
          <div className="program-awards-stamp" aria-hidden="true">
            LEARN
            <br />
            DISCOVER
            <br />
            SHINE
          </div>
        </div>

        {/* Important dates */}
        <div className="program-dates-section">
          <div className="program-dates-heading">
            <span className="program-overline">KEEP AN EYE OUT</span>
            <h3>Important dates</h3>
            <p>Key dates will be announced by LearnX Edu Solutions.</p>
          </div>

          <div className="program-date-grid">
            {programDates.map((date, index) => (
              <article className="program-date-card" key={date}>
                <span className="program-date-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong>{date}</strong>
                  <span className="program-date-status">
                    <span className="program-date-dot" />
                    To be announced
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Parent enquiry call to action */}
        <div className="program-contact-banner">
          <div className="program-contact-icon" aria-hidden="true">
            ✉
          </div>
          <div className="program-contact-copy">
            <span>YOUR LITTLE LEARNER'S NEXT ADVENTURE</span>
            <h3>Curious about Little Stars?</h3>
            <p>
              Contact LearnX for information about registration and
              the examination.
            </p>
          </div>
          <a className="button button-light" href="#contact">
            Make an enquiry <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {

  return (

    <section className="about-section section-pad" id="about">

      <div className="about-intro">

        <SectionLabel>THE THINKING BEHIND LEARNX</SectionLabel>

        <h2>

          Learning isn't just

          <br />

          about <span>what we know.</span>

        </h2>

        <p>

          It is about what we discover, the questions we ask and the

          possibilities we begin to see. At LearnX Edu Solutions, our

          focus is on supporting learning at every stage.

        </p>

        <a className="text-link" href="#contact">

          Get to know us <span>→</span>

        </a>

      </div>

      <div className="values-list">

        {learningValues.map((value, index) => (

          <article className="value-item" key={value.title}>

            <div className={`value-icon value-icon-${index + 1}`}>

              {value.icon}

            </div>

            <div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

            </div>

            <span className="value-number">0{index + 1}</span>

          </article>

        ))}

      </div>

    </section>

  );

}

function Contact() {

  return (

    <section className="contact-section" id="contact">

      <div className="contact-inner">

        <div>

          <SectionLabel>LET'S TALK LEARNING</SectionLabel>

          <h2>Have a publication<br />or learning enquiry?</h2>

          <p>

            Whether you are looking for educational resources or

            information about Little Stars, we'd be happy to hear from you.

          </p>

        </div>

        <div className="contact-card">

          <span className="contact-icon">✉</span>

          <h3>Connect with LearnX</h3>

          <p>Reach out to our team for enquiries about publications and programs.</p>

          <a href="mailto:" className="button button-dark">

            Contact Our Team <span>↗</span>

          </a>

          <small>Official contact details can be added here.</small>

        </div>

      </div>

    </section>

  );

}

function Footer() {

  return (

    <footer className="site-footer">

      <div className="footer-main">

        <div className="footer-about">

          <Brand footer />

          <p>Inspiring learning. Empowering futures.</p>

        </div>

        <div className="footer-links">

          <strong>Explore</strong>

          <a href="#publications">Our Publications</a>

          <a href="#about">About LearnX</a>

          <a href="#program">Little Stars</a>

        </div>

        <div className="footer-links">

          <strong>Get in touch</strong>

          <a href="#contact">Publication Enquiries</a>

          <a href="#contact">Program Enquiries</a>

          <a href="#home">Back to Top ↑</a>

        </div>

        <div className="footer-address">

          <strong>LearnX Edu Solutions</strong>

          <p>

            Thannickal Building, Near Alappattu Fuels,

            Kooropada, Kottayam – 686502

          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <span>© {new Date().getFullYear()} LearnX Edu Solutions.</span>

        <span>Made with a love for learning.</span>

      </div>

    </footer>

  );

}

function App() {

  return (

    <div className="website">

      <div className="announcement-bar">

        <span>✦</span> Learning opens doors to new possibilities. <span>✦</span>

      </div>

      <Header />

      <main>

        <div className="homepage-intro">

          <LittleStarsBanner />

          <Hero />

        </div>

        <Publications />

        <ProgramDetails />

        <About />

        <Contact />

      </main>

      <Footer />

    </div>

  );

}

export default App;
