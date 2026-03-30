"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="Evakuatori"
              width={50}
              height={50}
              style={{ borderRadius: "50%", marginTop: "5px" }}
            />
            <h1 className={styles.logo}>ევაკუატორი</h1>
          </div>
          <div className={styles.navContainer}>
            <nav className={styles.nav}>
              <ul className={`${styles.navList} ${open ? styles.active : ""}`}>
                <li className={styles.navItem}>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    კონტაქტი
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#about" onClick={() => setOpen(false)}>
                    ჩვენს შესახებ
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#services" onClick={() => setOpen(false)}>
                    სერვისები
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#location" onClick={() => setOpen(false)}>
                    სად გვიპოვით?
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
                  <a href="#contact">კონტაქტი</a>
                </li>
                <li>
                  <a href="#about">ჩვენს შესახებ</a>
                </li>
                <li>
                  <a href="#services">სერვისები</a>
                </li>
                <li>
                  <a href="#location">სად გვიპოვით?</a>
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
          alt="Evakuatori"
          fill
          className={styles.heroImage}
        />
        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <h1>ევაკუატორები 24/7-ზე</h1>
            <p>• მთელი საქართველოს მასშტაბით •</p>
            <a href="tel:+995555113096">
              <button className={styles.button}>📞 დარეკე ახლავე</button>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.call}>
        <h2 className={styles.phone}>გამოძახება</h2>
        <p>დაგვიკავშირდი ახლავე და მოვალთ უმოკლეს დროში!</p>
        <div className={styles.buttons}>
          <a href="tel:+995555113096">
            <button className={styles.button}>577 11 30 96</button>
          </a>
          <p>ან</p>
          <a href="tel:+995577304880">
            <button className={styles.button}>577 30 48 80</button>
          </a>
        </div>
      </section>
      <section className={styles.aboutSection} id="about">
        <h3 className={styles.text}>ჩვენს შესახებ</h3>
        <div className={styles.about}>
          ჩვენ გთავაზობთ ევაკუატორების სრულ მომსახურებას 24/7-ზე, მთელი
          საქართველოს მასშტაბით.
          <br />
          <br />
          ჩვენი გუნდი გამოირჩევა გამოცდილი მძღოლებითა და სწრაფი რეაგირებით. ჩვენ
          უზრუნველვყოფთ თქვენი ავტომობილისა თუ ტექნიკის უსაფრთხო და
          პროფესიონალურ გადაზიდვას. <br />
          <br />
          გვყავს სხვადასხვა ტიპის ევაკუატორები - პატარა, საშუალო და დიდი ზომის,
          მათ შორის ამწე-მანიპულატორი სისტემით აღჭურვილი, რომელიც გამოიყენება
          ტვირთის გადასატანად, რთულ სიტუაციებში, როგორიცაა ავარიის შემდეგ
          ამოყვანა ან მიუდგომელი ადგილებიდან ტრანსპორტირება. <br />
          <br />
          ჩვენი სერვისი ხელმისაწვდომია მისაღებ ფასად. ფასი დამოკიდებულია
          გადაყვანის მანძილზე, ავტომობილის ზომაზე და სირთულეზე. ვემსახურებით
          ყველა ტიპის ავტომობილსა და ტექნიკას. დაგვიკავშირდით ნებისმიერ დროს.
        </div>
      </section>
      <section className={styles.services} id="services">
        <h3 className={styles.text}>ჩვენი სერვისები</h3>
        <div className={styles.wrapper}>
          <div className={styles.servicesContainer}>
            <Image
              src="/yellow.png"
              alt="Evakuatori"
              width={60}
              height={60}
              className={styles.car}
            />
            <div className={styles.service}>
              <p className={styles.card}>მცირე ზომის ავტომობილების გადაყვანა</p>
              <p className={styles.serviceDescription}>
                გადაგვყავს მსუბუქი ავტომობილები სწრაფად და უსაფრთხოდ, მთელი
                საქართველოს მასშტაბით.
              </p>
            </div>
          </div>
          <div className={styles.servicesContainer}>
            <Image
              src="/green.png"
              alt="Evakuatori"
              width={60}
              height={60}
              className={styles.car}
            />
            <div className={styles.service}>
              <p className={styles.card}>
                საშუალო და დიდი ავტომობილების გადაყვანა
              </p>
              <p className={styles.serviceDescription}>
                მოვემსახურებით მიკროავტობუსებსა და საშუალო ზომის ტექნიკას
                სპეციალური ევაკუატორით.
              </p>
            </div>
          </div>
          <div className={styles.servicesContainer}>
            <Image
              src="/red.png"
              alt="Evakuatori"
              width={60}
              height={60}
              className={styles.car}
            />
            <div className={styles.service}>
              <p className={styles.card}>
                მძიმე ტექნიკისთვის ამწე-მანიპულატორი
              </p>
              <p className={styles.serviceDescription}>
                გვყავს დიდი ევაკუატორი ამწე-მანიპულატორით, რომელიც გამოიყენება
                დაზიანებული მანქანის უსაფრთხოდ დატვირთვისთვის და ასევე ტვირთის
                გადასატანად.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className={styles.gallerea}>ფოტო გალერეა</h3>
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
      </section>
      <section className={styles.advantages}>
        <h4>რატომ ჩვენ?</h4>
        <div className={styles.texts}>
          <p>✔ 1000+ კმაყოფილი კლიენტი</p>
          <p>✔ მისაღები ფასები</p>
          <p>✔ მომსახურება 24/7-ზე </p>
          <p>✔ სწრაფი რეაგირება</p>
        </div>
      </section>
      <footer className={styles.footer} id="location">
        <div className={styles.footerContainer}>
          <div className={styles.footerInfo}>
            <h3>კონტაქტი</h3>
            <p>📍 თბილისი, საქართველო</p>
            <a href="tel:+995555113096">📞 555 11 30 96</a>
            <a href="tel:+995577304880">📞 577 30 48 80</a>

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
        <p className={styles.copy}>© 2026 Evakuatori</p>
      </footer>
      <div className={styles.floating}>
        <a href="tel:+995555113096" className={styles.callBtn}>
          📞
        </a>
        <a
          href="https://wa.me/995555113096"
          target="_blank"
          className={styles.whatsappBtn}
        >
          💬
        </a>
      </div>
    </main>
  );
}
