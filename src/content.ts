import "@tetradice/furuyoni-simulator-event-api-types";

document.addEventListener("sakuraba.megamiSelectFinished", (e) => {
  console.warn(
    `sakuraba.megamiSelectFinished イベントが呼び出されました。`,
    e.detail
  );
});

document.addEventListener("sakuraba.reshuffled", (e) => {
  console.warn(`sakuraba.reshuffled イベントが呼び出されました。`, e.detail);
});

document.addEventListener("sakuraba.specialCardOpened", (e) => {
  console.warn(
    `sakuraba.specialCardOpened イベントが呼び出されました。`,
    e.detail
  );
});
