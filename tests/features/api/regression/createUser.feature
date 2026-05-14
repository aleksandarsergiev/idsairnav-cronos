@api
Feature: User API

  Scenario: Cannot create user linked to a non-existent child FPL office
    When I create a user linked to a non-existent child FPL office
    Then the user creation should fail because the child FPL office does not exist
    And the user response should contain:
      | field                      | value              |
      | localizedStatusDescription | Resource not found |
