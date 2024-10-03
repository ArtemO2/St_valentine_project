let redColor = false;

        function toggleHeart() {
            let heart = document.getElementById("heart");
            let message = document.getElementById("message");
            
            heart.style.display = "block";
            message.style.display = "block";
            if (redColor) {
                heart.style.color = "#ff4136";
                message.style.color = "#ff69b4";
                redColor = false;
            } else {
                heart.style.color = "#ff69b4";
                message.style.color = "#ff0000";
                redColor = true;
            }
        }