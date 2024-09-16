document.addEventListener('DOMContentLoaded', function() {
    const placeOrderBtn = document.getElementById('place-order-btn');
    const phoneNumber = document.getElementById('phone-number');

    placeOrderBtn.addEventListener('click', function() {
        // Toggle the visibility of the phone number
        if (phoneNumber.style.display === 'none' || phoneNumber.style.display === '') {
            phoneNumber.style.display = 'block';
        } else {
            phoneNumber.style.display = 'none';
        }
    });
});
