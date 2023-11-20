const data = [
  "strona główna",
  "komitet naukowy",
  "program",
  "wykladowcy",
  "wyklady",
  "postery",
  "komitet organizacyjny",
  "miejsce konferencji",
  "informacje dodatkowe",
  "ceny uczestnictwa",
  "noclegi",
  "program fakultatywny",
  "sponsorzy i wystawcy",
  "galeria",
  "archiwum",
  "kontakt",
];
function insertElements(containerId, count) {
  const container = document.querySelector(".menu-custom");
  for (let i = 0; i < count; i++) {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <li class=" nav-item nav-item-custom flex-grow-1">
        <a class=" nav-link pointer-cursor p-0 d-flex h-100" href="#${i}">
          <div class="nav-img-custom d-flex align-items-center justify-content-center">
            <img src="/assets/icons/Layer_${i + 1}.png" />
          </div>
          <div class="nav-ex-custom ps-1 text-start text-white fw-bold text-uppercase flex-grow-1">
            ${data[i]}
          </div>
        </a>
      </li>
    `
    );
  }
}
insertElements("menuContainer", 16);

document.querySelector(".toggler-custom").addEventListener("click", () => {
  document.querySelector(".menu-custom").classList.toggle("d-none");
  console.log(document.querySelector(".menu-custom").classList);
});
