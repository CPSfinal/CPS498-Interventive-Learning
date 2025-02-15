package com.cmu.cps498.utility.dtos;
import com.cmu.cps498.utility.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterSchoolDto {
    private String schoolname;

    // TODO: add whatever else the user needs to register
}
