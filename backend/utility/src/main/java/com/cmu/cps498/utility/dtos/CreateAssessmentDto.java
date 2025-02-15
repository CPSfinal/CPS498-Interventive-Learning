package com.cmu.cps498.utility.dtos;


import java.util.List;

public record CreateAssessmentDto(
    String courseName,
    Integer contentId,
    Integer skillId,
    List<String> questions,
    List<String> answers

){}
