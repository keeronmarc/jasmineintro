var formdata_array = [];
var allusers = [];

$(document).ready(function() {
  $('.button').click(function() {
// Step 1: Run Validate data function
    if (validateForm()) {
// Step 3: Take object data and place into array[]
// REASON WHY: "forminputdata has "())" b/c not passing argument in function as well
      formdata_array.push(forminputdata());
// REASON WHY: "formdata_array has ")" b/c PASSING argument in function 
      loop_output(formdata_array);
    }
  })
})
// Step 2a: Defines input data as variables, store variables into one object {    
function forminputdata () {
  var firstName = $('.firstName').val();
  var lastName = $('.lastName').val();
  var email = $('.email').val();
  var coffees = $('.cup_joe').val();

  var formoutputdata = {
    firstname: firstName,     
    lastname: lastName,
    email: email,
    cups: coffees,
  }
// Step 2b: Return data to stop function,allow data for use 
  return formoutputdata;
}
// Step 4: Loop through object(dataobject), need a subject to act upon(holder), making this function generic or resuable
function loop_output(holder){
  var display_datafield = $('.datasubmit');
// Step 6: Remove repeating inputs submitted from previous submits
  display_datafield.html('');
  holder.forEach(function(dataobject) {
// Step 5: Create listings from array(obejct), place into div for display
    display_datafield.append("<div class='profile'>"+ dataobject.lastname.charAt(0) + "<br />" + dataobject.firstname + "<br />" + dataobject.lastname + "<br />" + dataobject.email + "<br />" + dataobject.cups + "</div>")
  })
}

function validateForm () {
  // by setting valid to true, you create a way for data 
  // to evaluate right/wrong to be sent
  // can do it with numbers or with true/false
  // return is the data being sent 
  // so it reads when data is valid, sent data to next step
      var valid = true;
      var element = $('.element');
      var input = $('input');
      element.removeClass('active')
      element.removeClass('inactive')
      input.removeClass("warning")
      input.each(function(){
          if ($(this).val() == "") {
            console.log("input empty");
            valid = false;
            input.addClass("errorwarning")
            element.addClass('active')
            $('.element p').remove('p');
            element.append("<p>No, no, no that doesn't work</p>")
            $('.closebtn').click(function() {
              element.removeClass('active').addClass('inactive');
            })
          }
      })
      // returning valid sends the data out, by setting
      return valid
}
      








