import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

    const showBook = true;
    const showBlog = true;
    const showCourse = true;

    // Element Variable
    let courseComponent;
    if (showCourse) {
        courseComponent = <CourseDetails />;
    }

    return (
        <div style={{ padding: "20px" }}>

            <h1>Blogger App</h1>

            {/* 1. if...else */}
            {showBook ? <BookDetails /> : <h3>No Book Details</h3>}

            <hr />

            {/* 2. Logical && */}
            {showBlog && <BlogDetails />}

            <hr />

            {/* 3. Element Variable */}
            {courseComponent}

        </div>
    );
}

export default App;