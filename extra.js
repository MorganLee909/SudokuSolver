let arraysEqual = (arr1, arr2)=>{
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

let findPossibles = ()=>{
    let rowArr;
    let columnArr;
    let squareArr;
    let isDone = false;
    let runCount = 0;

    while(!isDone){
        isDone = true;
        runCount++;
        for(let y = 0; y < arr.length; y++){
            for(let x = 0; x < arr[y].length; x++){
                if(arr[y][x].length !== 1){
                    rowArr = [];
                    columnArr = [];
                    squareArr = [];

                    //get all values in row
                    for(let y2 = 0; y2 < 9; y2++){
                        if(arr[y2][x].length === 1 && y !== y2){
                            rowArr.push(arr[y2][x][0]);
                        }
                    }

                    //get all values in column
                    for(let x2 = 0; x2 < 9; x2++){
                        if(arr[y][x2].length === 1 && x !== x2){
                            columnArr.push(arr[y][x2][0]);
                        }
                    }

                    //get all values in square
                    let squareInputs = [getArrForBox(y), getArrForBox(x)];
                    for(let i of squareInputs[0]){
                        for(let j of squareInputs[1]){
                            if(arr[i][j].length === 1){
                                squareArr.push(arr[i][j][0]);
                            }
                        }
                    }

                    //convert 3 arrays into one list of possibles
                    let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                    let possibles = [];
                    for(let i = 0; i < numList.length; i++){
                        let checker = numList[i];
                        if(!rowArr.includes(checker) && !columnArr.includes(checker) && !squareArr.includes(checker)){
                            possibles.push(numList[i]);
                        }
                    }

                    //check is anything was changed
                    if(!arraysEqual(arr[y][x], possibles)){
                        isDone = false;
                        arr[y][x] = possibles;
                    }
                }
            }
        }
    }

    console.log(runCount);
}

let solveSudoku = ()=>{
    //Create the array and get user inputs
    createArray();

    //Fill in possibles until nothing changes
    findPossibles(arr);

    //Fill in the inputs
    fillIn(arr);

}