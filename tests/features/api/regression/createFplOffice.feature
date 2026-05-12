@api
Feature: FPL Office API

  @createsFplOffice
  Scenario: Create FPL office successfully
    When I create an FPL office
    Then the FPL office should be created successfully

  @createsFplOffice
  Scenario: Cannot create FPL office with duplicate id
    Given an FPL office exists
    When I create the same FPL office
    Then the FPL office creation should fail because the id already exists
    And the response should contain:
      | field                      | value                                               |
      | localizedStatusDescription | Flight Plan Office Id API AUTOMATION already exists |
