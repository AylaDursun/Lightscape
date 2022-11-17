const FAQ = (faq) => {
    return(`
    <div>
        <button class="accordion">${faq.summary}</button>
        <div class="panel">
            <p>${faq.content}</p>
        </div>
    </div>
    `);
}
export default FAQ