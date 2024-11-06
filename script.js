// ثبت‌نام کاربر
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("ثبت‌نام با موفقیت انجام شد!");
});

// ورود کاربر
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        alert("ورود با موفقیت انجام شد!");
        window.location.href = "admin.html";  // هدایت به صفحه مدیریت
    } else {
        alert("نام کاربری یا رمز عبور اشتباه است.");
    }
});

// آپلود ویدیو
document.getElementById("uploadForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const videoLink = document.getElementById("videoLink").value;
    alert("ویدیو با موفقیت آپلود شد: " + videoLink);
});

// صفحه مدیریت
document.getElementById("addCourseButton")?.addEventListener("click", function() {
    alert("دوره جدید افزوده شد.");
});

document.getElementById("uploadFileButton")?.addEventListener("click", function() {
    alert("فایل آپلود شد.");
});
