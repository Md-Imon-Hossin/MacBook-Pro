//function for all cost
    function inputValue(money,Id){
        const costOfId = document.getElementById(Id);
        const costOfIdText = costOfId.innerText
        const cost  = money;
        costOfId.innerText= cost;
    }
    //function for totalPrice
    function totalPrice(){
        const totalPrice = document.getElementById('total-price');
        const bestPrice = document.getElementById('best-price');
        const bestPriceAmount = parseInt(bestPrice.innerText);
        const memoryCost =document.getElementById('extra-memory-cost');
        const memoryCostAmount = parseInt(memoryCost.innerText);
        const storageCost =document.getElementById('extra-storage-cost');
        const storageCostAmount = parseInt(storageCost.innerText);
        const deliveryCost = document.getElementById('delivery-charge');
        const deliveryCostAmount = parseInt(deliveryCost.innerText);
        totalPrice.innerText = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
        const totalCost = document.getElementById('total-cost');
        totalCost.innerText = totalPrice.innerText;
    }

    // event handler for memory buttons
    document.getElementById("first-memory-btn").addEventListener('click', function () {
        const freeUnifiedMemory = inputValue(0,'extra-memory-cost');
        totalPrice();
    })

    document.getElementById("second-memory-btn").addEventListener('click', function () {
        const costlyUnifiedMemory = inputValue(180,'extra-memory-cost')
        totalPrice();
    })

    //event handler for storage buttons
    document.getElementById("first-ssd-btn").addEventListener('click', function(){
        const freeStorage = inputValue(0,'extra-storage-cost');
        totalPrice();
    })
    document.getElementById("second-ssd-btn").addEventListener('click', function(){
        const mediumStorage = inputValue(100,'extra-storage-cost');
        totalPrice();
    })
    document.getElementById("third-ssd-btn").addEventListener('click', function(){
        const expensiveStorage = inputValue(180,'extra-storage-cost');
        totalPrice();
    })

    // event handler for delivery option buttons
    document.getElementById("first-delivery-btn").addEventListener('click', function(){
        const freeDelivery = inputValue(0,'delivery-charge');
        totalPrice();
    })
    document.getElementById("second-delivery-btn").addEventListener('click', function(){
        const paidDelivery = inputValue(20,'delivery-charge');
        totalPrice();
    })

    //event handler for coupon
    document.getElementById('apply-btn').addEventListener('click',function(){
        const couponCode = document.getElementById('coupon-code');
        const couponCodeText = couponCode.value;
        if (couponCodeText ==  'stevekaku' ){
            const totalCost = document.getElementById('total-cost');
            const totalCostText = totalCost.innerText;
            const totalCostAmount = parseInt(totalCostText) ;
            const totalCostAfterCoupon = totalCostAmount -( totalCostAmount * (20/100) );
            totalCost.innerText = totalCostAfterCoupon;
            couponCode.value =' ';
        }
    })