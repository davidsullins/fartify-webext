function reportExecuteScriptError(error) {
          console.error(`Failed to execute fartify content script: ${error.message}`);
}

function handleClick() {
        browser.tabs.executeScript({file: "/fartify.js"}).catch(reportExecuteScriptError);
}

browser.pageAction.onClicked.addListener(handleClick);

