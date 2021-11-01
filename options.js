var optionCheckDotGit = document.getElementById('checkDotGit');
function loadOptions() {
    chrome.storage.local.get(['checkDotGit'], function(result) {
        optionCheckDotGit.checked = result.checkDotGit;
    });
}
function saveOptions() {
    console.log("Option: " + optionCheckDotGit.checked);
    chrome.storage.local.set({checkDotGit: optionCheckDotGit.checked});
}

document.addEventListener('DOMContentLoaded', loadOptions);
optionCheckDotGit.addEventListener('change', saveOptions);
