// Call the dataTables jQuery plugin

$(document).ready(function() {
  $('#purchaseHistory-datatable').DataTable({
	  responsive: true
  });
  
  var receiptTable = $('#purchaseHistory-datatable').DataTable();
  $('#purchaseHistory-datatable tbody').on( 'click', 'tr', function () {
	  $('#receiptDescription').find('#receiptDescriptionLabel').text(receiptTable.row(this).data()[0])
	  $('#receiptDescription').find('#receiptContent').text(receiptTable.row(this).data()[0])
} );
});