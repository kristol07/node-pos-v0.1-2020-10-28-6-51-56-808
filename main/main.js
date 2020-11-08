module.exports = function main(items) {
    
    function formatUnit(quantity, unit)
    {
        if(unit !== 'a')
        {
            if(quantity > 0)
            {
                return ' ' + unit + 's';
            }
            else
            {
                return ' ' + unit;
            }
        }
        else
        {
            return '';
        }
    }

    function printReceipt(uniqueItems) {
        var header = '***<store earning no money>Receipt ***\n';
        var hLine = '----------------------\n';
        var end = '**********************\n';

        var detail = Object.getOwnPropertyNames(uniqueItems).reduce((content, name) => {
            let quantity = uniqueItems[name]["count"];
            let unit = formatUnit(quantity, uniqueItems[name]["item"]["Unit"]);
            let price = uniqueItems[name]["item"]["Price"];
            let subTotal = quantity * price;

            content.push(`Name: ${name}, Quantity: ${quantity}${unit}, Unit price: ${price.toFixed(2)} (yuan), Subtotal: ${subTotal.toFixed(2)} (yuan)\n`);
            return content;
        }, []);

        var totalPrice = Object.getOwnPropertyNames(uniqueItems).reduce((total, name) => {
            total += uniqueItems[name]["item"]["Price"] * uniqueItems[name]["count"];
            return total;
        }, 0);
        var total = `Total: ${totalPrice.toFixed(2)} (yuan)\n`;

        var receipt = header + detail.join('') + hLine + total + end;
        return receipt;
    }

    const uniqueItems = items.reduce((total, item) => {
        total[item.Name] = {
            "count": total[item.Name] ? (total[item.Name]["count"] + 1) : 1,
            "item": item
        }
        return total;
    }, {});

    var result = printReceipt(uniqueItems);
    return result;
};