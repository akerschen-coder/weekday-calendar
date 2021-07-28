//variables pulled from html 
var timeDisplayEl = $('#time-display'); 
var timeBlock = $('time-block');
//var saveButton = $('saveBtn');
var textArea = $('.description');

// Display day 
    var rightNow = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);

// time for textarea
    let currentTime = moment().hour();
    console.log(currentTime)

//variable to loop through on time from html
  var time = [$('#8'), $('#9'), $('#10'), $('#11'), $('#12'), $('#13'), $('#14'), $('#15'), $('#16')];

// else if statments for color and time 
for (let i = 0; i < time.length; i++) {
    var timeBlock = time[i].attr('id'); 
    
     if(timeBlock > currentTime) {
        time[i].parent().addClass('future') 
     } else if(timeBlock == currentTime) {
        time[i].parent().addClass('present');
    } else {
        time[i].parent().addClass('past')
}
}  

//save button function to save 
$('.saveBtn').on('click', function () {
    console.log("Button clicked!")
    //target text 
    var text = $(this).siblings(".description").val();
    //target time 
    var time = $(this).siblings(0).attr("id");
                     

    localStorage.setItem(time, text);

    

    
//call local storage- how to keep it up there tho???  

 localStorage.getItem("text");

})



