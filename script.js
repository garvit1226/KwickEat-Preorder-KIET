// Smooth scroll from Explore button
const exploreBtn = document.getElementById("explore-btn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
  });
}

// Order Form success message
const orderForm = document.getElementById("orderForm");
if (orderForm) {
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("successMsg");
    msg.textContent = "✅ Your order has been placed successfully!";
    e.target.reset();
    setTimeout(() => (msg.textContent = ""), 4000);
  });
}

// Scroll to order form from menu
document.querySelectorAll(".order-btn")?.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#order").scrollIntoView({ behavior: "smooth" });
  });
});

// LOGIN / SIGNUP toggle
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginFormEl = document.getElementById("loginForm");
const signupFormEl = document.getElementById("signupForm");
const switchToSignup = document.getElementById("switchToSignup");
const switchToLogin = document.getElementById("switchToLogin");

if (loginTab && signupTab) {
  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginFormEl.classList.remove("hidden");
    signupFormEl.classList.add("hidden");
  });
  signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupFormEl.classList.remove("hidden");
    loginFormEl.classList.add("hidden");
  });
  switchToSignup?.addEventListener("click", () => signupTab.click());
  switchToLogin?.addEventListener("click", () => loginTab.click());
}

// ✅ EmailJS initialization
if (typeof emailjs !== "undefined") {
  emailjs.init("zWqGiU3vg6iB2CBws"); // ← Replace with your EmailJS Public Key
}

// SIGNUP with email confirmation
if (signupFormEl) {
  signupFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;

    emailjs.send("service_jxoy20l", "template_rfo9fts", {
      user_name: name,
      user_email: email,
      message: `Welcome to KwickEat, ${name}! Your signup is confirmed.`,
    }).then(() => {
      alert("✅ Account created! Confirmation email sent.");
      loginTab.click();
    }).catch((err) => {
      console.error(err);
      alert("⚠️ Signup successful, but email could not be sent.");
    });
  });
}

// LOGIN (fake redirect)
if (loginFormEl) {
  loginFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "dashboard.html";
  });
}

// LOGOUT
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    alert("Logged out successfully!");
    window.location.href = "login.html";
  });
}
