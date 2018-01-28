function getFlickrData(response) {
        sessionStorage.setItem("response", JSON.stringify(response));
   
        //set the event listeners for the pagination links so that when one of them is clicked all are hided and only the clicked one is shown
        $(".pag-link").click(function(event){
            $(".items-container").hide();
            $('[data-show="items' + (Number($(this).text()) - 1) + '"]').css("display", "flex");         
        });
    
}