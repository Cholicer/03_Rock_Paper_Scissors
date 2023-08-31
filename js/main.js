// Get to DOM element
const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.result__user img');
const cpuResult = document.querySelector('.result__cpu img');
const result = document.querySelector('.result__text');
const optionImages = document.querySelectorAll('.option__image');

// Loop through each element
optionImages.forEach((image, index) => {
   image.addEventListener('click', (e) => {
      image.classList.add('active');

      userResult.src = cpuResult.src = "img/rock.png";
      result.textContent = "Wait...";

      // Loop again
      optionImages.forEach((image2, index2) => {
         // If the current index doesn't match the clicked index
         // Remove the "active" class from the other option images
         index !== index2 && image2.classList.remove('active');
      });

      gameContainer.classList.add('start');
      
      // Set a timeout to delay the result calculation
      let time = setTimeout(() => {
         gameContainer.classList.remove('start');

         // Get the sourceof the clicked image
         let imageSrc = e.target.querySelector('img').src;

         // Set the user image to the clicked option image
         userResult.src = imageSrc;

         // Generate random number between 0 and 2
         let randomNumber = Math.floor(Math.random() * 3);
         console.log(randomNumber);
         // Create an array of CPU image options
         let cpuImages =["img/rock.png", "img/paper.png", "img/scissors.png"];
         // Set the CPU image 
         cpuResult.src = cpuImages[randomNumber];

         // Assign a letter value to the CPU option (R for rock, etc.)
         let cpuValue =["R", "P", "S"][randomNumber];
         // Assign massay
         let userValue =["R", "P", "S"][index];

         // Create an object with all possible outcomes
         let outcomes = {
            RR: "Draw",
            RP: "CPU",
            RS: "User",
            PR: "User",
            PP: "Draw",
            PS: "CPU",
            SR: "CPU",
            SP: "User",
            SS: "Draw",
         };

         // Look up the outcome value based ob user and CPU options
         let outcomeValue = outcomes[userValue + cpuValue];

         // Display the result
         result.textContent = userValue === cpuValue ? "Match Draw!" : `${outcomeValue} Won!!`;
      }, 1800);
   });
});