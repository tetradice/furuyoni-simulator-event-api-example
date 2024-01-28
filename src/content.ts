/// <reference types="@tetradice/furuyoni-simulator-event-api-types" />

document.addEventListener("sakuraba.megamiSelected", (e) => {
  console.warn(
    `sakuraba.megamiSelected イベントが呼び出されました。`,
    e.detail
  );
});

document.addEventListener("sakuraba.megamiSelectFinished", (e) => {
  console.warn(
    `sakuraba.megamiSelectFinished イベントが呼び出されました。`,
    e.detail
  );
});

document.addEventListener("sakuraba.removingMegamiSelected", (e) => {
  console.warn(
    `sakuraba.removingMegamiSelected イベントが呼び出されました。`,
    e.detail
  );
});

document.addEventListener("sakuraba.removingMegamiSelectFinished", (e) => {
  console.warn(
    `sakuraba.removingMegamiSelectFinished イベントが呼び出されました。`,
    e.detail
  );
});

document.addEventListener("sakuraba.duelStarted", (e) => {
  console.warn(`sakuraba.duelStarted イベントが呼び出されました。`, e.detail);
});

document.addEventListener("sakuraba.turnPlayerDecided", (e) => {
  console.warn(
    `sakuraba.turnPlayerDecided イベントが呼び出されました。`,
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

document.addEventListener("sakuraba.boardResetted", (e) => {
  console.warn(`sakuraba.boardResetted イベントが呼び出されました。`, e.detail);
});
