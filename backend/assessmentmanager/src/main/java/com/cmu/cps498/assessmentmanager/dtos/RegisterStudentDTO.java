package com.cmu.cps498.assessmentmanager.dtos;

public record RegisterStudentDTO(
        long studentId,
        long courseId,
        long instructorId
)
{ }
