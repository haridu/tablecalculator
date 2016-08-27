function formula(){
  
  
  var block_size =document.getElementById('block_in').value
 
  var KCBH_IN=document.getElementById('KCBH_IN').value
  var UB4=document.getElementById('UB4').value
  var KTBBH=document.getElementById('KTBBH').value
  var INITRANS=document.getElementById('INITRANS').value
  var KTBIT=document.getElementById('KTBIT').value
  var KDBH=document.getElementById('KDBH').value
 
 <!-- other inputs -->
   var pctfreein=document.getElementById('pctfreein').value
   
  
   var rowheader=document.getElementById('rowheader').value
   var sumofcolumnsizes=document.getElementById('sumofcolumnsizes').value
   var SB2=document.getElementById('SB2').value
    
   var rowsrequired=document.getElementById('rowsrequired').value
  
   
 <!-- headsize cal -->
   var HSIZE=block_size-KCBH_IN-UB4-KTBBH-(INITRANS-1)*KTBIT-KDBH;
   var Availspace=Math.ceil(HSIZE*(1-pctfreein/100))-KDBH;
  
   var Row_Size=rowheader+sumofcolumnsizes ;
   var rowspace=Math.max(rowheader+UB4+SB2,Row_Size)+SB2;
   var Number_of_rows_in_block= Math.floor(Availspace/rowspace);
   
   var total_blocks_req=rowsrequired/Number_of_rows_in_block;
   var tablesize_in_bytes=total_blocks_req*block_size;
   
    alert(tablesize_in_bytes);
	
 }
   