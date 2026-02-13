browser.browserAction.onClicked.addListener((tab) => {
    const currentUrl = tab.url;

    if (currentUrl && currentUrl.includes("youtube.com/watch?v=")) {
        const videoId = new URL(currentUrl).searchParams.get("v");
        const newUrl = `https://www.yout-ube.com/watch?v=${videoId}`;
        browser.tabs.update(tab.id, { url: newUrl });
    } else {
        alert("This is not a valid YouTube video URL.");
    }
});
