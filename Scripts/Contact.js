//Ejemplo de como llamar al api desde jquery.
const url = 'https://localhost:7235/api/Contact';

const data = {
  name: 'string',
  email: 'string',
  comment: 'string',
  creationDate: '2023-06-01T16:52:26.860Z'
};

$.ajax({
  url: url,
  type: 'POST',
  dataType: 'json',
  contentType: 'application/json',
  data: JSON.stringify(data),
  success: function(response) {
    console.log('API response:', response);
    // Handle the API response here
  },
  error: function(xhr, status, error) {
    console.error('Error:', xhr.status);
    // Handle the API error here
  }
});