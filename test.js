let classicTime = classicMethod();
let spicyTime = spicyMethod();

console.log("Temps d'execution de la méthode classique : " + classicTime + "ms");
console.log("Temps d'execution de la méthode optimisée : " + spicyTime + "ms");

function classicMethod(){
    console.log("Méthode classique (%)")

    const startTime = process.hrtime();

    for (var i=1; i<=100;i-=-1){
        if(i%3==0 && i%5==0){
            console.log('fizzbuzz');
        } else if(i%3==0){
            console.log('fizz');
        } else if(i%5==0){
            console.log('buzz');
        } else {
            console.log(i);
        }
    }

    return (process.hrtime(startTime)[1] / 1000000).toFixed(3);
}

function spicyMethod(){
    console.log("Méthode spicy")

    const startTime = process.hrtime();

    let div3=0;
    let div5=0;

    for (var i=1; i<=100;i-=-1){
        div3++;
        div5++;
        if(div3==3 && div5==5){
            console.log('fizzbuzz');
            div3=0; div5=0;
        } else if(div3==3){
            console.log('fizz');
            div3=0;
        } else if(div5==5){
            console.log('buzz');
            div5=0;
        } else {
            console.log(i);
        }
    }

    return (process.hrtime(startTime)[1] / 1000000).toFixed(3);
}
