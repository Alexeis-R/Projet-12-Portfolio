import React from "react";
import "./skills.scss"

function Skills () {
    return (
        <div className="skills">
      <div className="left">
        <div className="info">
          <h3>Quelles sont mes compétences ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            officia ea fugiat consequuntur doloremque quisquam illo ducimus
            numquam, expedita amet, totam ipsa excepturi itaque nobis labore
            architecto repellendus praesentium quasi.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="item">
          <i className="bx bxl-html5"></i>
        </div>
        <div className="item">
          <i className="bx bxl-css3"></i>
        </div>
        <div className="item">
          <i className="bx bxl-sass"></i>
        </div>
        <div className="item">
          <i className="bx bxl-git"></i>
        </div>
        <div className="item">
          <i className="bx bxl-github"></i>
        </div>
        <div className="item">
          <i className="bx bxl-javascript"></i>
        </div>
        <div className="item">
          <i className="bx bxl-react"></i>
        </div>
        <div className="item">
          <i className="bx bxl-nodejs"></i>
        </div>
      </div>
    </div>
    )
}

export default Skills;