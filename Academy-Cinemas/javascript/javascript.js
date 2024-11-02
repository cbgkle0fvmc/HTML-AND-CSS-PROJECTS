//Initialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
})

//Initialize toast

const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickts: " + quantity;

    //display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets() {
    displaySelectedMovieOptions();
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
function toolTipExample() { }
//JQUERY
//Shrinks header size when the document is scrolled down by 80 pixels 
$(document).on("scroll", function () {
    //When the webpage is scrolled down from the top by 50 px this
    //if statement will trigger
    if ($(document).scrollTop() > 50) {
        //Once the 50px requirement has been met add the
        //nav-shrink class selector to the same html element
        //that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu 
        //to accomodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //Close mobile menu when a navigation link is clicked
        $(document).ready(function () {
            //On click when and element contains just the nav-link class and not the dropdown-toggle and then
            //also close when an element with the class .dropdown-itme (each movie link) has been clicked
            $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function () {
                //Collapse the navbar when a link or dropdown item is clicked
                $(".navbar-collapse").collapse('hide');
            });
        });
        //if the webpage has not been scrolled down or 
        //is back at the top the nav-shrink class selector 
        //is removed from the HTML element with the nav
        // class selector
        $("nav").removeClass("nav-shrink");
        //THe margin for the drop down menu is now
        //returned to its original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});