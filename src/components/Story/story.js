import React, { useState } from "react";
import "./story.css";
import gutola from "./img/gutola.png";
import giovanna from "./img/giovanna.png";
import aiai from "./img/aiai.png";
import chapado from "./img/chapado.png";
import camila from "./img/camila.png";
import proa from "./img/proa.png";
import caue from "./img/caue.png";
import burguer from "./img/burguer.png";
import sasa from "./img/sasa.png";

function Story( ) {
    return (
        
<div className="story_box">
    <div className="story_box2">
        <ul className="mini_box">
            <li className="o_story">
                <img className="story" src={gutola} alt=""/>
                <div className="user_name">gustavo...</div>
            </li>
            <li className="o_story">
                <img className="story" src={giovanna} alt=""/>
                <div className="user_name">idiotmo...</div>
            </li>
            <li className="o_story">
                <img className="story" src={sasa} alt=""/>
                <div className="user_name">sasakkj.x</div>
            </li>
            <li className="o_story">
                <img className="story" src={camila} alt=""/>
                <div className="user_name">ca._._.m</div>
            </li>
            <li className="o_story">
                <img className="story" src={chapado} alt=""/>
                <div className="user_name">coisaspv...</div>
            </li>
            <li className="o_story">
                <img className="story" src={proa} alt=""/>
                <div className="user_name">instituto...</div>
            </li>
            <li className="o_story">
                <img className="story" src={caue} alt=""/>
                <div className="user_name">cauemoura</div>
            </li>
            <li className="o_story">
                <img className="story" src={burguer} alt=""/>
                <div className="user_name">burgersh...</div>
            </li>
            <li className="o_story">
                <img className="story" src={aiai} alt=""/>
                <div className="user_name">ribeiroaqui</div>
            </li>
            
        </ul>
    </div>
</div>

    )
}
export default Story;


