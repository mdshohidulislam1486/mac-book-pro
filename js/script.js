
// function for extra memory 

function memoryUpadate(isAdding){
    const extraMemory = document.getElementById('extra-memory');
    if(isAdding){
        extraMemory.innerText = '180';
    } else{
        extraMemory.innerText ='0';
    }
}

// function for extra storage 

function storageUpdate(storage){
    const extraStorage =document.getElementById('extra-storage');
    
    if(storage == 'primary'){
        extraStorage.innerText= '0';
    } else if(storage == "secondary"){
        extraStorage.innerText= '100';
    } else if(storage == 'finally'){
        extraStorage.innerText = '180';
    }
}

// delivery function 

function delivaryOptions(isFast){
    const deliveryCharge = document.getElementById('delivery-charge');
    if(isFast){
        deliveryCharge.innerText = '20';
    } else{
        deliveryCharge.innerText ='0';
    }
}


// summation of all extra cost 

function totalExtraAdded(){
    const extraMemory = document.getElementById('extra-memory').innerText;
    const extraStorage =document.getElementById('extra-storage').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;

    const totalExtraAdded = parseFloat(extraMemory) + parseFloat(extraStorage) + parseFloat(deliveryCharge);
    return totalExtraAdded;
}


// summation of total cost  

function  subTotalPrice(extraCost){
    const subTotalInput = document.getElementById('subtotal-price');
    const totalInput = document.getElementById('final-price');
    if(extraCost == 'memory-eight' || extraCost == "memory-sixteen" || extraCost == "primary" || extraCost == "secondary" || extraCost == "finally" || extraCost == "free-delivery" || extraCost == "payment-delivery"){
        subTotalInput.innerText = 1299 + totalExtraAdded();
        totalInput.innerText = 1299 + totalExtraAdded();
    }
}

// memory button 

document.getElementById('memory-eight').addEventListener('click', function(){
    memoryUpadate(false);
    subTotalPrice('memory-eight');
})

document.getElementById('memory-sixteen').addEventListener('click', function(){
    memoryUpadate(true);
    subTotalPrice("memory-sixteen"); 
})

// storage button 

document.getElementById('storage-primary').addEventListener('click', function(){
    storageUpdate('primary');
    subTotalPrice('primary'); 
})

document.getElementById('storage-secondary').addEventListener('click', function(){
    storageUpdate("secondary");
    subTotalPrice('secondary');
})

document.getElementById('storage-finally').addEventListener('click', function(){
    storageUpdate("finally");
    subTotalPrice('finally');  
})

// delivery button 

document.getElementById('free-delivery').addEventListener('click', function(){
    delivaryOptions(false);
    subTotalPrice("free-delivery");
})

document.getElementById('payment-delivery').addEventListener('click', function(){
    delivaryOptions(true);
    subTotalPrice('payment-delivery');
})

// promo code button 

document.getElementById('promo-code').addEventListener('click', function(){
    const subTotalInput = document.getElementById('subtotal-price');
    const subTotalInner = parseFloat(subTotalInput.innerText)
    const promoInput = document.getElementById("promo-input");
    const promoValue = promoInput.value

    const finalPriceInput = document.getElementById('final-price');
    if(promoValue == "stevekaku"){
        const discount = subTotalInner / 5;
        const afterDiscountPrice =  subTotalInner - discount;
        finalPriceInput.innerText = afterDiscountPrice; 
    }
    promoInput.value = '';
})