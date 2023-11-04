function bookTable() {
    
    var name = document.getElementById("nameBox").value ;
    var contactNumber = document.getElementById("contactNum").value;
    var date = document.getElementById("date").value;
    var guestCount= document.getElementById("guestNum").value;


    // Create a string with the captured data
    var inputData = "Dear " + name + ",<br><br>" +
    "Thank you for making a reservation with us. Your reservation details are as follows:<br><br>" +
    "Contact Number: " + contactNumber + "<br>" +
    "Reservation Date: " + date + "<br>" +
    "Number of Guests: " + guestCount + "<br>" +
    
    "We look forward to serving you on " + date + ".<br><br>" +
    "Best regards,<br>" +
    "FoodLover";

    // Display the input data in the "content" div
    document.getElementById("content").innerHTML = inputData;
   
    

}