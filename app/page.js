import Image from 'next/image';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>Hello, I'm Arjun</h1>
          <p>A passionate Full-Stack Developer with 2 years of experience in creating visually appealing and responsive web applications.</p>
          <a href="#projects" className={styles.ctaButton}>See My Work</a>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/profile.jpg"
            alt="Profile Image"
            width={300}
            height={300}
            className={styles.profileImage}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection} id="skills">
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>

          <div className={styles.skillCard}>
            <Image src="/images/JavaScript.png" alt="Prisma" width={80} height={80} />
            <p>JavaScript</p>
          </div>
          <div className={styles.skillCard}>
            <Image src="/images/React.png" alt="React.js" width={80} height={80} />
            <p>React.js</p>
          </div>
          <div className={styles.skillCard}>
            <Image style={{ backgroundColor:"white"}} src="/images/Next.js.png" alt="Next.js" width={80} height={80} />
            <p>Next.js</p>
          </div>

          <div className={styles.skillCard}>
            <Image src="/images/Node.js.png" alt="nodejs" width={80} height={80} />
            <p></p>Nodejs
          </div>
          
          <div className={styles.skillCard}>
            <Image src="/images/MongoDB.png" alt="MongoDB" width={80} height={80} />
            <p>MongoDB</p>
          </div>
          
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection} id="projects">
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <h3>E-Commerce Website</h3>
            <p>An e-commerce platform built with Next.js, Prisma, and MongoDB. It features real-time product management and secure user authentication.</p>
            <a href="/projects/ecommerce" className={styles.projectLink}>View Project</a>
          </div>
          <div className={styles.projectCard}>
            <h3>Pharmacy Management App</h3>
            <p>A pharmacy management solution with Next.js, Node.js, and Express for store managers and sales executives to manage orders and inventory.</p>
            <a href="/projects/pharmacy-management" className={styles.projectLink}>View Project</a>
          </div>
          {/* Add more project cards */}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} id="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to collaborate or have any questions, feel free to reach out.</p>
        <a href="mailto:saharjun031@gmail.com" className={styles.ctaButton}>Get In Touch</a>
      </section>
    </div>
  );
};

export default HomePage;
