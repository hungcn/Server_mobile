# Định dạng **REQUEST** và **RESPONSE**

## Các API đều có `RESPONSE` output dạng <b>json</b> có cấu trúc chung như sau

```json
{
    "status": true / false,
    "result": dữ liệu trả về nếu có (có thể có thuộc tính này hoặc không)
}
```

## Các `REQUEST` có thể sử dụng:

> **GET**: [/student/:number]() 
* Lấy danh sách *number* sinh viên trong database
* Nếu có trả về *status = true, result gồm count = số lượng sinh viên và rows là danh sách các sinh viên*.

> **GET**: [/student]() 
* Lấy danh sách tất cả sinh viên có trong database
* Nếu có trả về *status = true, result gồm count = số lượng sinh viên và rows là danh sách các sinh viên*.

> **POST**: [/student]() 
* Thêm một sinh viên vào database
* Định dạng body của `request`: ví dụ: 
```json 
{ 
    "mssv": 1712475, 
    "hoten": "Cao Nhơn Hưng"    
}
```
* Trả về *status = true* nếu thành công, ngược lại *false*.

> **DELETE**: [student/:mssv]() 
* Xóa sinh viên có *mssv* khỏi database
* Trả về *status = true* nếu thành công, ngược lại *false*.

> **PUT**: [/student/:mssv]() 
* Cập nhật thông tin một sinh viên có *mssv*
* Định dạng body của `request`: ví dụ: 
```json 
{  
    "hoten": "Cao Nhơn Hưng (update)"    
}
```
* Trả về *status = true* nếu thành công, ngược lại *false*.

