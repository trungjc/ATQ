$(document).ready(function(){
	/* Radio checkbox in tax calculator page (relationship,loan) */
	$("input:radio+label").click(function(){
		$(this).prev("input:radio").prop("checked",true);
	});

	/* Dropdown block in tax's tabs */
	$("#status-dropdown-btn").click(function(){
		$("#status-dropdown").toggle();
	});
	$("#income-allowances-tab-dropdown-btn").click(function(){
		$("#income-allowances-dropdown").toggle();
	});
	$("#benefit-dropdown-btn").click(function(){
		$("#benefit-dropdown").toggle();
	});

	/* Step 1 tabs in homepage */
	$('.tab-control li').click(function(){
		var tab_id = $(this).attr('data-tab');
		console.log(tab_id );

		$('.tab-control li').removeClass('active');
		$('.step-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});

	/* Bind Step 2 */
	$("#next-btn").click(function(){
		$("#step-1").empty();
		$("#step-2").css("display","block");
	});
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
});