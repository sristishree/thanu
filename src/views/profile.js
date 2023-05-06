import React, { useState, useRef, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import OutlineBlueButton from '../components/outline-blue-button'
import Footer from '../components/footer'
import ImageRenderer from '../components/image-renderer'
import Confetti from '../components/confetti'

import './profile.css'

const Profile = (props) => {
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

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    <div className="profile-container" ref={confetiRef}>
      {
        isShown &&
        <Confetti height={props.heightVal} width={props.widthVal} />
      }
      <Helmet>
        <title>Profile - Birthday Girl</title>
        <meta property="og:title" content="Profile - Birthday Girl" />
      </Helmet>
      <Header click={handleClick}></Header>
      <div className="profile-profile">
        <img
          alt="image"
          src="/thanu/playground_assets/profile.jpg"
          className="profile-image"
        />
        <div className="profile-container01">
          <div className="profile-container02">
            <h4 className="profile-text">Mandala Thanusha</h4>
          </div>
          <div className="profile-container03">
            <span className="profile-text01">
              <span className="profile-text02">5</span>
              <span> Posts</span>
            </span>
            <span className="profile-text04">
              <span className="profile-text05">194</span>
              <span> Followers</span>
            </span>
            <span>
              <span className="profile-text08">450</span>
              <span> Following</span>
            </span>

          </div>
          <span className="Medium">
            Introducing the one and only Thanusha, the queen of grapevine.
            Since the first time we met her in 2016, she has been dishing out all the latest juicy gossip from all corners of
            the world and serving them fresh to us. Other than being this storyteller that she is, she is also an amazing listener.
            Whenever you need someone to talk to, she is always there to lend an ear and help you navigate whatever life throws your way.
            <br /> Apart from these, she has a boundless love for the Bangalore cherry blossoms... 😛
          </span>
        </div>
      </div>
      <div className="home-features colorful" backgrounf>
        <h2 className="home-text11 HeadingTwo" style={{ paddingBottom: '20px' }}>
          <span className="home-text12">Down the memory lane...</span>
        </h2>
        <ImageRenderer />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profile
