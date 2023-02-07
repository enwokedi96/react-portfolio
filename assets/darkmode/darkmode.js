//adapted from https://bootsnipp.com/snippets/lGW9j 
function myFunction() {    
    $(document).ready(function(){
        $('.toggle').click(function(){
            $('.toggle').toggleClass('active')
            $('body').toggleClass('night')

            var x = document.getElementById("mode");
            if (x.innerHTML === "Day") {
                x.innerHTML = "Night";
            } else {
                x.innerHTML = "Day";
            }
        })
    })

}