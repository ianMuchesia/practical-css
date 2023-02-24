import React from "react";
import './experience.css'
import { FiBell } from "react-icons/fi";
import { CiHeadphones } from "react-icons/ci";
import { AiOutlineApi } from "react-icons/ai";
import { IoLogoWebComponent } from "react-icons/io5";
const Experience = () => {
  return (
    <section>
      <div className="section-center">
        <div className="section-experience">
          <div className="section-one">
            {/* item one */}
            <div className="item-one">
            <span className="icon-experience bell"><FiBell/></span>
            <h3>Team Accounts</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem doloribus aspernatur ea doloremque dolorum.
            </p>
          </div>
          
          {/* item two */}
                 <div className="item-two">
            <span className="icon-experience headphones"><CiHeadphones/></span>
            <h3>Customer Support</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem doloribus aspernatur ea doloremque dolorum.
            </p>
          </div>
            </div>
          {/* end of section one*/}
          <div className="section-two">
            <div className="item-one">
            <span className="icon-experience web"><IoLogoWebComponent/></span>
            <h3>Digital Agency</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem doloribus aspernatur ea doloremque dolorum.
            </p>
            </div>
            {/* item two */}
              <div className="item-two">
            <span className="icon-experience API"><AiOutlineApi/></span>
            <h3>API Reference</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem doloribus aspernatur ea doloremque dolorum.
            </p>
            </div>
          </div>
          {/* end of section two */}
         <div className="section-three">
            <h6>Our Services</h6>
            <h1>Ultimate Experience</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic culpa dolores cumque fuga odit nobis qui, magni eveniet blanditiis harum.</p>
          </div>
          {/* end of three */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
