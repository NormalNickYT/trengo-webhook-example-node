const options = {
  method: 'GET',
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjUxZTNmYTU2MTQ5MTQzNGMyNWRlYzM3OTljYTRhY2E3ODY1ZWM4MDYyNTVlNWJhZDMyYWE3ZDM5NDJmODY2ZjE2MzdhMjEyOWNkNDIzY2E3In0.eyJhdWQiOiIxIiwianRpIjoiNTFlM2ZhNTYxNDkxNDM0YzI1ZGVjMzc5OWNhNGFjYTc4NjVlYzgwNjI1NWU1YmFkMzJhYTdkMzk0MmY4NjZmMTYzN2EyMTI5Y2Q0MjNjYTciLCJpYXQiOjE2MTk2MDk5MDIsIm5iZiI6MTYxOTYwOTkwMiwiZXhwIjo0NzQzNzUxMTAyLCJzdWIiOiI1ODkwNiIsInNjb3BlcyI6W119.MUNWf1gtQ5AVz5bJDy-Wgj4Iot1JbkLRGlYUy9jAi2IYNwBSI6TfDikhHgruPKuVxpHaWc7hU74HmGGpPL1o6Q'
  }
};

fetch('https://app.trengo.com/api/v2/tickets?page=1&sort=-date', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
