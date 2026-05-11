@regression
Feature: Forgot Password Navigation

  Scenario: User navigates to the Forgot Password page from the Login page
    Given I navigate to the Home Page
    When I click the login button
    And I click the forgot password link
    Then the forgot password page heading should be "Forgot Password?"
    And the forgot password page url should contain "/forgot-password"
