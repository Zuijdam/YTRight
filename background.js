browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
        id: "YTRight", // Unique ID for the menu item
        title: "Goto -nocookie version of YouTube", // Menu item title
        contexts: ["link"], // Only show for link context
        targetUrlPatterns: ["*://www.youtube.com/watch?v=*"],
        icons: { "16": "icon.png" } 
    });
});

browser.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "YTRight") {
        const videoUrl = info.linkUrl;
        const videoId = new URL(videoUrl).searchParams.get("v");
        const newUrl = `https://www.yout-ube.com/watch?v=${videoId}`;
        browser.tabs.create({ url: newUrl });
    }
});

// Handle browser action click
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
