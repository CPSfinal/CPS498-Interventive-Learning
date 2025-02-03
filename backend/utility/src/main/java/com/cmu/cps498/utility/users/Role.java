/**
 *  Dev: Seth Glover
 *  Description: This defines the role of the user. 
 */
package com.cmu.cps498.utility.users;

//enum for user roles. This creates strong typing and prevents typos.
// premision levels for the users should be defined in the database. 
public enum Role {
    USER, // reg user with no special permissions
    ADMIN, // admin user with all permissions
    TEACHER, // teacher user with teacher permissions
    STUDENT; // student user with student permissions
}
