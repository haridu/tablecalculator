
function formula() {
    var block_size = parseInt(document.getElementById('block_in').value);
    var KCBH_IN = parseInt(document.getElementById('KCBH_IN').value);
    var UB4 = parseInt(document.getElementById('UB4').value);
    var KTBBH = parseInt(document.getElementById('KTBBH').value);
    var INITRANS = parseInt(document.getElementById('INITRANS').value);
    var KTBIT = parseInt(document.getElementById('KTBIT').value);
    var KDBH = parseInt(document.getElementById('KDBH').value);
    /*other inputs */
    var pctfreein = parseInt(document.getElementById('pctfreein').value);
    var rowheader = parseInt(document.getElementById('rowheader').value);
    var sumofcolumnsizes = parseInt(document.getElementById('sumofcolumnsizes').value);
    var SB2 = parseInt(document.getElementById('SB2').value);
    var rowsrequired = parseInt(document.getElementById('rowsrequired').value);
    /*head size calculation */
    var HSIZE = block_size - KCBH_IN - UB4 - KTBBH - (INITRANS - 1) * KTBIT - KDBH;
    var Availspace = Math.ceil(HSIZE * (1 - pctfreein / 100)) - KDBH;
    var Row_Size = rowheader + sumofcolumnsizes;
    var rowspace = Math.max(rowheader + UB4 + SB2, Row_Size) + SB2;
    var Number_of_rows_in_block = Math.floor(Availspace / rowspace);
    var total_blocks_req = rowsrequired / Number_of_rows_in_block;
    var tablesize_in_bytes = total_blocks_req * block_size;
    if (!(KCBH_IN > 0 || UB4 > 0 || KTBBH > 0 || INITRANS > 0 || KTBIT > 0 || KDBH > 0)) {
       /* alert("please fill all feilds.for more information press infor button");*/
    }
    else {
       /* alert("The table is " + tablesize_in_bytes + " bytes");*/
    }
    
   <!-- microsoft SDK -->

	var params = {
            // Request parameters
            "q": tablesize_in_bytes+ "byetes to mb",
            "count": "10",
            "offset": "0",
            "mkt": "en-us",
            "safeSearch": "Moderate",
        };
      
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/news/search?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","be1379007a954dbfaf6c3de70d61c773");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
          var randomIndex = Math.floor(Math.random() * 50);
        	var imgLink = '<img width="500px" src="' + data.d.results[0].Image[randomIndex].MediaUrl + '" />';
        $('#output').html(imgLink);
        
        alert(imgLink)
        })
        .fail(function() {
            alert("error");
        });
   

	
    
}
