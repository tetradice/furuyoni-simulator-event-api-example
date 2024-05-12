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

document.addEventListener("sakuraba.vigorIncreased", (e) => {
  console.warn(
    `sakuraba.vigorIncreased イベントが呼び出されました。`,
    e.detail
  );
});

document.addEventListener("sakuraba.vigorDecreased", (e) => {
  console.warn(
    `sakuraba.vigorDecreased イベントが呼び出されました。`,
    e.detail
  );
});

document.addEventListener("sakuraba.flinchStateAdded", (e) => {
  console.warn(
    `sakuraba.flinchStateAdded イベントが呼び出されました。`,
    e.detail
  );
});

document.addEventListener("sakuraba.flinchStateRemoved", (e) => {
  console.warn(
    `sakuraba.flinchStateRemoved イベントが呼び出されました。`,
    e.detail
  );
});
document.addEventListener("sakuraba.libraryCardDrawn", (e) => {
  console.warn(
    `sakuraba.libraryCardDrawn イベントが呼び出されました。`,
    e.detail
  );
});
document.addEventListener(
  "sakuraba.sakuraTokensOnEnhanceCardDecreased",
  (e) => {
    console.warn(
      `sakuraba.sakuraTokensOnEnhanceCardDecreased イベントが呼び出されました。`,
      e.detail
    );
  }
);

document.addEventListener("sakuraba.reshuffled", (e) => {
  console.warn(`sakuraba.reshuffled イベントが呼び出されました。`, e.detail);
});

document.addEventListener("sakuraba.discarded", (e) => {
  console.warn(`sakuraba.discarded イベントが呼び出されました。`, e.detail);
});

document.addEventListener("sakuraba.basicActionInvoked", (e) => {
  console.warn(
    `sakuraba.basicActionInvoked イベントが呼び出されました。`,
    e.detail
  );
});

document.addEventListener("sakuraba.cardUsed", (e) => {
  console.warn(`sakuraba.cardUsed イベントが呼び出されました。`, e.detail);
});

document.addEventListener("sakuraba.specialCardOpened", (e) => {
  console.warn(
    `sakuraba.specialCardOpened イベントが呼び出されました。`,
    e.detail
  );
});

document.addEventListener("sakuraba.cardSealed", (e) => {
  console.warn(`sakuraba.cardSealed イベントが呼び出されました。`, e.detail);
});

document.addEventListener("sakuraba.damaged", (e) => {
  console.warn(`sakuraba.damaged イベントが呼び出されました。`, e.detail);
});

document.addEventListener("sakuraba.boardResetted", (e) => {
  console.warn(`sakuraba.boardResetted イベントが呼び出されました。`, e.detail);
});

document.addEventListener("sakuraba.boardResetted", (e) => {
  console.warn(`sakuraba.boardResetted イベントが呼び出されました。`, e.detail);
});
document.addEventListener("sakuraba.planSet", (e) => {
  console.warn(`sakuraba.planSet イベントが呼び出されました。`, e.detail);
});
document.addEventListener("sakuraba.planOpened", (e) => {
  console.warn(`sakuraba.planOpened イベントが呼び出されました。`, e.detail);
});
document.addEventListener("sakuraba.umbrellaOpened", (e) => {
  console.warn(
    `sakuraba.umbrellaOpened イベントが呼び出されました。`,
    e.detail
  );
});
document.addEventListener("sakuraba.umbrellaClosed", (e) => {
  console.warn(
    `sakuraba.umbrellaClosed イベントが呼び出されました。`,
    e.detail
  );
});
