
  let total = 0;
  const totalDisplay = document.getElementById("totalAmount");
  const foodItems = document.querySelectorAll(".cloth");

  // Load total from localStorage if available
  const savedTotal = localStorage.getItem("totalBill");
  if (savedTotal) {
    total = parseFloat(savedTotal);
    totalDisplay.textContent = total.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  foodItems.forEach(food => {
    food.addEventListener("click", () => {
      const priceText = food.querySelector(".price").textContent;
      const numericPrice = parseFloat(priceText.replace(/[₦, ]/g, ""));

      total += numericPrice;

      // Save updated total to localStorage
      localStorage.setItem("totalBill", total);

      // Display updated total
      totalDisplay.textContent = total.toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    });
  });

  // Optional reset function with button
  function resetTotal() {
    total = 0;
    localStorage.removeItem("totalBill");
    totalDisplay.textContent = "0.00";
  }
  
  
  //for payment section
  
 const payBtn = document.querySelector('#payment');
  
 const pay = document.querySelector('.pay');
 
 payBtn.addEventListener('click', () => {
   
   if ( payBtn.innerText === "Make Payments") {
     
   payBtn.innerText = "Making Payments";
   pay.style.display ="inline";
   
   } else {
 
 payBtn.innerText ="Make Payments";
    
    pay.style.display ="none";
   }
 });
 
 
   //for cash 💵 or card 💳 section
  
 const card = document.querySelector(' #cardBtn');
  
 const transBtn = document.querySelector(' #transferBtn');
 
 const payText = document.querySelector('#payText');
 
 
 
 card.addEventListener('click', () => {
   
   if ( payText.innerText ==" ") {
     
   payText.innerText = " Visit The Cashiers Desk To Place Your Order And Make Payments💰, With Either Card 💳 Or Cash 💵.";
   
   payText.style.display ="block";
  
   payText.style.margin = " 10px";
   
   } else {
 
 payText.innerText =" ";
    
    payText.style.display ="none";
   }
 });
 
 
 transBtn.addEventListener('click', () => {
   
   if ( payText.innerText == " ") {
     
   
  payText.innerText = 
  " Make a Transfer to the P & B Apparels Bank 🏦 Account:12345678910, GTB Plc. And Send the Receipt🧾 To Our WhatsApp Nō:  +, and place an order."
  
   payText.style.display ="block";
   
   
   payText.style.margin = " 10%";
   
   } else {
 
 payText.innerText =" ";
    
    payText.style.display ="none";
   }
 });
