/**
 * DEVELOPER:  Seth GLover
 * DESCRIPTION:  This class tests the Argon2 hashing algorithm.  It tests the hashing of a password and then compares the hashed password to the raw password to ensure they match.
 * 
 */
package com.cmu.cps498.utility.security;

import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertTrue;

//this does not test the actual authconfig class, but rather the argon2 hashing algorithm.
class Argon2Test {

    @Test
    void testArgon2Hashing() {
        String rawPassword = "mypassword123";
        Argon2PasswordEncoder argon2PasswordEncoder = new Argon2PasswordEncoder(16, 32, 1, 65536, 10);

        String hashedPassword = argon2PasswordEncoder.encode(rawPassword);
        System.out.println("Hashed Password: " + hashedPassword);

        assertTrue(argon2PasswordEncoder.matches(rawPassword, hashedPassword), "Password does not match");
    }
}
