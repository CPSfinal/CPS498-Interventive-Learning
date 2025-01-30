/**
 *  Dev: Seth Glover
 *  Description: this class transfers the user data to the front end. 
 */
package com.cmu.cps498.users;

@Getter // not sure what the package was for this. 
@Setter // not sure what the package was for this.
public class UserDTO {
    private String email;
    // there are other packages that do this as well. 
    public boolean isEmailValid() {
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        return email != null && email.matches(emailRegex);
    }

    // check password validity (length & special characters) 

    private String password;

    private String role;

}
