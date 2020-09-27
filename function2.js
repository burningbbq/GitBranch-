function BMI(height,weight){
    console.log((weight/(Math.pow(height/100,2))).toFixed(1));
}
BMI(178,70);