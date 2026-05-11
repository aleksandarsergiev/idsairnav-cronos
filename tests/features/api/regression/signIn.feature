@api
Feature: Sign In API

  Scenario: User successfully signs in with valid credentials
    When I send a sign in request with valid credentials
    Then the response status should be 200
