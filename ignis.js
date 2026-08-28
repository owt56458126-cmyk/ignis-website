// 手風琴單項切換
function toggleAccordion(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
}

// 手風琴全選/全部收起
function toggleAllAccordions() {
    const items = document.querySelectorAll('.accordion-item');
    const btn = document.getElementById('toggleAllBtn');
    
    const hasInactive = Array.from(items).some(item => !item.classList.contains('active'));

    items.forEach(item => {
        if (hasInactive) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    if (btn) {
        btn.textContent = hasInactive ? '全部收起 －' : '全部展開 ＋';
    }
}

// 主頁與通用搜尋處理
function handleHomeSearch(event) {
    if (event.key === 'Enter') {
        executeHomeSearch();
    }
}

function executeHomeSearch() {
    const input = document.getElementById('homeSearchInput');
    if (input) {
        const query = input.value.trim();
        if (query) {
            window.location.href = `platform.html?q=${encodeURIComponent(query)}`;
        }
    }
}

// 福利頁面搜尋處理
function handleWelfareSearch(event) {
    if (event.key === 'Enter') {
        executeWelfareSearch();
    }
}

function executeWelfareSearch() {
    const input = document.getElementById('welfareSearchInput');
    if (!input) return;

    const query = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll('#welfareList .welfare-card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}