package com.cmu.cps498.utility.dtos;



public record AddCourseDto (
    String courseName,
    Integer contentId,
    Integer grade,
    String subject,
    Integer teacherId
    // TODO: add whatever else the user needs to register
){}
