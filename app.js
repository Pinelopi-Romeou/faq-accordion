const faqs = document.querySelectorAll('.faq-item')

for (let faq of faqs) {
    const question = faq.querySelector('.question')
    const answer = faq.querySelector('.answer')
    const plus = faq.querySelector('.plus')
    const minus = faq.querySelector('.minus')

    answer.style.display = 'none'
    minus.style.display = 'none'

    question.setAttribute('tabindex', '0');

    question.addEventListener('click', () => {
        toggleFAQ(answer, plus, minus)
    })

    question.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            toggleFAQ(answer, plus, minus);
        }
    });
}

function toggleFAQ(answer, plus, minus) {
    let isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
    minus.style.display = isVisible ? 'none' : 'inline';
    plus.style.display = isVisible ? 'inline' : 'none';
}

