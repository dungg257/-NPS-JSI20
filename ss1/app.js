// Cho 1 dữ liệu sau:
let students = [
    {
      id: 1,
      name: "Lê Anh",
      age: 1,
      major: "Computer Science",
    },
    {
      id: 2,
      name: "Vũ Dũng",
      age: 12,
      major: "Mathematics",
    },
  ];
  /*
  Yêu cầu:
  - Sử dụng push() để thêm 1 học sinh mới vào
- Sử dụng find() hoặc findIndex() đề tìm kiếm học sinh theo id.
- Sử dụng splice() để xóa 1 học sinh khỏi mảng dựa trên id.
- Tạo 1 function cho phép tìm kiếm học sinh dựa trên tên (name) hoặc chuyên ngành (major. 
Function này trả về mảng mới chứa các học sinh phù hợp với điều kiện)
- Cập nhật và in ra mảng mới.
*/

students.push({
    id: 3,
    name: "quân",
    age: 20,
    major: "thông minh có hạn mà thủ đoạn vô biên mưa hèn kế bẩn, bụng bự đít teo, củ cải treo lòng thòng, kiêu ngạo, ngu lâu dốt bền khó đào tạo phản quốc hiền với giặc ác với dân "
  });
  console.log(students.find(obj => obj.id==2));
  console.log(students.findIndex(obj => obj.id==2));
  
  
