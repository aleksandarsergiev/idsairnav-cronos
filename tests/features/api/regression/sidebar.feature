@api
Feature: Sidebar API

  Scenario: Retrieve sidebar layout successfully
    When I request the sidebar layout
    Then the response status code should be 200
    And the response should contain:
      | field                      | value                            |
      | localizedStatusDescription | Operation completed successfully |
