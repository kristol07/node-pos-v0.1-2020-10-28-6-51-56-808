module.exports = function main(items) {

    // function Item(barcode, name, unit, price) {
    //     this.barcode = barcode;
    //     this.name = name;
    //     this.unit = unit;
    //     this.price = price;
    // }

    function UniqueItems(quantity, unit, price) {
        this.quantity = quantity;
        this.unit = unit;
        this.price = price;
    }

    function printReceipt(uniqueItems) {
        var header = '***<store earning no money>Receipt ***\n';
        var hLine = '----------------------\n';
        var end = '**********************\n';
        var content = [];
        var total = 0;
        for (const k of Object.getOwnPropertyNames(uniqueItems)) {
            let quantity = uniqueItems[k].quantity;
            var unit;
            if (uniqueItems[k].unit !== 'a') {
                if (quantity > 0) {
                    unit = ' ' + uniqueItems[k].unit + 's';
                } else {
                    unit = ' ' + uniqueItems[k].unit;
                }
            } else {
                unit = '';
            }
            let price = uniqueItems[k].price;
            let subTotal = quantity * price;
            total += subTotal;

            content.push('Name: ' + k + ', Quantity: ' + quantity + unit + ', Unit price: ' + price.toFixed(2) + ' (yuan), Subtotal: ' + subTotal.toFixed(2) + ' (yuan)\n');
        }

        total = 'Total: ' + total.toFixed(2) + ' (yuan)\n';

        var receipt = header + content.join('') + hLine + total + end;

        return receipt;
    }
    
    var uniqueItems = {};
    for (const item of items) {
        if (uniqueItems[item.Name] === undefined) {
            uniqueItems[item.Name] = new UniqueItems(1, item.Unit, item.Price);
        } else {
            uniqueItems[item.Name].quantity += 1;
        }
    }
    var result = printReceipt(uniqueItems);
    return result;
};