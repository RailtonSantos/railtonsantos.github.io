import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import HeroImg from '../Image/HeroImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { logo, title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

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
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta px-2">
            <Link to="about" smooth duration={1000} className="down">
              {/* {cta || 'Know more'} */}
              <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
            </Link>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
