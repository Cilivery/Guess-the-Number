let num = Math.floor(Math.random() * 100) + 1;  // Generates number between 1 and 100
        let cnt = 0;

        document.getElementById("submit").addEventListener("click", function () {
            let gs = parseInt(document.getElementById("num").value);
            cnt++;

            // Update the count
            document.getElementById("guesses").innerText = "Count: " + cnt;

            let feedbackMessage = "";

            if (gs > num) {
                feedbackMessage = "Your guess is greater than the number! Please try again...";
            } else if (gs < num) {
                feedbackMessage = "Your guess is smaller than the number! Please try again...";
            } else {
                feedbackMessage = "Congratulations! You guessed the correct number!";
                document.getElementById("guesses").innerText =" (Total attempts: " + cnt + ")";
                document.getElementById("submit").style.display = "none";  // Hide the submit button
                document.getElementById("try-again").style.display = "block";  // Show the try again button
            }

            document.getElementById("feedback").innerText = feedbackMessage;

            if (gs !== num) {
                // Clear the textarea after an incorrect guess
                document.getElementById("num").value = "";

                // Hide the feedback after 3 seconds
                setTimeout(function () {
                    document.getElementById("feedback").innerText = "";
                }, 3000);  // 3000 milliseconds = 3 seconds
            }
        });

        // "Try Again" button functionality
        document.getElementById("try-again").addEventListener("click", function () {
            cnt = 0;  // Reset the count
            num = Math.floor(Math.random() * 100) + 1;  // Generate a new random number
            document.getElementById("guesses").innerText = "Count: 0";  // Reset the count display
            document.getElementById("feedback").innerText = "";  // Clear feedback
            document.getElementById("num").value = "";  // Clear the text area
            document.getElementById("submit").style.display = "block";  // Show the submit button
            document.getElementById("try-again").style.display = "none";  // Hide the try-again button
        });