const btn = document.querySelector(".mark-as-read");
const num = document.querySelector(".notif-number");
const icon = document.querySelectorAll("i");

btn.addEventListener("click", readAll);

function readAll() {
  num.innerHTML = "0";
  num.style.display = "none";

  const liEl = document.querySelectorAll("li");

  liEl.forEach((notification) => {
    // ✅ Remove class from each element
    notification.classList.remove("unread-notification");
  });

  icon.forEach((icn) => {
    // ✅ Remove class from each element
    icn.remove();
  });
}
