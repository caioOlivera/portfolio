import React, { useState, useEffect } from "react";
import type { NextPage } from "next";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Dropdown from "../components/dropdown";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.scss";
import PictureOfMe from "../../public/images/[removal.ai]_tmp-61fbef991960f.png";
import PictureOfMe2 from "../../public/images/[removal.ai]_tmp-6216dffde99f8.png";
import site1 from "../../public/images/site1.png";
import site2 from "../../public/images/site2.png";
import site3 from "../../public/images/site3.png";
import picture from "../../public/images/site4.png";
import emoji from "../../public/images/waving-hand-sign_1f44b.png";
import previewPicture from "../../public/images/android-chrome-512x512.png";

const Aos = require("aos");
import "aos/dist/aos.css";

import {
  SiInstagram,
  SiGithub,
  SiLinkedin,
  SiDribbble,
  SiVsco,
  SiGmail,
} from "react-icons/si";

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
      <Head>
        <title>Oliveira Dev Portfolio</title>
        <meta
          name="Oliveira Dev Portfolio"
          content="This is Caio Oliveira personal website and portfolio."
        />

        <meta
          name="description"
          content="This is Caio Oliveira personal website and portfolio."
        />
        <meta
          name="keywords"
          content="Caio Oliveira, Portfolio, Dev, Personal Website"
        />
        <meta name="author" content="Caio Oliveira" />
        <meta property="og:title" content="Oliveira Dev Portfolio" />
        <meta
          property="og:description"
          content="This is Caio Oliveira personal website and portfolio."
        />
        <meta property="og:type" content="Website" />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1495634558368243712/1vlY4XAX_400x400.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <body className={styles.body}>
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <div className={styles.mainDiv}>
            <div className={styles.section1}>
              <div className={styles.firstContent}>
                <h1>
                  <span>Hello there</span>
                </h1>
                <Image
                  height="99%"
                  width="99%"
                  src={emoji}
                  alt="hand waiving emoji"
                />
              </div>
              <h2>I am Caio and this is my personal website.</h2>
              <h2>
                Here you can learn more about me, check some of my professional
                work and get in touch.
              </h2>
            </div>
            <div id="about-me" className={styles.section2}>
              <div className={styles.textContent}>
                <h3 data-aos="fade-right">About me</h3>
                <p data-aos="fade-right">
                  Hi, my name is Caio Oliveira, I am 21 years old and a Computer
                  Engineering degree student at Universidade Federal de Goiás
                  (Goiania, GO - Brazil). I have been learning and working with
                  front-end development for the last 2 years now and I also want
                  to become a Full Stack devolper in the future.
                  <br />
                  <br />
                  My current favorite development stack is: HTML5. CSS3. NextJS
                  as React framework. TypeScript. Sass as CSS Preprocessor.
                  Tailwind as CSS Framework. Learning GraphQL for fetching data.
                  Learning Jest and Cypress for testing.
                  <br />
                  <br />
                  Currently working at Kampana Digital but I am open to new
                  oportunities and challenges.
                  <br />
                  <br />
                  As of some fun facts about me and personal hobbies, I love
                  reading comics (my favorite character is Dr. Doom from
                  Marvel), watch sports and learn new things every single day.
                </p>
              </div>
              <div data-aos="fade-up" className={styles.imgCC}>
                <Image
                  width="410"
                  height="600"
                  src={PictureOfMe}
                  alt="Picture of Caio Oliveira"
                />
              </div>
            </div>
            <div id="projects" className={styles.section3}>
              <h3 data-aos="fade-in">Projects</h3>
              <div className={styles.content3}>
                <div data-aos="fade-right" className={styles.Grid}>
                  <h4>
                    <strong>Tutty Motors Website</strong>
                  </h4>
                  <div className={styles.imageContainer}>
                    <Link href="https://tuttymotors.vercel.app/" passHref>
                      <Image
                        width="900"
                        height="450px"
                        src={site1}
                        alt="Picture of Tutty Site"
                      />
                    </Link>
                  </div>
                  <p>
                    This was my first professional website using front-end
                    tecnologies. I teamed up with another collaborator at ELO Jr
                    and we built it using NextJS, TS, Sass and Strapi. I was
                    responsible for the front page, header, stocking and about
                    pages.
                  </p>
                </div>
                <div data-aos="fade-up" className={styles.Grid}>
                  <h4>
                    <strong>Zupot Landing Page</strong>
                  </h4>
                  <div className={styles.imageContainer}>
                    <Link
                      href="https://lp.zupot.com.br/lp-primeiro-ciclo"
                      passHref
                    >
                      <Image
                        width="900"
                        height="450px"
                        src={site2}
                        alt="Picture of Zupot Landing Page"
                      />
                    </Link>
                  </div>
                  <p>
                    This is one of countless Landings Pages I have made at
                    Kampana. This one in particular was made for a tech company
                    called Zupot in a first cicle strategy. At Kampana I was
                    responsible for building all LP structure in RD Station and
                    then use CSS to stylize it.
                  </p>
                </div>
                <div data-aos="fade-left" className={styles.Grid}>
                  <h4>
                    <strong>Tudaço Stores Page</strong>
                  </h4>
                  <div className={styles.imageContainer}>
                    <Link href="https://www.lojastudaco.com.br/lojas" passHref>
                      <Image
                        width="900"
                        height="450px"
                        src={picture}
                        alt="Picture of Tudaco Stores Page"
                      />
                    </Link>
                  </div>
                  <p>
                    This is a code maintenance I made for an e-commerce using
                    HTML and CSS. The store is hosted at Tray but the platform
                    accepts file uploading so I downloaded the old file and
                    redesingned the whole page using the Google Maps iFrames.
                  </p>
                </div>
              </div>
              <div id="contact" className={styles.section4}>
                <h3 data-aos="fade-in">Contact</h3>
                <h4 data-aos="fade-in">
                  Here you can contact and find me in all my socials.
                </h4>
                <div data-aos="fade-in" className={styles.iconsContainer}>
                  <Link
                    href="https://www.linkedin.com/in/caio-oliveira-6889001bb/"
                    passHref
                  >
                    <SiLinkedin
                      className={styles.icon}
                      size="3rem"
                      color="#ffffff"
                    />
                  </Link>
                  <Link href="https://github.com/caioOlivera" passHref>
                    <SiGithub
                      className={styles.icon}
                      size="3rem"
                      color="#ffffff"
                    />
                  </Link>
                  <Link href="mailto:caio.goncalves.pro@gmail.com" passHref>
                    <SiGmail
                      className={styles.icon}
                      size="3rem"
                      color="#ffffff"
                    />
                  </Link>
                </div>
                <div data-aos="fade-in" className={styles.iconsContainer}>
                  <Link
                    href="https://www.instagram.com/caio_goncalves_/"
                    passHref
                  >
                    <SiInstagram
                      className={styles.icon}
                      size="3rem"
                      color="#ffffff"
                    />
                  </Link>
                  <Link href="https://vsco.co/caio-lunar/gallery" passHref>
                    <SiVsco
                      className={styles.icon}
                      size="3rem"
                      color="#ffffff"
                    />
                  </Link>
                  <Link href="https://dribbble.com/caiolunar" passHref>
                    <SiDribbble
                      className={styles.icon}
                      size="3rem"
                      color="#ffffff"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <p>Developed by Caio Oliveira. 2022.</p>
          </div>
        </body>
      </main>
    </>
  );
};

export default Home;
