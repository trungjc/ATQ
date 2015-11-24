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

	/* Change tabs in homepage */
	$('.tab-control li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-control li').removeClass('active');
		$('.step-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});

	/* Change Step in Simple tab */
	$('.step-change label').click(function(){
		var step_id = $(this).attr('data-step');

		$(".step-change label").removeClass("current-step");
		$(".step-form").removeClass("current-step");

		$(this).addClass("current-step");
		$("#"+step_id).addClass('current-step');
	});

	$("#next-btn").click(function(){
		$("#step-1").removeClass("current-step");
		$("#step-2").addClass("current-step");
	})

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