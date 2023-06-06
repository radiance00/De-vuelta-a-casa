//Ejemplo de como llamar al api desde jquery.
const url = 'http://localhost:8083/api/Contact';

const data = {
  name: 'TestName',
  email: 'test@test.com',
  comment: 'test comment'  
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