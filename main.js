
// Click vào nút login
document.getElementById("btn_Login").onclick=function(){
    console.log("login")

    var username= document.getElementById("txtusername").value;
    console.log(username);

    var password = document.getElementById("txtpassword").value;
    console.log(password);
}

// BÀI TẬP 1- Tính Lương Nhân Viên
/*Đầu vào:
    - Tạo biến số ngày làm việc bằng cách lấy giá trị từ người dùng.
*Xử lý:
    - Tính tổng tiền lương = số ngày * 100000.
*Đầu ra:
    - In ra kết quả tiền lương.*/

document.getElementById("btn_caculator").onclick=function(){
    var dayNumber = document.getElementById("day").value;
    var Sum = dayNumber* 100000;
    var kqSum ="Tiền lương là: " + Sum;
    document.getElementById("thongBao").innerHTML =kqSum;
    console.log(kqSum); 
}

//BÀI TẬP 2- TÍNH TRUNG BÌNH CỘNG
/*Đầu vào:
    - Tạo biến cho người dùng nhập vào 5 số thực
*Xử lý:
    - Tính TBC: Cộng 5 số / 5
*Đầu ra:
    - In ra kết quả.*/

document.getElementById("average").onclick = function(){
    var a = document.getElementById("number1").value*1;
    var b = document.getElementById("number2").value*1;
    var c = document.getElementById("number3").value*1;
    var d = document.getElementById("number4").value*1;
    var e = document.getElementById("number5").value*1;
    var sum = a + b + c + d + e;
    var average = sum/5;
    var kqAverage = "Trung Bình Cộng là: " + average;
    document.getElementById("ketQua").innerHTML = kqAverage;
};

// BÀI TẬP 3- QUY ĐỔI TIỀN
/*  Đầu vào:
        - Tạo biến giá tiền VND.
    Xử lý:
        - Tính tiền qui đổi bằng tỷ lệ qui đổi * số USD
        - Tạo một biến tỷ lệ qui đổi có chứa thẻ p 
        - Rồi gán giá trị quy đổi đi kèm với nó.
    Đầu ra:
        - Xuất giá trị tiền quy đổi VND ra*/

document.getElementById("tygia").onclick = function(){
    var priceVnd = 23500;
    var amount = document.getElementById("amount").value;
    var exchangeRate = amount * priceVnd; 

    document.getElementById("info").innerHTML="";
    var kqExchange = document.createElement("p");
    kqExchange.innerHTML = "Số tiền đổi được là: " + exchangeRate;

    document.getElementById("info").appendChild(kqExchange);
};


//BÀI TẬP 4- TÍNH DIỆN TÍCH CHU VI HÌNH CN
/*  Đầu vào:
        - Tạo biến lấy giá trị chiều dài HCN.
        - Tạo biến lấy giá trị chiều rộng HCN.
    Xử lý:
        - Tính diện tích HCN = chiều dài * chiểu rộng
        - Tính chu vi HCN = (chiều dài + chiều rộng)*2
    Đầu ra:
        - Xuất diện tích và chu vi của HCN.*/

document.getElementById("area").onclick = function (){
    var chieuDai = document.getElementById("length").value*1;
    var chieuRong = document.getElementById("width").value*1;
    var dienTich = chieuDai * chieuRong;

    document.getElementById("kqArea").innerHTML= "";
    var tagArea = document.createElement("p");
    tagArea.innerHTML = "Diện tích HCN là: " + dienTich + "cm2";
    document.getElementById("kqArea").appendChild(tagArea);
};

document.getElementById("perimeter").onclick = function(){
    var chieuDai = document.getElementById("length").value*1;
    var chieuRong = document.getElementById("width").value*1;
    var chuVi = (chieuDai + chieuRong)*2;

    document.getElementById("kqPerimeter").innerHTML ="";
    var tagPerimeter = document.createElement("p");
    tagPerimeter.innerHTML = "Chu vi của HCN là: " + chuVi + "cm"
    document.getElementById("kqPerimeter").appendChild(tagPerimeter);
}

//BÀI TẬP 5- TÍNH TỔNG 2 KÝ SỐ
/*  Đầu vào:
        - Nhập số bất kỳ có 2 ký số.
        - Tạo biến lấy giá trị đơn vị của số bất kỳ đó.
        - Tạo biến lấy giá trị hàng chục của số bất kỳ đó.
    Xử lý:
        
        - Tính tổng của 2 biến.
        - Tạo thẻ p chứa thông tin xuất ra kèm giá trị tổng đó.
    Đầu ra:
        - Xuất ra kết quả tổng.

*/
document.getElementById("total").onclick = function(){
    var unit = (document.getElementById("number").value)%10 *1;
    var ten = Math.floor((document.getElementById("number").value)/10) *1;
    var sum = unit + ten;
    var theP = "<p>Tổng 2 ký số là: </p>"
    document.getElementById("result").innerHTML= theP + sum; 
};