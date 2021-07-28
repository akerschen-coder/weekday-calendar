$(document).ready(function () {


    //variables pulled from html 
    var timeDisplayEl = $('#time-display');
    var timeBlock = $('time-block');
    //var saveButton = $('saveBtn');
    var textArea = $('.description');
    // Display day 
    var rightNow = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);

    function timeUpdate() {


        // time for textarea
        let currentTime = moment().hour();
        console.log(currentTime)

        //Loops through ids to add colors 
        $('.time-block').each(function () {
            var blockhour = parseInt($(this).attr('id'))
            if (blockhour < currentTime) {
                $(this).addClass('past')
            } else if (blockhour === currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future')
            }

        })
    }

    timeUpdate();
    //save button function to save 
    $('.saveBtn').on('click', function () {
        console.log("Button clicked!")
        //target text 
        var text = $(this).siblings(".description").val();
        //target time 
        var time = $(this).parent().attr("id");


        localStorage.setItem(time, text);




    })
    //call local storage- how to keep it up there tho???  

    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));


})