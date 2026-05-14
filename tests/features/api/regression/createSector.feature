@api
Feature: Sector API

  Scenario: Cannot create sector with lower limit flight level greater than upper limit flight level
    When I create a sector with lower limit flight level greater than upper limit flight level
    Then the sector creation should fail because the lower limit flight level is greater than the upper limit flight level
    And the sector response should contain:
      | field                      | value                                          |
      | localizedStatusDescription | Lower limit cannot be greater than upper limit |
