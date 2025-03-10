import React from "react";
import CourseList from "../components/CourseList";

const webDevelopmentCourses = [{title: "React Basics", description: "This course offers basic React functionality and styling."},
{title: "React Basics", description: "This course offers basic React functionality and styling."},
{title: "React Basics", description: "This course offers basic React functionality and styling."},
{title: "React Basics", description: "This course offers basic React functionality and styling."},
{title: "React Basics", description: "This course offers basic React functionality and styling."}];

const WebDevelopment = () => {
    return (
        <div className="section">
            <h1>Web Development</h1>
        <CourseList courses={webDevelopmentCourses}/>
        </div>
    ) ; 
};

export default WebDevelopment;