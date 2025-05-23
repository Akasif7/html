    <script>
        // Countdown Timer Functionality
        function updateCountdown() {
            const eventDate = new Date('April 30, 2025 12:00:00').getTime();
            const now = new Date().getTime();
            const distance = eventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (distance < 0) {
                document.getElementById("timer").innerHTML = "Event has started!";
            }
        }

        // Update the countdown every second
        setInterval(updateCountdown, 1000);
    </script>