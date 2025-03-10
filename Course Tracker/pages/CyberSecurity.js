import React from "react";
import CourseList from "../components/CourseList";

const cyberSecurityCourses = [{title: "Cybersecurity", description: "This course offers cybersecurity tricks and tips to keep your data safe."},
{title: "Cybersecurity", description: "This course offers cybersecurity tricks and tips to keep your data safe."},
{title: "Cybersecurity", description: "This course offers cybersecurity tricks and tips to keep your data safe."},
{title: "Cybersecurity", description: "This course offers cybersecurity tricks and tips to keep your data safe."},
{title: "Cybersecurity", description: "This course offers cybersecurity tricks and tips to keep your data safe."}];

const CyberSecurity = () => {
    return (
        <div className="section">
            <h1>Cybersecurity</h1>
        <CourseList courses={cyberSecurityCourses}/>
        </div>
    ) ; 
};

export default CyberSecurity;
