@api
Feature: Sidebar API

  Scenario: Retrieve sidebar layout successfully
    When I request the sidebar layout
    Then the sidebar should be retrieved successfully
    And the response should contain:
      | field                      | value                            |
      | localizedStatusDescription | Operation completed successfully |
