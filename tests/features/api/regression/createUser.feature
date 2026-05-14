@api
Feature: User API

  @createsFplOffice @createsOrganization @createsUser
  Scenario: Create user successfully
    Given an FPL office exists
    And an organization exists
    When I create a user
    Then the user should be created successfully
    And the user response should contain:
      | field                      | value                            |
      | localizedStatusDescription | Operation completed successfully |

  Scenario: Cannot create user linked to a non-existent child FPL office
    When I create a user linked to a non-existent child FPL office
    Then the user creation should fail because the child FPL office does not exist
    And the user response should contain:
      | field                      | value              |
      | localizedStatusDescription | Resource not found |
