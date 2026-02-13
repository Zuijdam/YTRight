document.addEventListener("DOMContentLoaded", function() {
    console.log("Popup loaded"); // Check if the popup is loading

    document.getElementById("rewriteBtn").addEventListener("click", function() {
        console.log("Button clicked!"); // Log to check if the button is responding
       
        browser.tabs.query({active: true, currentWindow: true})
            .then(tabs => {
                const currentUrl = tabs[0]?.url; // Use optional chaining to avoid issues

                if (currentUrl && currentUrl.includes("youtube.com/watch?v=")) {
                    const videoId = new URL(currentUrl).searchParams.get("v");
                    const newUrl = `https://www.yout-ube.com/watch?v=${videoId}`;
                    browser.tabs.update(tabs[0].id, { url: newUrl });
                } else {
                    alert("This is not a valid YouTube video URL.");
                }
            })
            .catch(error => {
                console.error("Error querying tabs: ", error);
            });
    });
});
