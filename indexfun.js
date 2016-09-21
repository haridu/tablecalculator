function onSuccess(googleUser) {
        var profile = googleUser.getBasicProfile();
        gapi.client.load('plus', 'v1', function () {
            var request = gapi.client.plus.people.get({
                'userId': 'me'
            });
            
            request.execute(function (resp) {
                var profileHTML = '<div class="profile"><div class="head">Welcome '+resp.name.givenName+'! <a href="javascript:void(0);" onclick="signOut();">Sign out</a></div>';
                profileHTML += '<img src="'+resp.image.url+'"/><div class="proDetails"><p>'+resp.displayName+'</p><p>'+resp.emails[0].value+'</p><p>'+resp.gender+'</p><p>'+resp.id+'</p><p><a href="'+resp.url+'">View Google+ Profile</a></p></div></div>';
                $('.userContent').html(profileHTML);
                $('#gSignIn').slideUp('slow');
            });
        });
    }
    function onFailure(error) {
        alert(error);
    }
    function renderButton() {
        gapi.signin2.render('gSignIn', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
    }
    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            $('.userContent').html('');
            $('#gSignIn').slideDown('slow');
        });
    }
    
var numeral;
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
        alert("please fill all feilds.for more information press infor button");
    }
    else {
       /* dynamicly calls numeral api for coverting bytes to appropriate unit  type*/
        var String = numeral(tablesize_in_bytes).format('0 b');
        
        alert("The table is " + String);
    }
}
