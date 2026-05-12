@regression
Feature: Create Account Navigation

  Scenario: User navigates to the Create Account page from the Login page
    Given I navigate to the Home Page
    When I click the login button
    And I click the sign up button
    Then the create account page heading should be "Create an account"
    And the create account page url should contain "/signup"
