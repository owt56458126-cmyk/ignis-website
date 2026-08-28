function toggleAccordion(element) {
    const item = element.parentElement;
    item.classList.toggle('active');
}

let isAllExpanded = false;

function toggleAllAccordions() {
    const items = document.querySelectorAll('.accordion-item');
    const toggleBtn = document.getElementById('toggleAllBtn');
    
    isAllExpanded = !isAllExpanded;

    items.forEach(item => {
        if (isAllExpanded) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    toggleBtn.textContent = isAllExpanded ? '全部收合 －' : '全部展開 ＋';
}

function searchPlatform() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const accordionItems = document.querySelectorAll('.accordion-item');
    const categoryHeaders = document.querySelectorAll('.category-header');
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;

    accordionItems.forEach(item => {
        const titleText = item.querySelector('.title-text').textContent.toLowerCase();
        const contentText = item.querySelector('.accordion-content').textContent.toLowerCase();

        if (titleText.includes(query) || contentText.includes(query)) {
            item.style.display = 'block';
            if (query !== '') {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
            visibleCount++;
        } else {
            item.style.display = 'none';
            item.classList.remove('active');
        }
    });

    if (query !== '') {
        categoryHeaders.forEach(header => header.style.display = 'none');
    } else {
        categoryHeaders.forEach(header => header.style.display = 'block');
    }

    if (visibleCount === 0 && query !== '') {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = searchQuery;
            searchPlatform();
        }
    }
});