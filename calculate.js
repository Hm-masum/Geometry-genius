function calculateTriangleArea(){
    const triangleBase=document.getElementById('triangle-base');
    const triangleBaseText=triangleBase.value;
    const base=parseFloat(triangleBaseText)
    console.log(base)

    const triangleHeight=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeight.value;
    const height=parseFloat(triangleHeightText)
    console.log(height)

    const area= 0.5 * base* height;
    console.log(area)


    const triangleArea=document.getElementById('triangle-area')
    triangleArea.innerText=area;
}

function calculateRectanangleArea(){
    const rectangleLength=document.getElementById('rectangle-length');
    const rectangleLengthText= rectangleLength.value;
    const length=parseFloat(rectangleLengthText);

    const rectangleWidth=document.getElementById('rectangle-width');
    const rectangleWidthText= rectangleWidth.value;
    const width=parseFloat(rectangleWidthText);

    const area=length*width;

    const rectangleArea=document.getElementById('rectangle-area')
    rectangleArea.innerText=area;
    
}

function calculateParallelogramArea(){
    const ParallelogramBase=document.getElementById('Parallelogram-base');
    const ParallelogramBaseText=ParallelogramBase.value;
    const base=parseFloat(ParallelogramBaseText)

    const ParallelogramHeight=document.getElementById('Parallelogram-height');
    const ParallelogramHeightText=ParallelogramHeight.value;
    const height=parseFloat(ParallelogramHeightText)
    console.log(height)

    const area=base* height;
    console.log(area)


    const ParallelogramArea=document.getElementById('Parallelogram-area')
    ParallelogramArea.innerText=area;
}

//......using common function
function calculaterhombusArea(){
    const diogonal1= getInputValueById('rhombus-d1');

    const diogonal2= getInputValueById('rhombus-d2');

    const area=0.5 * diogonal1 * diogonal2;
    setInnerTextById('rhombus-area',area)

}

function calculatePentagonArea(){
    const perimeter= getInputValueById('pentagon-perimeter');

    const apothem= getInputValueById('pentagon-apothem');

    const area=0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area',area)

}

function calculateEllipseArea(){
    const major= getInputValueById('ellipse-major');

    const minor= getInputValueById('ellipse-minor');

    const area=3.1416 * major * minor;
    setInnerTextById('ellipse-area',area)
}

function getInputValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldText=inputField.value;
    const inputValue=parseFloat(inputFieldText)
    return inputValue;
}

function setInnerTextById(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}