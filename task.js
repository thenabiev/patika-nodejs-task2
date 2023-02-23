const pi=3.14;

const circleArea=(rad)=>{
    return pi * Math.pow(rad, 2)
}


const circleCircumference=(rad)=>{
    return 2*(pi * rad)
}

module.exports={circleArea, circleCircumference};