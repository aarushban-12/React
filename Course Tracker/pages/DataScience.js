import React from "react";
import CourseList from "../components/CourseList";

const dataScienceCourses = [{title: "Data Science", description: "This course offers dataScience tricks and tips to keep your data safe."},
{title: "Data Science", description: "This course offers dataScience tricks and tips to keep your data safe."},
{title: "Data Science", description: "This course offers dataScience tricks and tips to keep your data safe."},
{title: "Data Science", description: "This course offers dataScience tricks and tips to keep your data safe."},
{title: "Data Science", description: "This course offers dataScience tricks and tips to keep your data safe."}];

const DataScience = () => {
    return (
        <div className="section">
            <h1>Data Science</h1>
        <CourseList courses={dataScienceCourses}/>
        </div>
    ) ; 
};

export default DataScience;