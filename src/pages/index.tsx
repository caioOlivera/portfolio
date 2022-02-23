import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Dropdown from "../components/dropdown";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.scss";
import PictureOfMe from "../../public/images/[removal.ai]_tmp-61fbef991960f.png";
import site1 from "../../public/images/site1.png";
import site2 from "../../public/images/site2.png";
import site3 from "../../public/images/site3.png";
import picture from "../../public/images/site4.png";
import emoji from "../../public/images/waving-hand-sign_1f44b.png";
import previewPicture from "../../public/images/android-chrome-512x512.png";

import {
  SiInstagram,
  SiGithub,
  SiLinkedin,
  SiDribbble,
  SiVsco,
  SiGmail,
} from "react-icons/si";

const Home: NextPage = () => {
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
              <h2>This is my personal website.</h2>
              <h2>
                Here you can learn more about me, check some of my professional
                work and get in touch.
              </h2>
            </div>
            <div id="about-me" className={styles.section2}>
              <div className={styles.textContent}>
                <h3>About me</h3>
                <p>
                  Hi, my name is Caio Oliveira, I am 21 years old and a Computer
                  Engineering degree student at Universidade Federal de Goiás
                  (Goiania, GO - Brazil). I have been learning and working with
                  front-end development for the last 2 years now and I also want
                  to become a Full Stack devolper in the future. My current
                  favorite development stack is NextJS as React framework -
                  TypeScript - Sass or Tailwind. I am learning GraphQL to fetch
                  data and Jest/Cypress/React-testing-library for testing.
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
              <div className={styles.imgCC}>
                <Image
                  width="410"
                  height="600"
                  src={PictureOfMe}
                  alt="Picture of me"
                />
              </div>
            </div>
            <div id="projects" className={styles.section3}>
              <h3>Projects</h3>
              <div className={styles.content3}>
                <div className={styles.Grid}>
                  <h4>Tutty Motors Website</h4>
                  <div className={styles.imageContainer}>
                    <Link href="https://tuttymotors.vercel.app/" passHref>
                      <Image
                        width="900"
                        height="450px"
                        src={site1}
                        alt="site1"
                      />
                    </Link>
                  </div>
                  <p>
                    My first professional website made
                    <br /> using Next, TS and Sass.
                  </p>
                </div>
                <div className={styles.Grid}>
                  <h4>Zupot Landing Page</h4>
                  <div className={styles.imageContainer}>
                    <Link
                      href="https://lp.zupot.com.br/lp-primeiro-ciclo"
                      passHref
                    >
                      <Image
                        width="900"
                        height="450px"
                        src={site2}
                        alt="site2"
                      />
                    </Link>
                  </div>
                  <p>
                    One of countless Landings Pages I have made <br /> at
                    Kampana.
                  </p>
                </div>
                <div className={styles.Grid}>
                  <h4>Tudaço Stores Page</h4>
                  <div className={styles.imageContainer}>
                    <Link href="https://www.lojastudaco.com.br/lojas" passHref>
                      <Image
                        width="900"
                        height="450px"
                        src={picture}
                        alt="site3"
                      />
                    </Link>
                  </div>
                  <p>
                    Code maintenance in an e-commerce using <br />
                    HTML, CSS and JS.
                  </p>
                </div>
              </div>
              <div id="contact" className={styles.section4}>
                <h3>Contact</h3>
                <h4>Here you can contact and find me in all my socials.</h4>
                <div className={styles.iconsContainer}>
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
                <div className={styles.iconsContainer}>
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
            <p>Developed by me. 2022.</p>
          </div>
        </body>
      </main>
    </>
  );
};

export default Home;
