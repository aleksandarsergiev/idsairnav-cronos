@api
Feature: Organization API

  @createsFplOffice
  Scenario: Create organization successfully
    Given an FPL office exists
    When I create an organization
    Then the organization should be created successfully
    And the organization response should contain:
      | field                      | value                            |
      | localizedStatusDescription | Operation completed successfully |

  Scenario: Cannot create organization when FPL office does not exist
    When I create an organization with a non-existent FPL office
    Then the organization creation should fail because the FPL office does not exist
    And the organization response should contain:
      | field                      | value                        |
      | localizedStatusDescription | Fpl office ID does not exist |
