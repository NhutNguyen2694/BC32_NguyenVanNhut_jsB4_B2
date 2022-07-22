// // Đầu vào
// var ngay = +document.getElementById("ngay").value;
// var thang = +document.getElementById("thang").value;
// var nam = +document.getElementById("nam").value;

document.getElementById("nutHomqua").onclick = function () {
    // Đầu vào
    var ngay = +document.getElementById("ngay").value;
    var thang = +document.getElementById("thang").value;
    var nam = +document.getElementById("nam").value;
    // Xử lí
    var ngayqua = 0;
    var thangqua = 0;
    var namqua = 0;
    var error = "";
    if (
        thang === 1 ||
        thang === 3 ||
        thang === 5 ||
        thang === 7 ||
        thang === 8 ||
        thang === 10 ||
        thang === 12
    ) {
        if (ngay === 1) {
            if (thang === 8) {
                ngayqua = 31;
                thangqua = --thang;
                namqua = nam;
            } else if (thang === 3) {
                ngayqua = 28;
                thangqua = --thang;
                namqua = nam;
            } else if (thang === 1) {
                ngayqua = 31;
                thangqua = 12;
                namqua = --nam;
            } else {
                ngayqua = 30;
                thangqua = --thang;
                namqua = nam;
            }
        } else if (ngay <= 31) {
            ngayqua = --ngay;
            thangqua = thang;
            namqua = nam;
        } else {
            error = "Tháng này chỉ có trên 31 ngày";
        }
    } else if (thang === 2) {
        if (ngay === 1) {
            ngayqua = 31;
            thangqua = --thang;
            namqua = nam;
        } else if (ngay <= 28) {
            ngayqua = --ngay;
            thangqua = thang;
            namqua = nam;
        } else {
            error = "Tháng 2 chỉ có 28 ngày";
        }
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        if (ngay === 1) {
            ngayqua = 30;
            thangqua = --thang;
            namqua = nam;
        } else if (ngay <= 30) {
            ngayqua = --ngay;
            thangqua = thang;
            namqua = nam;
        } else {
            error = "Tháng này chỉ có 30 ngày";
        }
    } else {
        error = "Chỉ có 12 tháng trong một năm";
    }
    var result = "";
    if (ngayqua > 0) {
        result = ngayqua + " / " + thangqua + " / " + namqua + error;
    } else {
        result = error;
    }
    //   Đầu ra
    document.getElementById("showResult").innerHTML = result;
};

