import React from 'react';

const Job = (props) => {

const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools
} = props.data;

const keywords = [role, level,...languages,...tools];

    return (
       <div className={featured ? "job-container job-container--borderLeft" : "job-container"}>
           <div className="logo">
                <img src={logo} alt="" />
           </div>
           <div className="part1">
               <div className="company">
                   <span className="cName">{company}</span>
                   {props.data.new && <span className="new">new!</span>}
                   {props.data.featured && <span className="featured">featured</span>}
               </div>
               <div className="position">{position}</div>
               <div className="details">
                   <span>{postedAt}</span>-
                    <span>{contract}</span>-
                    <span>{location}</span>
               </div>
           </div>
           <div className="part2">
                {keywords.map((key, id) =>
                <button className="btn" onClick={() => props.setKeywords(key)} key={id}>{key}</button>)}
           </div>
       </div>
    )
}

export default Job;
