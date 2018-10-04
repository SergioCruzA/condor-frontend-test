import React from 'react';
import Course from './Course';

const CourseList = ({ courses }) => {
    return (
        <div>
            {
                courses.map((course, i) => {
                    return (
                      <Course 
                          key={i} 
                          id={course.id} 
                          name={course.name}
                          textImg={course.provider.name}
                          credits={course.maximumCredits}
                          price={course.price}
                          rating={course.rating}
                      />
                    );
                })
            }
        </div>
    );
}

export default CourseList;