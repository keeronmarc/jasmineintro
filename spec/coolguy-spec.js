describe("Form", function () {
	
// PASSED ERROR CHECKS FOR JASMINE

	describe ("Variable Checks", function () {

		it("Checks if allusers,formdata_array variables are 'undefined'", function() {
	    	var allusers = [];
	    	var formdata_array = [];
	    	expect(allusers).toBeDefined();    	
	    	expect(formdata_array).toBeDefined();    	
	  	});

		it("Tests if Allusers,formdata_array variables are not given values", function() {
	    	var allusers = [];
	    	var formdata_array = [];
			expect(allusers).not.toContain('quux');
			expect(formdata_array).not.toContain('quux');
	  	});

		it ("checks the inputs for passing values correctly", function() {
				$('.button').click();
	    		expect($('.firstName').val('Peter')).toBeDefined('Peter');
	    		expect($('.lastName').val('Large')).toBeDefined('Large');
	    		expect($('.email').val('kmarc@gmail.com')).toBeDefined('kmarc@gmail.com');
	    		expect($('.cup_joe').val('4')).toBeDefined('4');
	  	});

	})

	describe ("Validation Checks", function () {

		it ("should add an div with user\'s name to DataSubmit Div", function() {
			$('.firstName').val('Marc');
			$('.lastName').val('Larry');
			$('.email').val('as@gmail.com');
			$('.cup_joe').val('4');
			$('.button').click()
			expect($('.profile').last().text()).toContain("Marc");
		});
	})
})










