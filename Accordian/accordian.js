document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');

            // Toggle open state
            const isOpen = item.classList.contains('open');

            // Close all items
            document.querySelectorAll('.accordion-item').forEach(accItem => {
                accItem.classList.remove('open');
                accItem.querySelector('.accordion-content').style.maxHeight = null;
                accItem.querySelector('.accordion-content').style.padding = '0 15px';
            });

            // Open clicked item if it was not already open
            if (!isOpen) {
                item.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '15px';
            }
        });
    });
});
