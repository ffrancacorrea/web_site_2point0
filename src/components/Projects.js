import React, { Component } from 'react';

export class Projects extends Component {
    render() {
        return (
            <div className="projects" id="projects">
                <div className="projects_title titles">Projects</div>
                <div className="projects_wrapper">
                    <a className="project_card card_1" alt="covid_analysis" href="https://github.com/ffrancacorrea/covid-19-analysis">
                            <div className="card_image card_image_1"></div>
                            <p className="card_info">An analysis of the impact of coivd-19 made using the CSSE data repository</p>
                    </a>
                    <a className="project_card card_2" alt="salary_scraping" href="https://github.com/ffrancacorrea/indeed_scraping">
                            <div className="card_image card_image_2"></div>
                            <p className="card_info">Scraping of the site indeed to recover the mean of data engineer salaries</p>
                    </a>
                    <a className="project_card card_3" alt="discord" href="https://github.com/o-presente-e-o-passado-do-futuro/polica-bot">
                            <div className="card_image card_image_3"></div>
                            <p className="card_info">A discord bot that gives alert when someone uses the wrong channel</p>
                    </a>
                </div>
            </div>
        )
    }
}


export default Projects;
