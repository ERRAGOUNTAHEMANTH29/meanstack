import "../filterbox/filter.css";
import React from 'react';
export default function Filterbox(){
    return(

<div class="filter-box">
  <div class="filter-dropdown">
    <select class="filter-select" id="job-level" name="job-level">
      <option>Job Level</option>
      <option>Entry</option>
      <option>Mid-Senior</option>
      <option>Director</option>
      <option>Experienced</option>
    </select>
    <select class="filter-select" id="job-function" name="job-function" >
      <option>JobFunction</option>
      <option>IT</option>
      <option>Management</option>
      <option>Education</option>
      <option>Core</option>
    </select>
    <select class="filter-select" id="employment" name="employment" >
      <option>Employment Type</option>
      <option>Internship</option>
      <option>Part time</option>
      <option>full time</option>
      <option>shifts</option>
    </select>
    <select class="filter-select" id="location" name="location" >
      <option>Locations</option>
      <option>Remote</option>
      <option>USA</option>
      <option>UnitedKIngdom</option>
      <option>Germany</option>
    </select>
    <select class="filter-select" id="education" name="education" >
      <option>Education</option>
      <option>HighSchool</option>
      <option>SecondarySchool</option>
      <option>Degree</option>
      <option>Masters</option>
    </select>
    
  </div></div>
    )
}