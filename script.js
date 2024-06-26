//your JS code here. If required.

document.addEventListener("DOMContentLoaded", () => {
    
    const inputs = document.querySelectorAll(".code");

    // Loop through each input element
    inputs.forEach((input, index) => {
      
      input.addEventListener("input", () => {
       
        if (input.value.length === 1 && index < inputs.length - 1) {
         
          inputs[index + 1].focus();
        }
      });

   
      input.addEventListener("keydown", (e) => {
        
        if (e.key === "Backspace") {
        
          if (input.value.length === 0 && index > 0) {
            
            inputs[index - 1].focus();
           
            inputs[index - 1].value = "";
          }
        }
      });
    });
  });