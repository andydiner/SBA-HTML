function goToNewPage()
    {
        var url = document.getElementById('sockdropdown').value;
        if(url != 'None') {
            window.location = url;
        }
        console.log("From market.js");
    }