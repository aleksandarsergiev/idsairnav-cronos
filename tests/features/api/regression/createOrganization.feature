@api
Feature: Organization API

  Scenario: Cannot create organization when FPL office does not exist
    When I create an organization with a non-existent FPL office
    Then the organization creation should fail because the FPL office does not exist
    And the organization response should contain:
      | field                      | value                        |
      | localizedStatusDescription | Fpl office ID does not exist |
