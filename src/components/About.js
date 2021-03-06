import React, { Component } from 'react'

import { Grid, Cell } from 'react-mdl';
import Education from './Education';

import Skills from './Skills';

import './About.css'

class About extends Component {
    render() {
        return (
            <div>
            <Grid>
              <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                  <img
                    src="https://scontent.fdac20-1.fna.fbcdn.net/v/t1.0-9/s960x960/81462619_1317280558459434_544930418130944000_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_eui2=AeHINtKbN9lTta028nrG6rYU_DrAMldRdW38OsAyV1F1baGtoaodu6OP5BKRINdO6tqQSBm7hPYLfx0GNmAZT90V&_nc_oc=AQnRBg1GlYCjYtP_lNdcglJVG0K61lCddb7qiJyxF82M21XfnmDHiGqTZbWPYrgTB9A&_nc_pt=1&_nc_ht=scontent.fdac20-1.fna&_nc_tp=7&oh=a9d78606ebdd93a1fd8cd9fcf436e6cd&oe=5ED167EC"
                    alt="avatar"
                    style={{height: '200px'}}
                     />
                </div>
    
                <h2 style={{paddingTop: '2em'}}>Sabbir Hossain</h2>
                <h4 style={{color: 'grey'}}>Programmer</h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <p>Hi I am Sabbir Hossain I'm currently studying Computer Science and Engineering in Daffodil International University. I love to develop for web and mobile platforms, it has always been my dream to become a professional in this sector. I'm also learning Java Script,React-Redux,NodeJS,ExpressJS, python,Django,AI beside my university courses. During free time I like to watch movies or tv shows .In the past I liked to working with android,but when i started my new journey with web then I leave from android platfrom.</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <h5>Address</h5>
                <p>Dhaka</p>
                <h5>Phone</h5>
                <p>**********</p>
                <h5>Email</h5>
                <p>sabbir.s.dk7@gmail.com</p>
                
                {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
              </Cell>
              <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
    
    
                <Education
                  startYear={2014}
                  endYear={2016}
                  schoolName="Shahid President Ziaur Rahman Degree College"
                  schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                   />
    
                   <Education
                     startYear={2017}
                     endYear={2021}
                     schoolName="Daffodil International University"
                     schoolDescription="I'm a student of Computer Science & Engineering who is very much passionate about developing for web and mobile platforms."
                      />
                    {/* <hr style={{borderTop: '3px solid #e22947'}} /> */}
    
                  {/* <h2>Experience</h2> */}
    
                {/* <Experience
                  startYear={2009}
                  endYear={2012}
                  jobName="First Job"
                  jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
    
                  <Experience
                    startYear={2012}
                    endYear={2016}
                    jobName="Second Job"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    /> */}
                  <hr style={{borderTop: '3px solid #e22947'}} />
                  <h2>Skills</h2>

                  <Skills
                    skill="javascript"
                    progress={75}
                    />
                     <Skills
                        skill="NodeJS /ExpressJS"
                        progress={60}
                        />
                        <Skills
                          skill="React/Redux"
                          progress={80}
                          />
                    <Skills
                      skill="HTML/CSS"
                      progress={90}
                      />
                      <Skills
                      skill="BootStrap"
                      progress={90}
                      />
                      <Skills
                      skill="Python"
                      progress={80}
                      />
                      <Skills
                      skill="Django"
                      progress={80}
                      />
                     
                          <Skills
                      skill="Database"
                      progress={70}
                      />
                      <Skills
                      skill="Wireless"
                      progress={50}
                      />
                      <Skills
                      skill="Java"
                      progress={50}
                      />
                      <Skills
                      skill="C"
                      progress={50}
                      />
    
    
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default About
