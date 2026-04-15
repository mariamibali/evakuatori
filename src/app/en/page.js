"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeEN() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="Tow Truck"
              width={50}
              height={50}
              style={{ borderRadius: "50%", marginTop: "5px" }}
            />
            <h1 className={styles.logo}>Tow Truck</h1>
          </div>
          <div className={styles.navContainer}>
            <nav className={styles.nav}>
              <ul className={`${styles.navList} ${open ? styles.active : ""}`}>
                <li className={styles.navItem}>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Contact
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#about" onClick={() => setOpen(false)}>
                    About
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#services" onClick={() => setOpen(false)}>
                    Services
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#location" onClick={() => setOpen(false)}>
                    Location
                  </a>
                </li>
              </ul>
            </nav>
            <div className={styles.languageSwitcher}>
              <Link
                href="/"
                className={`${styles.lang} ${pathname === "/" ? styles.activeLang : ""}`}
              >
                ქარ
              </Link>

              <Link
                href="/en"
                className={`${styles.lang} ${pathname === "/en" ? styles.activeLang : ""}`}
              >
                EN
              </Link>
            </div>
            <div
              className={`${styles.burger} ${open ? styles.open : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
              <ul className={`${styles.menu} ${open ? styles.active : ""}`}>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#location">Location</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.hero} id="contact">
        <Image
          src="/7.png"
          loading="eager"
          alt="Tow Truck"
          fill
          className={styles.heroImage}
        />
        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <h1>Tow Truck 24/7</h1>
            <p>• All across Georgia •</p>
            <a href="tel:+995555113096">
              <button className={styles.button}>📞 Call Now</button>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.call}>
        <h2 className={styles.phone}>Call Service</h2>
        <p>Contact us now and we will arrive as quickly as possible!</p>
        <div className={styles.buttons}>
          <a href="tel:+995577334880">
            <button className={styles.button}>577 33 48 80</button>
          </a>
          <p>or</p>
          <a href="tel:+995555113096">
            <button className={styles.button}>555 11 30 96</button>
          </a>
        </div>
      </section>
      <section className={styles.aboutSection} id="about">
        <h3 className={styles.text}>About Us</h3>
        <div className={styles.about}>
          We provide full towing services 24/7 across Georgia.
          <br />
          <br />
          Our team consists of experienced drivers and fast response service. We
          ensure safe and professional transportation of your vehicle.
          <br />
          <br />
          We have different types of tow trucks - small, medium and large,
          including crane-equipped trucks for difficult situations such as
          accidents or inaccessible locations.
          <br />
          <br />
          Our service is affordable. Price depends on distance, vehicle type and
          complexity. We serve all types of vehicles.
          <br />
          <br />
          Our tow truck service operates 24 hours a day in Tbilisi and all
          regions of Georgia. We provide fast roadside assistance, car towing,
          and vehicle transportation for all types of cars. If your vehicle
          breaks down or you need urgent help, call us anytime.
        </div>
      </section>
      <section className={styles.services} id="services">
        <h3 className={styles.text}>Our Services</h3>
        <div className={styles.wrapper}>
          <div className={styles.servicesContainer}>
            <Image
              src="/yellow.png"
              alt="Tow Truck"
              width={60}
              height={60}
              className={styles.car}
            />
            <div className={styles.service}>
              <p className={styles.card}>Small car towing</p>
              <p className={styles.serviceDescription}>
                Fast and safe transportation of light vehicles.
              </p>
            </div>
          </div>
          <div className={styles.servicesContainer}>
            <Image
              src="/green.png"
              alt="Tow Truck"
              width={60}
              height={60}
              className={styles.car}
            />
            <div className={styles.service}>
              <p className={styles.card}>Medium & large vehicles</p>
              <p className={styles.serviceDescription}>
                We handle vans and medium-sized equipment.
              </p>
            </div>
          </div>
          <div className={styles.servicesContainer}>
            <Image
              src="/red.png"
              alt="Tow Truck"
              width={60}
              height={60}
              className={styles.car}
            />
            <div className={styles.service}>
              <p className={styles.card}>Crane tow truck</p>
              <p className={styles.serviceDescription}>
                For damaged cars and heavy transport tasks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className={styles.gallerea}>Our work</h3>
        <div className={styles.images}>
          <Image
            src="/2.jpeg"
            width={150}
            height={110}
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            alt="work"
          />
          <Image
            src="/6.jpeg"
            width={150}
            height={110}
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            alt="work"
          />
          <Image
            src="/3.jpeg"
            width={150}
            height={110}
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            alt="work"
          />
          <Image
            src="/5.jpeg"
            width={150}
            height={110}
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            alt="work"
          />
          <Image
            src="/car (3).jpeg"
            width={150}
            height={110}
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            alt="work"
          />
          <Image
            src="/7.png"
            width={150}
            height={110}
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            alt="work"
          />
          <Image
            src="/4.jpeg"
            width={150}
            height={110}
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            alt="work"
          />
          <Image
            src="/car (1).jpeg"
            width={150}
            height={110}
            alt="work"
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
          />
          <Image
            src="/car (4).jpeg"
            width={150}
            height={110}
            alt="work"
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
          />
          <Image
            src="/1.jpeg"
            width={150}
            height={110}
            alt="work"
            style={{
              objectFit: "cover",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
            }}
          />
        </div>
        <p style={{ display: "none" }}>
          Professional 24/7 tow truck and roadside assistance in Tbilisi and
          across Georgia. Fast response, affordable prices, and safe vehicle
          transportation.
        </p>
        <p style={{ display: "none" }}>
          Tow truck service in Tbilisi Georgia. 24/7 roadside assistance, car
          towing, vehicle transport, emergency help.
        </p>
      </section>
      <footer className={styles.footer} id="location">
        <div className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <h3>Contact</h3>
            <p>📍 Tbilisi, Georgia</p>
            <a href="tel:+995555113096">📞 555 11 30 96</a>
            <a href="tel:+995577334880">📞 577 33 48 80</a>
            <div className={styles.socials}>
              <a href="https://www.tiktok.com/@khatiashvili9" target="_blank">
                TikTok
              </a>
              <a href="https://facebook.com" target="_blank">
                Facebook
              </a>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.3119330710415!2d44.85428357554987!3d41.687672677316215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dc099f6dc83%3A0x822129ffdec29a36!2zRXZha3VhdG9yaS_hg5Thg5Xhg5Dhg5nhg6Phg5Dhg6Lhg53hg6Dhg5g!5e1!3m2!1sen!2sge!4v1774175778960!5m2!1sen!2sge"
              loading="lazy"
              className={styles.mapFrame}
            ></iframe>
          </div>
        </div>
        <p className={styles.copy}>© 2026 Tow Truck</p>
      </footer>
    </main>
  );
}
