describe("Form", function () {
	
		// FAILED ERROR CHECKS FOR JASMINE
	
	describe ("Variable Checks", function () {

	})

// EXPERMINENTAL JASMINE TEST
	// describe ("Array(Object) Data", function () {
	// 	it("The Array created with objects should list objects in array", function() {
 //    	var a = [0];
	// 	expect(a).toContain('bar');
	// 	})
	// })

	describe ("Validation Checks", function () {
		it("should display no error message if inputs exist", function(){
				$('input').val('valueexists');
				$(".button").click();
				expect($('.form').css('margin')).toBe('20px');
		})

		it("should display no error message if inputs exist", function(){
				$('input').val('valueexists');
				$(".button").click();
				expect($('.form').addClass('warning'))
		})

		it("should display modal when one input is blank", function(){
				$('input').val('');
				$(".button").click();
				expect($('.form').css('margin')).toBe('20px');
		})


		it("should count number of inputs as 4", function() {
    		var totalformnumber = $('.input'[0]);
    		expect(totalformnumber).toEqual(4);
  		});

		it("should remove the red warning for completed inputs", function() {
			var allchecked = ($('input').val() != "");
			$(".button").click();
			expect(allchecked).toBe("background", "none");	
		});

	})	

})










  






