// ###################################
// 
//     Projekt Idealgewicht-Rechner
//                                     
// ###################################

// Variablen
const heightInput = document.body.querySelector('#heightInput');
const ageInput = document.body.querySelector('#ageInput');
const anatomySlim = document.body.querySelector('#slim');
const anatomyMassive = document.body.querySelector('#massive');
const calculate = document.body.querySelector('#calcBtn');
const output = document.body.querySelector('#output');

// Formelbestandteile
const heightSubtrctVal = 100;
const ageDivVal = 10;
const constMultiVal = 0.9;
const multiValMassive = 1.1;
const multiValSlim = 0.9;

let height;
let age;
let idealWeight;

// User Input Körpergröße, Alter und Körperbau

heightInput.addEventListener('input', () => 
{
    event.preventDefault();
    height = Number(heightInput.value);
})

ageInput.addEventListener('input', () => 
{
    event.preventDefault();
    age = Number(ageInput.value);
})

// Berechnung Idealgewicht
calculate.addEventListener('click', () => 
{
    event.preventDefault();
    if(isNaN(height) === false && height !== 0 && isNaN(age) === false && age !== 0)
    {
        if(anatomyMassive.checked)
        {
            idealWeight = (((height - heightSubtrctVal) + (age / ageDivVal)) * constMultiVal * multiValMassive).toFixed(1);
            console.log(idealWeight);
        }
        else if(anatomySlim.checked)
        {
            idealWeight = Math.floor(((height - heightSubtrctVal) + (age / ageDivVal)) * constMultiVal * multiValSlim);
            console.log(idealWeight);
        }
        else 
        {
            output.textContent = 'Bitte alle Eingabefelder ausfüllen und Auswahl treffen.';
            return false;
        }

        output.textContent = `Dein Idealgewicht ist ${idealWeight} kg.`;
    }
    else 
    {
        output.textContent = 'Bitte alle Eingabefelder ausfüllen und Auswahl treffen.';
        return false;
    }
})

