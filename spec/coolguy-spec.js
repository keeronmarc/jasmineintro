describe("Form", function () {		
	
	beforeEach(function(){
		$('input').val('')
		});

// describe ("Variable Checks", function () {

	describe("Arrays", function () {

		it("should check if arrays are declared",function() {
	    	var allusers = [];
	    	var formdata_array = [];
	    	expect(allusers).toBeDefined();    	
	    	expect(formdata_array).toBeDefined();    	
	  	});

		it("should check if arrays have no values",function() {
	    	var allusers = [];
	    	var formdata_array = [];
			expect(allusers).not.toContain('quux');
			expect(formdata_array).not.toContain('quux');
	  	});
	});

	describe("All Inputs", function () {
		it ("checks the inputs for passing values correctly",function() {
			$('.button').click();
			expect($('.firstName').val('Peter')).toBeDefined('Peter');
			expect($('.lastName').val('Large')).toBeDefined('Large');
			expect($('.email').val('kmarc@gmail.com')).toBeDefined('kmarc@gmail.com');
			expect($('.cup_joe').val('4')).toBeDefined('4');	
	  	});
	});

	describe("Form input data", function () {
		it("it should return a correctly formatted object", function() {
	//injects value
			$('.firstName').val('Marc')
			var result = forminputdata()
			expect(result.firstname).toBe('Marc')
		});

		it("should return a true if all inputs are put in box", function() {
			var finaly = validateForm();
			expect(finaly).toBe(false);
		});

		it("should return a true if all inputs are put in box", function() {
			// checks all inputs and places values in them
			$('input').val('test');
			var finaly = validateForm();
			expect(finaly).toBe(true);
		});
	});

	describe ("Validation Checks",function() {
		beforeEach(function(){
			$('input').val('')
		});

		it("should create a variable for each input", function(){
			expect('firstName').toBeDefined()
			expect('lastName').toBeDefined()
			expect('email').toBeDefined()
			expect('cup_joe').toBeDefined()
		});

		it("should add error class warning if input is empty", function() {
			$('.button').click()
			expect($('input').hasClass('errorwarning')).toBe(true);
		});


		it("should add a div with 4 coffee cups to DataSubmit Div", function() {
			$('input').val('4');
			$('.button').click();
			expect($('.profile').html()).toContain("4");
		});


	});

});

	



  // it("should take the value of an input Firstname, store in var, and store in attribute of object", function () {
  // 		 .attr(formoutputdata)
  // 		 var firstName = $('.firstName').val();
  // 		  var formoutputdata = {firstname: firstName,}
  // });

	

	// it("shows 4 values in the array object created",function() {
	// 	allusers = [];
	// 	$("input").val("object4");
	// 	$('.button').click()
	// 	$("input").val("object4");
	// 	$('.button').click()
	// 	$("input").val("object4");
	// 	$('.button').click()
	// 	$("input").val("object4");
	// 	$('.button').click()
	// 	expect(allusers.length).toEqual(4);
	// });












