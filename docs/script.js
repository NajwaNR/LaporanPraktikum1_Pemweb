function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    const nav = document.querySelector('.bottom-nav');
    if (pageId === 'success-page') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}

document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showPage('success-page');
});