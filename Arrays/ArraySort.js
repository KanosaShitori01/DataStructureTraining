let a = [5,4,2,1,6];
const insertionSort = (a) => {
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < i; j++){
            if(a[j] < a[i]){
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;            
            }
        }
    }
}
const selectionSort = (a) => {
    for(let i = 0; i < a.length; i++){
        let min = i;
        for(let j = i + 1; j < a.length; j++)
            if(a[min] > a[j]) min = j;
        let temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }
}
const bubbleSort = (a) => {
    for(let i = a.length - 1; i >= 0; i--){
        for(let j = 0; j < i; j++){
            if(a[j] > a[i]) {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
}
bubbleSort(a);
console.log(a);