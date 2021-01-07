import React, { Component } from 'react';
import profilePic from "../images/profile_pic.jpg";

export class About extends Component {

    render() {
        return (
            <div className="about" id="about">
                <div className="about__title titles" data-aos="fade-left">About</div>
                    <div className="info__wrapper">
                    <div className="skills" data-aos="fade-right">
                        <h2 className="skills_title">Main Skills</h2>
                        <div className="skills_wrapper">
                            <div className="skill_bar"><div class="skill_bar_value value-90">Python</div></div>
                            <div className="skill_bar"><div class="skill_bar_value value-85">Javascript</div></div>
                            <div className="skill_bar"><div class="skill_bar_value value-90">HTML</div></div>
                            <div className="skill_bar"><div class="skill_bar_value value-80">CSS</div></div>
                            <div className="skill_bar"><div class="skill_bar_value value-75">Flask</div></div>
                            <div className="skill_bar"><div class="skill_bar_value value-60">Nodejs</div></div>
                            <div className="skill_bar"><div class="skill_bar_value value-80">SQL</div></div>
                            <div className="skill_bar"><div class="skill_bar_value value-60">Plotly</div></div>
                            <div className="skill_bar"><div class="skill_bar_value value-50">Spark</div></div>
                            <div className="skill_bar"><div class="skill_bar_value value-70">Git</div></div>
                        </div>
                    </div>
                    <div className="profile" data-aos="fade-left">
                        <img src={profilePic}></img>
                        <div className="description_wrapper">
                            <p className="description">Hi there, my name is Fernanda and I'm a recently graduated full stack developer currently looking for a job. I'ver work 2 years as a data engineer/full stack developer and this experience helped me learn a lot from both fields. Don't hesitate to contact me on linkedin.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default About;
