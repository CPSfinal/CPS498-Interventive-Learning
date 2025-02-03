/**
 *  Dev: Seth Glover
 *  Description: this class transfers the user data to the front end. 
 */
package com.cmu.cps498.utility.users;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String email;

    // there are other packages that do this as well.
    private static final String EMAIL_REGEX = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

    public boolean isEmailValid() {
        return email != null && email.matches(EMAIL_REGEX);
    }

    // check password validity (length & special characters)

    private String password;

    private String role;

}
