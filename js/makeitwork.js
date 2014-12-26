$(function() {
    $('#nav-list li a').on('click', clickedLink);
});

        function clickedLink() {
        var page_url = $(this).data('url');
            navigate(page_url);
            
            return false;
        }
        
function navigate(page_url) {
    $.ajax({
        url:page_url,
        success:function(data) {
            //insert the contents of data into middle-content-container
            $('#middle-content-container').html(data);
        },
        dataType:'text'
        
    });
}
        