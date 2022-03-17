var optionCheckDotGit = document.getElementById('checkDotGit');
function loadOptions() {
    chrome.storage.local.get(['checkDotGit'], function(result) {
        optionCheckDotGit.checked = result.checkDotGit;
    });
}
function saveOptions() {
    chrome.storage.local.set({checkDotGit: optionCheckDotGit.checked});
}

document.addEventListener('DOMContentLoaded', loadOptions);
optionCheckDotGit.addEventListener('change', saveOptions);
