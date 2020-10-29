const printInventory = require('./main/main');

var inputs = [
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00

    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000001',
        Name: 'Sprite',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000001',
        Name: 'Sprite',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000004',
        Name: 'Battery',
        Unit: 'a',
        Price: 2.00
    }
];

// main();

console.log(printInventory(inputs));