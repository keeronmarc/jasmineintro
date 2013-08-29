//****************************************************************************
//                Overview: 
// Take Form input data, validate data, store variables as object, save object into 
// array, Loop through array and display all objects in array
//*****************************************************************************
// Step 1: Validating data Redo/Rethink
//      (a)Place all inputs in variables
//      (b)Convert variables to array to manipulate
//      (c)Loop through all inputs to determine if empty
//          if (one or more fields) are empty mark red, send modal alert
//          if not empty, 
//        
// Step 2(a): Saves input data as variables, store into object {}
//     (b): "Return" stops function & allows data for use globally (**/check this/**)
// Step 3: Take object data and place into array
// Step 4: Loop through array - create function
// Step 5: Create listings from array(obejct), place into div and display
// Step 6: Remove repeating inputs submitted from previous submits

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
    var emptyfield = 0;
    $('input').css("background", "none");
    $("input").each(function () {
    if ($(this).val() == ""){
      $(this).css("background", "red");
      emptyfield++; 
      }
    })
    if (emptyfield > 0) {
      var element = $('.element');
      var active = function(){
          element.removeClass('inactive').addClass('active');
          element.append('<p>You Might Want to Check Again!</p>');
      };
      $('.closebtn').click(function() {
        element.removeClass('active').addClass('inactive');
        $('.element > p').remove('p');
      })
      setTimeout(active, 100);
      // closer ();
      return false;
    }
  return true;
  }

  
// function validateForm () {
//   // by setting valid to true, you create a way for data 
//   // to evaluate right/wrong to be sent
//   // can do it with numbers or with true/false
//   // return is the data being sent 
//   // so it reads when data is valid, sent data to next step
//       var valid = true;
//       $('.message').removeClass('popup-message')
//       $('input').removeClass("warning")
//       $('input').each(function(){
//           if ($(this).val() == "") {
//             console.log("input empty");
//             valid = false;
//             $(this).addClass("warning")
//             $('.message').addClass('popup-message')
//           }

//       })
//       // returning valid sends the data out, by setting
//       return valid
// }
      









