let x = 1; // Define a global x variable
        
        function printpara() { 
            let msg = x +' time!'; // Define a local msg variable
            let p = document.createElement("p"); // Create a p HTML tag
             p.innerHTML = msg; // Set the contents of p to msg
             document.getElementsByTagName("body")[0].appendChild(p); // Add p to body
            console.log(msg); // Log msg to the console
            x = x+1; // Add 1 to x
         }
         printpara(); // Run the print msg function once
         printpara(); // Run the print msg function twice
         printpara(); 
         printpara();
         printpara();
         printpara();
         printpara();
         printpara();
         printpara(); 
         printpara();
         printpara();
         printpara();
         printpara();
         printpara();
        
        