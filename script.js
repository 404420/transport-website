const header = document.querySelector("[data-header]"),
  toggle = document.querySelector("[data-nav-toggle]"),
  nav = document.querySelector("[data-nav]"),
  dropButton = document.querySelector("[data-dropdown-button]"),
  drop = dropButton?.closest(".has-dropdown");
const closeNav = () => {
  nav?.classList.remove("is-open");
  toggle?.setAttribute("aria-expanded", "false");
};
toggle?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(!!open));
});
dropButton?.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = drop?.classList.toggle("is-open");
  dropButton.setAttribute("aria-expanded", String(!!open));
});
document.addEventListener("click", (e) => {
  if (!drop?.contains(e.target)) {
    drop?.classList.remove("is-open");
    dropButton?.setAttribute("aria-expanded", "false");
  }
});
document
  .querySelectorAll(".primary-nav a")
  .forEach((a) => a.addEventListener("click", closeNav));
addEventListener(
  "scroll",
  () => header?.classList.toggle("is-scrolled", scrollY > 20),
  { passive: true },
);
addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeNav();
    drop?.classList.remove("is-open");
  }
});
document
  .querySelectorAll("[data-year]")
  .forEach((e) => (e.textContent = new Date().getFullYear()));
const filterButtons = document.querySelectorAll("[data-fleet-filter]");
const fleetCards = document.querySelectorAll("[data-fleet-category]");
filterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const selected = button.dataset.fleetFilter;
    filterButtons.forEach((item) =>
      item.classList.toggle("is-active", item === button),
    );
    fleetCards.forEach((card) => {
      card.hidden =
        selected !== "all" && card.dataset.fleetCategory !== selected;
    });
  }),
);
const serviceSelect = document.querySelector('select[name="teenus"]');
const otherServiceField = document.querySelector("[data-other-service]");
const otherServiceInput = document.querySelector("[data-other-service-input]");
const updateOtherService = () => {
  const show = serviceSelect?.value === "muu";
  if (otherServiceField) otherServiceField.hidden = !show;
  if (otherServiceInput) {
    otherServiceInput.required = show;
    if (!show) otherServiceInput.value = "";
  }
};
serviceSelect?.addEventListener("change", updateOtherService);
updateOtherService();
