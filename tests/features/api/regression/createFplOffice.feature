@api
Feature: FPL Office API

  Scenario: Create FPL office successfully
    When I create an FPL office
    Then the FPL office should be created successfully