//Ngày mai
function nutmai() {
    // Đầu vào
    var ngay = +document.getElementById("ngay").value;
    var thang = +document.getElementById("thang").value;
    var nam = +document.getElementById("nam").value;
    // Xử lí
    var ngaysau = 0;
    var thangsau = 0;
    var namsau = 0;
    var error = "";

    if (
        thang === 1 ||
        thang === 3 ||
        thang === 5 ||
        thang === 7 ||
        thang === 8 ||
        thang === 10 ||
        thang === 12
    ) {
        if (ngay === 31) {
            if (thang === 12) {
                ngaysau = 1;
                thangsau = 1;
                namsau = ++nam;
            } else {
                ngaysau = 1;
                thangsau = ++thang;
                namsau = nam;
            }
        } else if (ngay <= 30) {
            ngaysau = ++ngay;
            thangsau = thang;
            namsau = nam;
        } else {
            error = "Tháng này không có trên 31 ngày";
        }
    } else if (thang === 2) {
        if (ngay === 28) {
            ngaysau = 1;
            thangsau = ++thang;
            namsau = nam;
        } else if (ngay < 28) {
            ngaysau = ++ngay;
            thangsau = thang;
            namsau = nam;
        } else {
            error = "Tháng 2 chỉ có 28 ngày";
        }
    } else {
        if (ngay === 30) {
            ngaysau = 1;
            thangsau = ++thang;
            namsau = nam;
        } else if (ngay < 30) {
            ngaysau = ++ngay;
            thangsau = thang;
            namsau = nam;
        } else {
            error = "Tháng này không có trên 30 ngày";
        }
    }
    var result = "";
    if (ngaymai > 0) {
        result = ngayqua + " / " + thangqua + " / " + namqua + error;
    } else {
        result = error;
    }
    // Đầu ra
    document.getElementById("showResult").innerHTML =
        ngaysau + " / " + thangsau + " / " + namsau;
}
// bai 6
document.getElementById("nhap").onclick = function () {
    // Đầu vào
    var month = document.getElementById("month").value * 1;
    var year = document.getElementById("year").value * 1;

    // Xử lí
    var day = 0;
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        day = 31;
    }
    else if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            day = 29;
        }
        else {
            day = 28;
        }
    }
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
        day = 30;
    }
    else {
        error = "Một năm chỉ có 12 tháng";
    }

    var result = "";
    if (month > 13) {
        result = error;
    }
    else {
        result = "Tháng " + month + " năm " + year + " có " + day + " ngày ";
    }

    //Đầu ra
    document.getElementById("showResultb6").innerHTML = result;
}
// bài 7
document.getElementById("nut").onclick = function(){
    // Đầu vào
    var number = document.getElementById("number").value * 1;

    // Xử lí
    var hangtram = Math.floor(number / 100);
    var hangchuc = Math.floor(number % 100 / 10);
    var donvi = Math.floor(number % 10);
    var goitram = "";
    var goichuc = "";
    var goidonvi ="";
    switch (hangtram){
        case 1: {
            goitram = "Một";
        };break;
        case 2: {
            goitram = "Hai";
        };break;
        case 3: {
            goitram = "Ba";
        };break;
        case 4: {
            goitram = "Bốn";
        };break;
        case 5: {
            goitram = "Năm";
        };break;
        case 6: {
            goitram = "Sáu";
        };break;
        case 7: {
            goitram = "Bảy";
        };break;
        case 8: {
            goitram = "Tám";
        };break;
        case 9: {
            goitram = "Chín";
        };break;
    }
    switch (hangchuc){
        case 1: {
            goichuc = "một";
        };break;
        case 2: {
            goichuc = "hai";
        };break;
        case 3: {
            goichuc = "ba";
        };break;
        case 4: {
            goichuc = "bốn";
        };break;
        case 5: {
            goichuc = "năm";
        };break;
        case 6: {
            goichuc = "sáu";
        };break;
        case 7: {
            goichuc = "bảy";
        };break;
        case 8: {
            goichuc = "tám";
        };break;
        case 9: {
            goichuc = "chín";
        };break;
    }
    switch (donvi){
        case 1: {
            goidonvi = "một";
        };break;
        case 2: {
            goidonvi = "hai";
        };break;
        case 3: {
            goidonvi = "ba";
        };break;
        case 4: {
            goidonvi = "bốn";
        };break;
        case 5: {
            goidonvi = "năm";
        };break;
        case 6: {
            goidonvi = "sáu";
        };break;
        case 7: {
            goidonvi = "bảy";
        };break;
        case 8: {
            goidonvi = "tám";
        };break;
        case 9: {
            goidonvi = "chín";
        };break;
    }

    // Đầu ra 
    document.getElementById("showResultb7").innerHTML = goitram + " trăm " + goichuc + " mươi " + goidonvi;
}
// bai 8
document.getElementById("sosanh").onclick = function(){
    // Đầu vào
    var tenSV1 = document.getElementById("tenSv1").value;
    var toadoX1 = document.getElementById("toadoX1").value * 1;
    var toadoY1 = document.getElementById("toadoY1").value * 1;
    
    var tenSV2 = document.getElementById("tenSv2").value;
    var toadoX2 = document.getElementById("toadoX2").value * 1;
    var toadoY2 = document.getElementById("toadoY2").value * 1;
    
    var tenSV3 = document.getElementById("tenSv3").value;
    var toadoX3 = document.getElementById("toadoX3").value * 1;
    var toadoY3 = document.getElementById("toadoY3").value * 1;
    
    var toadoX4 = document.getElementById("toadoX4").value * 1;
    var toadoY4 = document.getElementById("toadoY4").value * 1;
    
    // Xứ lí
    /* Tính chiều dài quảng đường bằng đường chéo hình chữ nhật                      z = Math.sqrt(X*X + Y*Y) */
    var long1 = Math.sqrt(toadoX1 * toadoX1 + toadoY1 * toadoY1);
    var long2 = Math.sqrt(toadoX2 * toadoX2 + toadoY2 * toadoY2);
    var long3 = Math.sqrt(toadoX3 * toadoX3 + toadoY3 * toadoY3);
    var long4 = Math.sqrt(toadoX4 * toadoX4 + toadoY4 * toadoY4);

    var range1 = Math.abs(long4 - long1);
    var range2 = Math.abs(long4 - long2);
    var range3 = Math.abs(long4 - long3);
    var result = "";
    if(range1 > range2 && range1 > range3){
        result = tenSV1;
    }
    else if(range2 > range1 && range2 > range3){
        result = tenSV2;
    }else if(range3 > range1 && range3 > range2){
        result = tenSV3;
    }else{
        result = "không xác định";
    }

    //Đầu ra
    document.getElementById("showResultb8").innerHTML = "Sinh viên xa nhất là : " + result;
}
