import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useOutlet } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';

import './Home.css';
import HeaderMenu from '../../Components/HeaderMenu/HeaderMenu';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
  const outlet = useOutlet();
  const dispatch = useDispatch();

  return (
    <>
      <Header><HeaderMenu /></Header>
      <div className="Home" data-testid="Home">
        <section className='home-content'>
          {outlet ||
            <>
              <Carousel />
              <section id="about-us">

              </section>
              <section id="our-projects">

              </section>
              <section id="our-tutorials">

              </section>
              <section id="our-team">

              </section>
              <section id="contact-us">

              </section>
              <section id="log-in">

              </section>
            </>
          }
        </section>
        <aside className='sedebar'>
          <section className='our-articles'>

          </section>
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default Home;
