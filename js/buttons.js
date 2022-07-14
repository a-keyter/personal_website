main_nav_contact_button = document.getElementById('contact')
footer_contact_button = document.getElementById('contact_footer')
back_to_top = document.getElementById('back_to_top')


const go_to_contact_page = function(){
    console.log("Button clicked")
    location.href = "./contact_me.html";
}

let scroll_to_top = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


main_nav_contact_button.addEventListener('click', go_to_contact_page)
footer_contact_button.addEventListener('click', go_to_contact_page)
back_to_top.addEventListener('click', scroll_to_top)