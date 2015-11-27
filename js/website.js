$(document).ready(function(){
	/* Radio checkbox in tax calculator page (relationship,loan) */

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

	/* Validate Homepage Form */

	$("#renting-select").on("change",function(){
		if($(this).val()==0){
			$("#paid-txt").prop('disabled', true);
			$("#subcate-select").prop('disabled', true);
			$("#subcate-select").css("opacity","0.5");
		}
		else{
			if($("#paid-txt").prop('disabled')==true){
				$("#paid-txt").prop('disabled',false);
			}
			if($("#subcate-select").prop('disabled')==true){
				$("#subcate-select").prop('disabled',false);
				$("#subcate-select").css("opacity","1");
			}
		}
	});
	$("#medical-card").on("change",function(){
		if($(this).val()==0){
			$("input[name=medical-expenses]").prop('disabled', true);
		}
		else{
			if($("input[name=medical-expenses]").prop('disabled')==true){
				$("input[name=medical-expenses]").prop('disabled',false);
			}
		}
	});
	$("#age-check").on("change",function(){
		if($(this).val()==0){
			$("input[name=income-childcare]").prop('disabled', true);
		}
		else{
			if($("input[name=income-childcare]").prop('disabled')==true){
				$("input[name=income-childcare]").prop('disabled',false);
			}
		}
	});
	$("#income").keyup(function(){
		var input = $("#income").val();
		if(!checkNumber(input)){
			$("#income").addClass("validate-failed");
		}
		else{
			if($("#income").hasClass("validate-failed")){
				$("#income").removeClass("validate-failed");
			}
		}
	});
	$("input[name=income-childcare]").keyup(function(){
		var input = $("input[name=income-childcare]").val();
		if(!checkNumber(input)||input>3){
			$("input[name=income-childcare]").addClass("validate-failed");
		}
		else{
			if($("input[name=income-childcare]").hasClass("validate-failed")){
				$("input[name=income-childcare]").removeClass("validate-failed");
			}
		}
	});

	$("#paid-txt").keyup(function(){
		var input = $("#paid-txt").val();
		if(!checkNumber(input)){
			$("#paid-txt").addClass("validate-failed");
		}
		else{
			if($("#paid-txt").hasClass("validate-failed")){
				$("#paid-txt").removeClass("validate-failed");
			}
		}
	});
	$("#next-btn").click(function(){
		$("#step-1").removeClass("current-step");
		$("#step-2").addClass("current-step");
	});

	$("#check-btn").click(function(){
		if(!$("#income").val()||!checkNumber($("#income").val())){
			$("#income").addClass("validate-failed");
			$(".messenge").css("opacity","1");
			return false;
		}
	})

	function checkNumber(data){
		if (data.match(/^[+-]?(\.\d+)|(\d+(\.\d+)?)$/)){
			return true;
		}
		else return false;			
	}

	/* Format number*/
	$(".validate input").autoNumeric('init', {
		dGroup: '2',
		aSep: '.',
        aDec: ',',
	});

 $('.popup').click(function(event) {
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, 'twitte', opts);

    return false;
  });
	
});