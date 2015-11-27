$(document).ready(function(){

	$("input:radio+label").click(function(){
		$(this).prev("input:radio").prop("checked",true);
	});
	/* Dropdown block in tax's tabs */
	$("#status-dropdown-btn").click(function(){
		$("#status-dropdown").slideToggle("slow",function(){
			if($(this).is(':visible')){
				$("#status-dropdown-btn").find("i").removeClass("fa-caret-down").addClass("fa-caret-up");
				$("#status-dropdown-btn").find("span").html("Hide");
			}
			else{
				$("#status-dropdown-btn").find("i").removeClass("fa-caret-up").addClass("fa-caret-down");
				$("#status-dropdown-btn").find("span").html("Show");
			}
		});
		
	});
	$("#income-allowances-tab-dropdown-btn").click(function(){
		$("#income-allowances-dropdown").slideToggle("slow",function(){
			if($(this).is(':visible')){
				$("#income-allowances-tab-dropdown-btn").find("i").removeClass("fa-caret-down").addClass("fa-caret-up");
				$("#income-allowances-tab-dropdown-btn").find("span").html("Hide");
			}
			else{
				$("#income-allowances-tab-dropdown-btn").find("i").removeClass("fa-caret-up").addClass("fa-caret-down");
				$("#income-allowances-tab-dropdown-btn").find("span").html("Show");
			}
		});
	});
	$("#benefit-dropdown-btn").click(function(){
		$("#benefit-dropdown").slideToggle("slow",function(){
			if($(this).is(':visible')){
				$("#benefit-dropdown-btn").find("i").removeClass("fa-caret-down").addClass("fa-caret-up");
				$("#benefit-dropdown-btn").find("span").html("Hide");
			}
			else{
				$("#benefit-dropdown-btn").find("i").removeClass("fa-caret-up").addClass("fa-caret-down");
				$("#benefit-dropdown-btn").find("span").html("Show");
			}
		});
	});
	/* Tax Page */
	$("#status-select label").click(function(){
		var radioSelect = $(this).prev("input:radio").val();
		/*
		if(radioSelect==0){
			$("#carer-child-check input:checkbox").prop('disabled',false);
		}
		else{
			$("#carer-child-check input:checkbox").prop('disabled',true);
		}
		*/
		if(radioSelect==1){
			$("#spouses-income-select input:checkbox").prop('disabled',false);
			$("#spouse-age").prop('disabled',false);
			
		}
		else{
			$("#spouses-income-select input:checkbox").prop('disabled',true);
			$("#spouse-age").prop('disabled',true);
		}
	});
	$("#loan-select label").click(function(){
		var radioSelect = $(this).prev("input:radio").val();
		if(radioSelect != 0){
			$("input[name=balance-loan]").prop('disabled',false);
			$("input[name=rate-loan]").prop('disabled',false);
		}
		else{
			$("input[name=balance-loan]").prop('disabled',true);
			$("input[name=rate-loan]").prop('disabled',true);
		}
		
	});
	$("#carer-child-check .switch-label").click(function(){
		if($("#carer-child-check  input:checkbox").prop("checked")==false){
			if($("#carer-child-check input:checkbox").prop("disabled")==false){
				$("#carer-child input:checkbox").prop('disabled',false);
			}
		}
		else{
			if($("#carer-child-check input:checkbox").prop("disabled")==false){
				$("#carer-child input:checkbox").prop('disabled',true);
			}
		}
	});
	
	$("#spouses-income-select .switch-label").click(function(){
		if($("#spouses-income-select  input:checkbox").prop("checked")==false){
			if($("#spouses-income-select input:checkbox").prop("disabled")==false){
				$("#spouses-income-child input:checkbox").prop('disabled',false);
				$("input[name=spouse-in-txt]").prop('disabled',false);
				$("#carer-children input:checkbox").prop('disabled',false);
			}
		}
		else{
			if($("#spouses-income-select input:checkbox").prop("disabled")==false){
				$("#spouses-income-child input:checkbox").prop('disabled',true);
				$("input[name=spouse-in-txt]").prop('disabled',true);
				$("#carer-children input:checkbox").prop('disabled',true);
			}
		}
	});

	$("#employee-check .switch-label").click(function(){

		if($("#employee-check input:checkbox").prop("checked")==false){
			if($("#employee-check input:checkbox").prop('disabled')==false){
				$("#employ-check-1 input:checkbox").prop('disabled',false);
				$("#employ-check-2 input:checkbox").prop('disabled',false);
			}
			
		}
		else{
			if($("#employee-check input:checkbox").prop('disabled')==false){
				$("#employ-check-1 input:checkbox").prop('disabled',true);
				$("#employ-check-2 input:checkbox").prop('disabled',true);
			}
		}
	});

	$("#qualifying-pension-check .switch-label").click(function(){
		if($("#qualifying-pension-check input:checkbox").prop("checked")==false){
			if($("#qualifying-pension-check input:checkbox").prop('disabled')==false){
				$("input[name=qualifying-pension]").prop('disabled',false);
			}
		}
		else{	
			if($("#qualifying-pension-check input:checkbox").prop('disabled')==false){
				$("input[name=qualifying-pension]").prop('disabled',true);
			}
		}
	});
	$("#incapacitated-select .switch-label").click(function(){
		if($("#incapacitated-select input:checkbox").prop("checked")==false){
			if($("#incapacitated-select input:checkbox").prop('disabled')==false){
				$("input[name=incapacitated-pay]").prop('disabled',false);
			}
		}
		else{
			if($("#pincapacitated-select input:checkbox").prop('disabled')==false){
				$("input[name=incapacitated-pay]").prop('disabled',true);
			}
		}
	});
	$("#com-verhicle-check .switch-label").click(function(){
		if($("#com-verhicle-check input:checkbox").prop("checked")==false){
			$("input[name=original-value]").prop('disabled',false);
			$("input[name=annual-mileage]").prop('disabled',false);
			$("#morthan-70-select input:checkbox").prop('disabled',false);
			$("#pay-employ-check input:checkbox").prop('disabled',false);
		}
		else{	
			$("input[name=original-value]").prop('disabled',true);
			$("input[name=annual-mileage]").prop('disabled',true);
			$("#morthan-70-select input:checkbox").prop('disabled',true);
			$("#pay-employ-check input:checkbox").prop('disabled',true);
		}
	});
	$("#pay-employ-check .switch-label").click(function(){
		if($("#pay-employ-check input:checkbox").prop("checked")==false){
			if($("#pay-employ-check input:checkbox").prop('disabled')==false){
				$("input[name=pay-employ]").prop('disabled',false);
			}
		}
		else{
			if($("#pay-employ-check input:checkbox").prop('disabled')==false){
				$("input[name=pay-employ]").prop('disabled',true);
			}
		}
	})
	$("#employer-insurance .switch-label").click(function(){
		if($("#employer-insurance input:checkbox").prop("checked")==false){
			if($("#employer-insurance input:checkbox").prop('disabled')==false){
				$("input[name=employer-insurance]").prop('disabled',false);
			}
		}
		else{
			if($("#employer-insurance input:checkbox").prop('disabled')==false){
				$("input[name=employer-insurance]").prop('disabled',true);
			}
		}
	});
	$("#occupation_chosen .chosen-results").click(function(){
		
		if($("#occupation").val()){
			$("#occupation-position").prop('disabled',false);
			$("#occupation_position_chosen").removeClass("chosen-disabled");	
			 $("#occupation-position").attr('disabled', false).trigger("chosen:updated");	
		}
		else{
			$("#occupation-position").prop('disabled',true);
			$("#occupation_position_chosen").addClass("chosen-disabled");
			 $("#occupation-position").attr('disabled', true).trigger("chosen:updated");	
		}
	})
	
	$(".clear-button").click(function(){
		document.getElementById("tax-form").reset();
	})
	
})