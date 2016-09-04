

var numeral : any
function formula() {


  var block_size: number = parseInt((<HTMLInputElement>document.getElementById('block_in')).value)

  var KCBH_IN = parseInt((<HTMLInputElement>document.getElementById('KCBH_IN')).value)
  var UB4 = parseInt((<HTMLInputElement>document.getElementById('UB4')).value)
  var KTBBH = parseInt((<HTMLInputElement>document.getElementById('KTBBH')).value)
  var INITRANS = parseInt((<HTMLInputElement>document.getElementById('INITRANS')).value)
  var KTBIT = parseInt((<HTMLInputElement>document.getElementById('KTBIT')).value)
  var KDBH = parseInt((<HTMLInputElement>document.getElementById('KDBH')).value)

  /*other inputs */
  var pctfreein = parseInt((<HTMLInputElement>document.getElementById('pctfreein')).value)


  var rowheader = parseInt((<HTMLInputElement>document.getElementById('rowheader')).value)
  var sumofcolumnsizes = parseInt((<HTMLInputElement>document.getElementById('sumofcolumnsizes')).value)
  var SB2 = parseInt((<HTMLInputElement>document.getElementById('SB2')).value)

  var rowsrequired = parseInt((<HTMLInputElement>document.getElementById('rowsrequired')).value)


  /*head size calculation */
  var HSIZE = block_size - KCBH_IN - UB4 - KTBBH - (INITRANS - 1) * KTBIT - KDBH;
  var Availspace = Math.ceil(HSIZE * (1 - pctfreein / 100)) - KDBH;

  var Row_Size = rowheader + sumofcolumnsizes;
  var rowspace = Math.max(rowheader + UB4 + SB2, Row_Size) + SB2;
  var Number_of_rows_in_block = Math.floor(Availspace / rowspace);

  var total_blocks_req = rowsrequired / Number_of_rows_in_block;
  var tablesize_in_bytes: number = total_blocks_req * block_size;


  if (!(KCBH_IN > 0 || UB4 > 0 || KTBBH > 0 || INITRANS > 0 || KTBIT > 0 || KDBH > 0)) {
    alert("please fill all feilds.for more information press infor button");
  } else {
     /* dynamicly calls numeral api for coverting bytes to appropriate unit  type*/
    var String = numeral(tablesize_in_bytes).format('0 b');

    alert("The table is " + String);
  }
}
