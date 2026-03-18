import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <header>
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
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#contact">კონტაქტი</a>
              </li>
              <li className={styles.navItem}>
                <a href="#about">ჩვენს შესახებ</a>
              </li>
              <li className={styles.navItem}>
                <a href="#location">სად გიპოვოთ?</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className={styles.hero} id="contact">
        <Image
          src="/logo.png"
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
          <a href="tel:+995577304880">
            <button className={styles.button}>577 30 48 80</button>
          </a>
          <p>ან</p>
          <a href="tel:+995555113096">
            <button className={styles.button}>577 11 30 96</button>
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
          ჩვენი გუნდი გამოირჩევა გამოცდილი მძღოლებითა და სწრაფი რეაგირებით, რაც
          განსაკუთრებით მნიშვნელოვანია ავარიის ან გაუთვალისწინებელი შემთხვევების
          დროს. ჩვენ უზრუნველვყოფთ თქვენი ავტომობილისა თუ ტექნიკის უსაფრთხო და
          პროფესიონალურ გადაზიდვას, თანამედროვე აღჭურვილობითა და გამოცდილი
          ოპერატორების დახმარებით. <br />
          <br />
          გვყავს სხვადასხვა ტიპის ევაკუატორები - პატარა, საშუალო და დიდი ზომის,
          მათ შორის „ობობა“ სისტემით აღჭურვილი ტექნიკა, რომელიც გამოიყენება რთულ
          სიტუაციებში, როგორიცაა ავარიის შემდეგ ამოყვანა ან მიუდგომელი
          ადგილებიდან ტრანსპორტირება. <br />
          <br />
          ჩვენი სერვისი ხელმისაწვდომია მისაღებ ფასად, ხარისხის შენარჩუნებით.
          ვემსახურებით ყველა ტიპის ავტომობილსა და ტექნიკას. დაგვიკავშირდით
          ნებისმიერ დროს მზად ვართ დაგეხმაროთ სწრაფად, უსაფრთხოდ და
          პროფესიონალურად.
        </div>
      </section>
      <section className={styles.services}>
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
                მძიმე ტექნიკისთვის „ობობა“ ევაკუატორი
              </p>
              <p className={styles.serviceDescription}>
                გვყავს დიდი ევაკუატორი „ობობა“ სისტემით, რომელიც გამოიყენება
                რთულ შემთხვევებში, ავარიის შემდეგ ამოყვანისთვის, რთული
                ადგილებიდან გადაყვანისა და დაზიანებული მანქანის უსაფრთხოდ
                დატვირთვისთვის.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.images}>
          <Image
            src="/car (3).jpeg"
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
            alt="work"
          />
          <Image
            src="/3.jpeg"
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
            alt="work"
          />
          <Image
            src="/2.jpeg"
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
            alt="work"
          />
          <Image
            src="/4.jpeg"
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
            alt="work"
          />
          <Image src="/car (1).jpeg" width={300} height={200} alt="work" />
          <Image src="/car (4).jpeg" width={300} height={200} alt="work" />
          <Image src="/1.jpeg" width={300} height={200} alt="work" />
        </div>
      </section>
      <footer className={styles.footer} id="location">
        <div className={styles.mapContainer}>
          <p className={styles.map}>ჩვენი მისამართი (Map)</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.2780390154836!2d44.85598874385995!3d41.68762564730519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440db7c920f357%3A0xc1cbabf040f1e4b3!2zMzYg4YOZ4YOQ4YOu4YOU4YOX4YOY4YOhIOGDkuGDluGDkOGDouGDmeGDlOGDquGDmOGDmuGDmCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOYIDAxOTA!5e1!3m2!1ska!2sge!4v1773832664234!5m2!1ska!2sge"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              borderRadius: "20px",
              boxShadow: "-4px 5px 5px #ffffff",
            }}
          ></iframe>
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.tiktok.com/@khatiashvili9?lang=en"
            target="_blank"
          >
            TikTok
          </a>
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>
        </div>
        <p>© 2026 Evakuatori</p>
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
