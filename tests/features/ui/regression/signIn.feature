@regression
Feature: Sign In

  Scenario Outline: User successfully signs in with valid credentials
    Given I navigate to the Login Page
    When I sign in as "<user>"
    Then I should be signed in successfully

    Examples:
      | user  |
      | user1 |
      | user2 |

  # The dummy site silently ignores the first invalid submit; the error only appears on the second attempt.
  Scenario: User fails to sign in with invalid credentials
    Given I navigate to the Login Page
    When I fill in the username with "invalidUser"
    And I fill in the password with "invalidPass"
    And I click the sign in button
    And I fill in the password with "invalidPass"
    And I click the sign in button
    Then I should see the error message "Invalid username or password."