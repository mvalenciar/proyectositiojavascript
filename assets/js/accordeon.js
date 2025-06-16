let accordionHead = document.querySelectorAll(
  ".accordion input[type='checkbox']"
);

accordionHead.forEach((faq) => {
  faq.addEventListener("change", (event) => {
    let faqContent = faq.nextElementSibling;
    if (event.target.checked) {
      faqContent.style.height = faqContent.scrollHeight + 30 + "px";
    } else {
      faqContent.style.height = "0px";
    }
  });
});
