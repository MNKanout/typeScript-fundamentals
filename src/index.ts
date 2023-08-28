type Customer = {
    birthday: Date
}

let customers: number[] = [0,1];

function getCustomer (id: number | null | undefined) 
{   // If id = 0, return null, otherwise return a birthday object.
    return id === 0 ? null : {birthday: new Date()}
}
// Normal way of checking for null and undefined.
let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday)

// Prints the birthday property if the customer is not null.
console.log(customer?.birthday)

// Optional element access operator
// Return the element if not null.
customers?.[0]

// Optional call operator
// It will only call the log variable only if it is referencing a function.
let log: any = null;
log?.('a');