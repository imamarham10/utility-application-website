const meter = document.querySelector('#meter');
const millimeter = document.querySelector('#millimeter');
const centimeter = document.querySelector('#centimeter');
const kilometer = document.querySelector('#kilometer');
const nanometer = document.querySelector('#nanometer');
const micrometer = document.querySelector('#micrometer');

function meterToAll(){
    const m = parseFloat(meter.value);
    const km = m * 0.001;
    const mm = m * 1000;
    const cm = m * 100;
    const nm = 1000000000 * m;
    const micro = m * 1000000;
    kilometer.value = km;
    centimeter.value = cm;
    millimeter.value = mm;
    nanometer.value = nm;
    micrometer.value = micro;
}
function millimeterToAll(){
    const mm = parseFloat(millimeter.value);
    const m = 0.001 * mm;
    const km = 0.000001 * mm;
    const cm = 0.1 * mm;
    const nm = 1000000 * mm;
    const micro = 1000 * mm;
    meter.value = m;
    kilometer.value = km;
    centimeter.value = cm;
    nanometer.value = nm;
    micrometer.value = micro;
}
function kilometerToAll(){
    const km = parseFloat(kilometer.value);
    const m = 1000 * km;
    const cm = 100000 * km;
    const mm = 1000000 * km;
    const nm = 1000000000000 * km;
    const micro = 1000000000 * km;
    meter.value = m;
    millimeter.value = mm;
    centimeter.value = cm;
    nanometer.value = nm;
    micrometer.value = micro;
}
function centimeterToAll(){
    const cm = parseFloat(centimeter.value);
    const m = 0.01 * cm;
    const km = 0.00001 * cm;
    const mm = 10 * cm;
    const micro = 10000 * cm;
    const nm = 10000000 * cm;
    meter.value = m;
    millimeter.value = mm;
    kilometer.value = km;
    nanometer.value = nm;
    micrometer.value = micro;
}
function nanometerToAll(){
    const nm = parseFloat(nanometer.value);
    const m = 1.E-9 * nm;
    const km = 1.E-12 * nm;
    const mm = 0.000001 * nm;
    const micro = 0.001 * nm;
    const cm = 1.E-7 * nm;
    meter.value = m;
    millimeter.value = mm;
    kilometer.value = km;
    centimeter.value = cm;
    micrometer.value = micro;
}
function micrometerToAll(){
    const micro = parseFloat(micrometer.value);
    const m = 0.000001 * micro;
    const km = 9.999999999E-10 * micro;
    const mm = 0.001 * micro;
    const nm = 1000 * micro;
    const cm = 0.0001 * nm;
    meter.value = m;
    millimeter.value = mm;
    kilometer.value = km;
    centimeter.value = cm;
    nanometer.value = nm;
}
meter.addEventListener('input',()=>{
    meterToAll();
});
millimeter.addEventListener('input',()=>{
    millimeterToAll();
});
kilometer.addEventListener('input',()=>{
    kilometerToAll();
});
centimeter.addEventListener('input',()=>{
    centimeterToAll();
});
nanometer.addEventListener('input',()=>{
    nanometerToAll();
});
micrometer.addEventListener('input',()=>{
    micrometerToAll();
});
