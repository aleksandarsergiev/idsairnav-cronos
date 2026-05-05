@regression
Feature: Forgot Password Navigation

  Scenario: User navigates to the Forgot Password page from the Login page
    Given I navigate to the Home Page
    When I click the Login button
    And I click the Forgot password link
    Then the page heading should be "Forgot Password?"
    And the page url should contain "/forgot-password"
