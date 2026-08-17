document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}));

function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
    document.body.classList.add('modal-open');
}
function closeLightbox(e) {
    if (e.target.id === 'lightbox' || e.target.className === 'lightbox-close') {
        document.getElementById('lightbox').classList.remove('active');
        document.body.classList.remove('modal-open');
        setTimeout(() => document.getElementById('lightbox-img').src = '', 300);
    }
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox({target: {id: 'lightbox'}});
});