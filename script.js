// Tabs
const tab_main = document.querySelector("#tab_main");
let tab_item = Array.from(tab_main.children);

const btn_main = document.querySelector("#btn_main");
let btn_item = Array.from(btn_main.children);

btn_item.map((item) => {
  let abc = document.querySelector(".abc");
  abc.click();

  item.addEventListener("click", function (e) {
    tab_item.map((t_item) => {
      console.log(item);

      if (t_item.id == e.target.id) {
        t_item.style.display = "block";
      } else {
        t_item.style.display = "none";
      }
    });

    btn_item.map((btn) => {
      btn.classList.remove("active_item");
    });
    e.target.classList.add("active_item");
  });
});

//Accordion;
document.querySelectorAll(".item-title").forEach((header) => {
  header.addEventListener("click", function () {
    const content = header.nextElementSibling;
    if (content.classList.contains("active")) {
      content.classList.remove("active");
      content.style.height = 0;
    } else {
      document.querySelectorAll(".item-details").forEach((item) => {
        if (item !== content) {
          item.classList.remove("active");
          item.style.height = 0;
        }
      });
      content.classList.toggle("active");
      content.style.height = content.scrollHeight + "px";
    }
  });
});

// Set a default active accordion item
const defaultActive = document.querySelector(".item-details.default-active");
if (defaultActive) {
  defaultActive.classList.add("active");
  defaultActive.style.height = defaultActive.scrollHeight + "px";
}
