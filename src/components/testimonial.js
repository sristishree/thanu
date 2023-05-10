import React from 'react';
import PropTypes from 'prop-types';

//Material components
import Grid from '@material-ui/core/Grid';

//Styles
import './testimonial.css';

class Card extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="card" style={{ width: this.props.widthSetting }}>
                <h2>{this.props.title}</h2>
                <div className="line" style={{ backgroundColor: this.props.bgc }}></div>
                {this.props.content}
            </div>
        )
    }
}

class Link extends React.Component {
    render() {
        return (
            <a href={this.props.href}>{this.props.text}</a>
        )
    }
}

class Testimonials extends React.Component {
    constructor() {
        super()
        this.state = {
            yellow: '#fcd000',
            blue: '#0ebeff',
            green: '#47cf73',
            purple: '#ae63e4',
            pink: '#ff0080'
        }
    }
    render() {
        return (
            <div className="container-2">
                <h2 className="home-text11 HeadingTwo" style={{ paddingBottom: '20px' }}>
                    <span className="home-text12">Testimonials from Experienced People</span>
                </h2>
                <div className='container'>
                    <Card title="Jyotsna" bgc={this.state.yellow} widthSetting="460px"
                        content={<div>
                            <p>Do you still remember our first encounter in college? I do, very precisely...🤭</p>
                            <p>From making detailed diagrams on the Tamil Nadu map,
                                to finally making the trip happen,
                                you have always been an integral part of the revered organization 'Josritha' 🤣</p>
                            <p>Thankyou for all the times you have been my amma during my trips and otherwise.🙄</p>
                            <p>Thankyou for being an amazing friend.Happy 25th💃</p>
                            <p>May we continue to be the incredible friends that we are, even when you turn 'Ponchalis' 😆</p></div>} />
                    <Card title="Lalitha" bgc={this.state.green} widthSetting="750px"
                        content={<div><p>Osey Banda!</p>
                            <p>Congratulations on completing silver jubilee
                                Anukokunda roommates ayyam.
                                Kashta sukhalatho paatu pachallu - podulu kooda panchukunnam. 😛</p>
                            <p>Weekends room lo kurchuni kallu poyetattlu cinemalu chusam.
                                Kotha battalu veskoni fashion shows chesam. 🙈</p>
                            <p>Kaallu arigetattlu Greenglen motham tirigam.</p>
                            <p>Though I miss all these, the one thing I miss the most compared to everything else is your patience with me. 😭
                                Thanks for always listening to my rants and giving me unbiased and rational opinions. You are always the one for me to confide in. ❤️
                                Cheers to all those midnight life talks, gossips about people, singing and dancing together!
                            </p><p>Lots of love,
                                Lalli Banda. 🐱</p></div>} />
                    <Card title="Isha" bgc={this.state.purple} widthSetting="500px"
                        content={<div><p>A toast to that one college friend who became one of my closest friends
                            after coming out of college ....❣️</p>
                            <p>From doing reels on 'kashmir tu mai kanyakumari' to making me try all the delicaies
                                possible in a single go, we’ve done it all.</p>
                            <p>There hasn't been a day when we've meet and not had a blast.....
                                It has been and amazing with my favorite trio 'Josritha' 😍.  </p><br />
                            <p>Wish you many many happy returns of the day. Badhaiiyaan ji badhaiyaan...
                                for completing  a quater of your life, may your next quaters be filled with
                                more happiness than ever.</p></div>} />
                    <Card title="Lakshmi" bgc={this.state.green} widthSetting="600px"
                        content={<div><p>Through deadlines, meetings, and daily grind, 🤭</p><p>
                            You've been a friend who's hard to find, 🤩</p><br /><p>

                                We share laughs and stories every day, 🤣</p><p>
                                And sing our hearts out along the way. 🎵</p><br /><p>

                                Together we snack, and walk for miles, 😋</p><p>
                                And brighten up each other's smiles, 😁</p><br /><p>


                                May this special day bring all the things that you enjoy and wish for.
                                May you feel loved and blessed all the time! ❤️</p></div>} />
                    <Card title="Sristi" bgc={this.state.pink} widthSetting="700px"
                        content={<div><p>On this special day, I want to wish you all the happiness,
                            love, and blessings in the world. May your heart be filled with joy,
                            and may you always be surrounded by the people you love. 🥳</p>
                            <p>Thank you for being an incredible friend, and here's to many
                                more years of laughter, love, and adventure. And hope I never give you any more chances for the complaint - 'Chitti why am I the last one to know
                                all your gossips' 😉</p>
                            <p>Cheers to the Rameshwaram trip that is FINALLLY happening!</p>
                            <p>"As you turn twenty-five today</p><p>
                                May all happiness in life you treasure</p><p>
                                May you get lesser load at office, I pray 🙏</p><p>
                                May we get to make more reels together 💅"</p></div>} />
                    <Card title="Thanusha"
                        content={<video controls="true"
                            className="home-video"
                            style={{ width: '290px', height: '270px' }}
                        >
                            <source src="/thanu/playground_assets/thanusha_gallery/vid.mp4"></source>
                        </video>} />
                </div>
            </div >
        )
    }
}

export default Testimonials;