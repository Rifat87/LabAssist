document.addEventListener('DOMContentLoaded', function () {
    const quantitySpinners = document.querySelectorAll('.quantity-spinner');

    quantitySpinners.forEach(function(spinner) {
        const decrementButton = spinner.querySelector('.decrement');
        const incrementButton = spinner.querySelector('.increment');
        const quantityInput = spinner.querySelector('input[type="number"]');

        decrementButton.addEventListener('click', function () {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        incrementButton.addEventListener('click', function () {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
    });
});