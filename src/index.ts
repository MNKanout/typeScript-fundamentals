// Union types
// We use union types to accept more than one type of variables.
function kgToLps(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLps(10);
kgToLps('10');

// Intersection types
// We use intersection types when two objects have the same types.
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal types
// We used literal types when we want to limit the variable values to an exact value.
type Quantity = 50 | 100 // the values can range from 50 to 100 for the quantity.
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm';

// Using null and undefined types
// By default these values will trigger an error if used based on the tsconfig settings.
// However, we could still use them using the union operator

function greet (name:string | undefined | null){
    if(name)
        console.log(name.toUpperCase());
    else // If the value is null or undefined
        console.log('Hola')
}

greet(undefined)
