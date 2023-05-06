import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Confetti from '../components/confetti'
import Footer from '../components/footer'
import './home.css'
import Testimonials from '../components/testimonial'

const Home = (props) => {
  // State for confetto element
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };
  useEffect(() => {
    let timeoutId;

    if (isShown) {
      timeoutId = setTimeout(() => {
        setIsShown(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isShown]);
  return (
    <div className="home-container">
      {
        isShown &&
        <Confetti height={props.heightVal} width={props.widthVal} />
      }
      <Helmet>
        <title>Let's Partyyyy!!</title>
        <meta property="og:title" content="Party" />
      </Helmet>
      <Header click={handleClick}></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-heading">HAPPY BIRTHDAY</h1>
            <h1 className="home-text">TO A SPECIAL PERSON</h1>
            <span className="home-text01">
              Our beloved, Mandala Thanusha celebrates her birthday today on the
              11th of May. She turns 25 this year. On this special occassion,
              let&apos;s take a look at some cute pics to see her transformation
              through the years, and also to enjoy the heartfelt wishes poured
              in by her friends.
            </span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/1682510267263-1500h.jpg"
        className="home-image"
      />
      <section className="home-features">
        <h2 className="home-text11 HeadingTwo" style={{ paddingBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <span className="home-text12" style={{ margin: 'auto' }}>Her Features</span>
        </h2>
        <div className="home-container04">
          <FeatureCard
            text="Wanna make a reel? She will not just alwayss be ready to partner you, but will also patiently teach you the steps."
            title="Chirpy"
            image_src="/playground_assets/bird.jpg"
          ></FeatureCard>
          <FeatureCard
            text="She is the BIGGEST fan of black ever. Don't believe us? Go to her in a black tshirt and see for yourself!"
            title="Black Love"
            image_src="/playground_assets/black.png"
          ></FeatureCard>
          <FeatureCard
            text="With her (almost daily) dosage of scoldings, she makes you feel more at home than home itself."
            title="Motherly"
            image_src="/playground_assets/mother.png"
          ></FeatureCard>
          <FeatureCard
            text="Her sense of humour knows no bound. Ask her to crack a joke in Hindi and witness the magic!"
            title="So 'funny'"
            image_src="/playground_assets/funny.jpg"
          ></FeatureCard>
        </div>
      </section>
      <div className="home-features-central home-container25">
        <h2 className="home-text11 HeadingTwo" style={{ paddingBottom: '20px' }}>
          <span className="home-text12">The Lady Herself...</span>
        </h2>
        <span className="home-text15">
          <span className="home-text16" style={{ backgroundColor: 'transparent' }}>
            Magnificently talented and unstoppably hardworking.
          </span>
        </span>
        <div className="home-features" style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '80px' }}>
          <video controls="true"
            className="home-iframe"
            style={{ width: '475px', height: '268px' }}
            sandbox="true"
          >
            <source src="/playground_assets/thanusha_design.mp4"></source>
          </video>
          <video controls="true"
            className="home-video"
            style={{ width: '475px', height: '268px' }}
          >
            <source src="/playground_assets/thanu_design.mp4"></source>
          </video>
        </div>
      </div>
      <section className="home-testimonials">
        <div className="home-container07">
          <div className="home-container08">
            <div className="home-container09">
              <h2 className="home-text04 HeadingOne">Come join us in the celebration</h2>
              <p className="home-text05 Lead">
                <span className="home-text05">
                  We wish the happiest birthday to our old friend Thanusha!
                  And yes, by old we might literally mean it.
                  Welcome to the club of 25+ oldies 🧓
                </span>
              </p>
              <p className="home-text07 Body">
                <span className="home-text08">
                  &quot;On this birthday, we hope you find everything you have been looking for in life <br />
                  (FYI: We know exactly what it is 😏, and don't worry, we are on a constant search for it (him)) <br />
                  If not, you can always ask us for more gifts.
                  That we would totally ignore you is another thing 🤭...&quot;
                </span>
              </p>
              <p className="home-text09">Love and peace from us to you!</p>
              <p className="home-text10 Small">Your awesome friends</p>

            </div>
          </div>
          <div className="home-logos">
            <div className="home-container30" style={{ width: 250 + 'px' }}>
              <img
                alt="image"
                src="/playground_assets/cake.png"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image12"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <Testimonials />
      <Footer></Footer>
    </div>
  )
}

export default Home
