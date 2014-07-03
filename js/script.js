$(document).ready(function() {
	function callNode() {
		$.ajax({
			url: 'http://localhost:3000/',
			success: function(response, code, xhr) {
				$('#updateId').append(response + "</br>");

				callNode();
			},
			error: function(error, code, xhr) {
				alert('Error');
			}
		});
	};

	callNode();
});
