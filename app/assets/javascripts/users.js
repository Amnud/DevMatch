/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var signupBtn = $('#form-signup-btn');
  
  //Set Stripe Publishablpublic key.
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  //When user clicks form submit button,
  signupBtn.click(function(event){
    //prevent default submition behaviour.
    event.preventDefault();
    
    //Collect the credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('card_code').val(),
        expMonth = $('card_month').val(),
        expYear = $('card_year').val();
      
    //Send the card info to Stripe.
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });

  
  
  //Stipe will return back a card token.
  //Inject card token as hidden field into form.
  //Submiit form into our Rails app.
});