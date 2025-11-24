
$(document).ready(function() {
    // 1) Copy user input to output text area on button click
    $('#copy').on('click', function(event) {
        console.log('click event', event);
        $('#output1').text($('#userInput1').val());
    });

    // 2) Copy input from text box to output area each time an update is detected
    $('#userInput2').on('input', function(event) {
        console.log('input event', event);
        $('#output2').text($(this).val());
    });
});
