console.log("faq script loaded!");
//document.addEventListener("DOMContentLoaded", function() {
  //  new Accordion("#faqAccordion", {
  //  duration: 300,
  //  showMultiple: false,
  //  collapse: true
    //});
   // });
document.querySelectorAll(".faq-btn").forEach((button) => {
  button.addEventListener("click", function () {
     const img = this.querySelector("img");
    
            // Перевіряємо поточний src і змінюємо його
      if (img.src.includes("../img/IconDown.svg")) {          
          img.src = "../img/icons/IconUp.svg"; // Нова іконка
      } else {
         img.src = "../img/icons/IconDown.svg"; // Початкова іконка
     }
 });
});
    