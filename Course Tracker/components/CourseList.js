import React from "react";
import Course from "./Course";

const CourseList = ({courses}) => {
    return (
        <div>
            {
                //This function is mapping each course to an index and passing it to Course.js
                courses.map((course , index) => (
                    <Course key={index} title={course.title} description={course.description}/>
                ))
            }
        </div>
    );
}

export default CourseList;