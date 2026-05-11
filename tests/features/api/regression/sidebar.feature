@api
Feature: Sidebar API

  Scenario: Retrieve sidebar layout
    When I send a get sidebar request
    Then the response status should be 200
    And the response field "localizedStatusDescription" should be "Operation completed successfully"
