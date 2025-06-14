
import styles from './MyPage.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';
import indiaMap from '../../assets/images/indiamap.png';


const MyPage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* ✅ Logo here */}
        <img src={logo} alt="Firm Logo" className={styles.firmLogo} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>About ACE Microelectronics</h1>
            <p className={styles.heroDescription}>
              We are a premier IT system integrator with over 28 years of industry experience, 
              dedicated to delivering innovative and reliable technology solutions.
            </p>
          <div className={styles.heroButtons}>
            <Link to="/services" className={styles.primaryBtn}>Explore Services</Link>
            <Link to="/contact" className={styles.secondaryBtn}>Contact Us</Link>
          </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.indiaMap}>
              <div className={styles.mapShape}>
                <img src={indiaMap} alt="India Map" className={styles.indiaMap} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutLeft}>
            <h2>About ACE Microelectronics</h2>
            <p>
              We are a premier IT system integrator with over 28 years of industry experience, 
              dedicated to delivering innovative and reliable technology solutions.
            </p>
            <button className={styles.readMoreBtn}>Read More →</button>
          </div>
          <div className={styles.aboutRight}>
            <h3>Managed Services Partner</h3>
            <p className={styles.partnershipText}>
              Railwire Partnership, Rajasthan & West Bengal
            </p>
            <div className={styles.serviceDetails}>
              <div>→ Key services under Managed Services</div>
              <div>→ Benefits & value proposition</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className={styles.servicesSection}>
        <h2>Featured Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>📊</div>
            <h3>Networking Solutions</h3>
            <p>Elite Boxes, Aggregation Endpoint, PAX Solution</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>💾</div>
            <h3>Compute Storage</h3>
            <p>Nvidia & IoTlinksis Integrated Infrastructure and OIEM</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>☁️</div>
            <h3>Data Center & Cloud Solutions</h3>
            <p>Strong Solutions & Hybrid Cloud Strategies</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>⚡</div>
            <h3>Cyber Security</h3>
            <p>FTTU Optics Firewalls</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🌐</div>
            <h3>FTTH Solutions</h3>
            <p>Cloud Solutions</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>👥</div>
            <h3>Managed Service Partner</h3>
            <p>Service Enabling Management Services (FMS)</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🛡️</div>
            <h3>Cybersecurity Solutions</h3>
            <p>FTTH & ISP Solutions</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>🔧</div>
            <h3>AMC & Facility Management Services</h3>
            <p>(FMS)</p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className={styles.industriesSection}>
        <h2>Industries Served</h2>
        <div className={styles.industriesGrid}>
          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>🏛️</div>
            <p>Government</p>
          </div>
          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>🏢</div>
            <p>Large Enterprises</p>
          </div>
          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>🏙️</div>
            <p>Smart Cities</p>
          </div>
          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>📡</div>
            <p>Internet Services GP</p>
          </div>
          <div className={styles.industryCard}>
            <div className={styles.industryIcon}>🏭</div>
            <p>SMB</p>
          </div>
        </div>
      </section>

      {/* Trusted Partnerships */}
      <section className={styles.partnershipsSection}>
        <h2>Trusted Partnerships</h2>
        <div className={styles.partnersGrid}>
          <div className={styles.partnerLogo}>aruba</div>
          <div className={styles.partnerLogo}>Hewlett PACKARD ENTERPRISE</div>
          <div className={styles.partnerLogo}>JUNIPER</div>
          <div className={styles.partnerLogo}>cisco</div>
          <div className={styles.partnerLogo}>mikrotik</div>
          <div className={styles.partnerLogo}>veeza</div>
          <div className={styles.partnerLogo}>FORCEPOINT</div>
          <div className={styles.partnerLogo}>VEEAM</div>
          <div className={styles.partnerLogo}>vmware</div>
          <div className={styles.partnerLogo}>SOPHOS</div>
          <div className={styles.partnerLogo}>aws</div>
        </div>
      </section>

      {/* Client Success & Why Choose Us */}
      <section className={styles.footerSection}>
        <div className={styles.footerContent}>
          <div className={styles.successStories}>
            <h3>Client Success Stories</h3>
            <div className={styles.testimonial}>
              <div className={styles.quoteIcon}>💬</div>
              <p>
                "ACE Microelectronics has been instrumental in transforming our 
                network infrastructure delivering optimal service efficiently"
              </p>
              <button className={styles.caseStudyBtn}>Read Full Case Study</button>
            </div>
          </div>
          <div className={styles.whyChooseUs}>
            <h3>Why Choose Us</h3>
            <ul>
              <li>28+ Years of Industry Expertise</li>
              <li>Strategic Partnerships with Tier-1 OEMs</li>
              <li>Customer-First Mindset & SLA-based Service</li>
              <li>Scalable, End-to-End IT & Network Solutions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
