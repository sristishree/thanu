import React from 'react';
import PropTypes from 'prop-types';

//Material components
import Grid from '@material-ui/core/Grid';

//Styles
import './testimonial.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.title}</h2>
                <div className="line" style={{ backgroundColor: this.props.bgc }}></div>
                <p>{this.props.content}</p>
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
                    <Card title="Jyotsna" bgc={this.state.yellow} content="Hum isse pehle itnii dusht insaan se to mile hi nhi the. Na chain se ghoomne deti hai, na khud sath chalti hai ghumne, jeena haraam ki hui hai!" />
                    <Card title="Bhargavi" bgc={this.state.blue} content="Inkem inkem inkem kaavale,
                            Chaalle idhi chaale,
                            Neekai nuvve vacchi vaalave,
                            Ikapai thiranaalley,
                            Gundellona vegam penchaave,
                            Gummamloki holy thecchaave,
                            Nuvvu pakkanunte inthenemone,
                            Naakokko ganta okko janme" />
                    <Card title="Lalitha" bgc={this.state.green} content="Angulam nadavakunda,
                            Payaname cheripomanaana,
                            Amrutham pakanunna,
                            Vishamulaaga chusaana,

                            Yenti.. Yenti.. Yenti..
                            Ee kotha varasa,
                            Nakke teliyani nanne,
                            Nenu kalisa" />
                    <Card title="Isha" bgc={this.state.purple} content="Behh mujhe kuchh ni bolna" />
                    <Card title="Sristi" bgc={this.state.pink} content="Sochti hu kya bolna h" />
                </div>
            </div>
        )
    }
}

export default Testimonials;