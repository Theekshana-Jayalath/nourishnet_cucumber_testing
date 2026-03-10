Feature: Application API Testing

Scenario: Create new application
  Given the API server is running
  When I send POST request to "/api/applications/create"
  Then the response status should be 201