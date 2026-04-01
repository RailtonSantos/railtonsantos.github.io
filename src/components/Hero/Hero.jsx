import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import HeroImg from '../Image/HeroImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { logo, title, name, subtitles = [], cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const extractImage = (str) => {
    if (!str) return null;
    const imgMatch = str.match(/<img[^>]*>/);
    return imgMatch ? imgMatch[0] : null;
  };

  const cleanText = (str = '') => {
    return str.replace(/<img[^>]*>/g, '').trim();
  };

  useEffect(() => {
    if (!subtitles.length) return;

    const current = cleanText(subtitles[index]);
    let speed = deleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const nextText = current.substring(0, text.length + 1);
        setText(nextText);

        if (nextText === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const nextText = current.substring(0, text.length - 1);
        setText(nextText);

        if (nextText === '') {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % subtitles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, subtitles]);

  useEffect(() => {
    if (!subtitles.length) return;

    const current = cleanText(subtitles[index]);

    if (text === current && !deleting) {
      const t = setTimeout(() => setShowImage(true), 0);
      return () => clearTimeout(t);
    } else {
      setShowImage(false);
    }
  }, [text, deleting, index, subtitles]);

  const currentImg = extractImage(subtitles[index]);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <HeroImg alt="logo" filename={logo} className="HeroImg" />

          <h1 className="hero-title">
            {title || 'Hi, my name is'}
            <span className="nowrap">
              {` I'm `}
              <span className="text-color-main">{name || 'Your Name'}</span>
            </span>
            <br />
            <span className="terminal-cursor">
              {text}
              {showImage && currentImg && <span dangerouslySetInnerHTML={{ __html: currentImg }} />}
            </span>
          </h1>
        </Fade>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta px-2">
            <Link to="about" smooth duration={1000} className="down">
              <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
            </Link>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
