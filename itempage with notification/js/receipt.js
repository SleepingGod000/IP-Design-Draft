function printReceipt() {
    window.print();
}
$( document ).ready(function() {
	$('#accordion i').click(function() {
		$(this).toggleClass("fa-plus-circle fa-minus-circle");
	});
});