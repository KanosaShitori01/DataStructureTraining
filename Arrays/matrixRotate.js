// (*) Ma trận
// 1. Xoay ma trận về một góc 90 độ sang trái
let a = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [7, 8, 9, 0],
    [7, 8, 9, 0]
]
// => output = [
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9]
// ]
let N = a.length
// Ta sẽ xử lý ma trận này dựa trên toán hình học.
// Bây giờ, hãy tưởng tượng mảng này là một hình vuông có 4 cạnh. 
// Và một hình vuông nếu muốn xoay 90 độ, thì chỉ cần lăn nó một vòng ở góc 90 là xong.
// Vậy nên, ta có điểm tâm ở giữa là O, và bốn góc vuông là A, B, C, D.
// Từ đó, suy ra hướng xoay phù hợp để thực hiện thành công vòng quay 
// 90 độ : 
// Lần 1:
// -> A = C -> C = D -> D = B -> B = A
// Lần 2: 
// -> A2 = C2 -> C2 = D2 -> D2 = B2 -> B2 = A2
// Được rồi, giờ thì áp dụng công thức này vào mảng vuông này thôi.
const rotate90Left = (a) => {
    for(let i = 0; i < parseInt(N/2); i++){
        for(let j = i; j < N - i - 1; j++){
            let temp = a[i][j]; // Đầu tiên, ta phải giữ điểm A làm điểm đích
            // Sau đó là các điểm còn lại theo thứ tự để thực hiện công thức xoay chiều.
            a[i][j] = a[N - j - 1][i];  
            a[N - j - 1][i] = a[N - i - 1][N - j - 1];
            a[N - i - 1][N - j - 1] = a[j][N - i - 1];
            a[j][N - i - 1] = temp;
        }
    }
}
const rotate90Right = (a) => {
    for(let i = 0; i < parseInt(N/2); i++){
        for(let j = i; j < N - i - 1; j++){
            let temp = a[i][N - j - 1]; // Đầu tiên, ta phải giữ điểm A làm điểm đích
            // Sau đó là các điểm còn lại theo thứ tự để thực hiện công thức xoay chiều.
            a[i][N - j - 1] = a[N - j - 1][N - i - 1];
            a[N - j - 1][N - i - 1] = a[N - i - 1][j];
            a[N - i - 1][j] = a[j][i];
            a[j][i] = temp;
        }
    }
}
const rotateReverse = (a) => {
    let b = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    for(let i = 0; i < N; i++){
        for(let j = 0; j < a[i].length; j++){
            b[i][j] = a[N - i - 1][j]
        }
    }
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a[i].length; j++){
            a[i][j] = b[i][j];
        }
    }
}
rotateReverse(a)

a.forEach(a => console.log(a))