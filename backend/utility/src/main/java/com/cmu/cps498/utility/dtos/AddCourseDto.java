package com.cmu.cps498.utility.dtos;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddCourseDto {
    private String courseName;
    private Integer contentId;
    private Integer grade;
    private String subject;
    private Integer teacherId;
    // TODO: add whatever else the user needs to register
}
