function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var ongkos = 2000;
    var objpenumpang = {};
    var hasil = [];
    for( i=0 ; i<arrPenumpang.length ; i++){
        for( j=0 ; j<rute.length ; j++){
            // console.log(rute[j])
            if(arrPenumpang[i][2]===rute[j] ){
                var tujuan = j;
            }
            else if(arrPenumpang[i][1]===rute[j] ) {
                var dari = j;                
            }
            var bayar = (tujuan-dari)*ongkos;
            var objpenumpang ={
            penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang [i][1],
            tujuan : arrPenumpang [i][2],
            bayar : bayar
            }
        }
        hasil.push(objpenumpang);
    }
    return hasil;
}
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]