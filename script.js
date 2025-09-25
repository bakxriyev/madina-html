// Timer functionality
const timeLeft = {
  hours: 0,
  minutes: 2,
  seconds: 0,
}

function updateTimer() {
  const timerDisplay = document.getElementById("timer")

  if (timeLeft.seconds > 0) {
    timeLeft.seconds--
  } else if (timeLeft.minutes > 0) {
    timeLeft.minutes--
    timeLeft.seconds = 59
  } else if (timeLeft.hours > 0) {
    timeLeft.hours--
    timeLeft.minutes = 59
    timeLeft.seconds = 59
  }

  // Format time with leading zeros
  const hours = String(timeLeft.hours).padStart(2, "0")
  const minutes = String(timeLeft.minutes).padStart(2, "0")
  const seconds = String(timeLeft.seconds).padStart(2, "0")

  timerDisplay.textContent = `${hours}:${minutes}:${seconds}`
}

// Start timer when page loads
document.addEventListener("DOMContentLoaded", () => {
  // Update timer immediately
  updateTimer()

  // Update timer every second
  setInterval(updateTimer, 1000)

  // Add click tracking for analytics (optional)
  const ctaButtons = document.querySelectorAll(".cta-button")
  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("CTA button clicked:", this.href)
    })
  })
})

// Add smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = "smooth"

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.3s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})
