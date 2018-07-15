function reportExecuteScriptError(error) {
          console.error(`Failed to execute fartify content script: ${error.message}`);
}

function handleClick() {
        chrome.tabs.executeScript({file: "/fartify.js"}).catch(reportExecuteScriptError);
}

chrome.browserAction.onClicked.addListener(handleClick);

