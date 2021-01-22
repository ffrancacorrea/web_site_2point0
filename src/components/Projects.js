import React, { Component } from 'react';

export class Projects extends Component {

    render() {
        return (
            <div className="projects" id="projects">
                <div className="projects_title titles" data-aos="fade-left">Projects</div>

                <div className="cards" data-aos="fade-up">
                    <div className="card">
                        <div className="card_image card_image_1"></div>
                        <div className="card_info">
                            <div className="project_title">Movie App</div>
                            <div className="project_description">A web application to fetch data created using the Movie DB API</div>
                            <a className="project_link" href="https://github.com/ffrancacorrea/movieApp">Go to project</a>
                            <a className="project_link_short" href="https://github.com/ffrancacorrea/movieApp">Code</a>
                        </div>
                        </div>
                    <div className="card">
                        <div className="card_image card_image_2"></div>
                        <div className="card_info">
                            <div className="project_title">Indeed Scraping</div>
                            <div className="project_description">Scraping of the site indeed to recover the mean of job salaries</div>
                            <a className="project_link" href="https://github.com/ffrancacorrea/indeed_scraping">Go to project</a>
                            <a className="project_link_short" href="https://github.com/ffrancacorrea/indeed_scraping">Code</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_image card_image_3"></div>
                        <div className="card_info">
                            <div className="project_title">Discord Bot</div>
                            <div className="project_description">A Nodejs discord bot that gives alert when someone uses the wrong channel</div>
                            <a className="project_link" href="https://github.com/o-presente-e-o-passado-do-futuro/polica-bot"><div className="link_content">Go to project</div></a>
                            <a className="project_link_short" href="https://github.com/o-presente-e-o-passado-do-futuro/polica-bot">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Projects;
