function tri(numbers, order) {
    var temp = [];
    if (Array.isArray(numbers)) {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (order == "asc" && numbers[i] < numbers[j]) {
                    temp = numbers[j];
                    numbers[j] = numbers[i];
                    numbers[i] = temp;
                }
                if (order == "desc" && numbers[j] < numbers[i]) {
                    temp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }
        return numbers;
    }
}

console.log(tri([3,1,2],"asc"));
console.log(tri([3,1,2],"desc"));