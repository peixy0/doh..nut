function doJob() {
    fetch('/.git/HEAD').then(resp => {
        if (!resp.ok) {
            throw new Error('Not vulnerable')
        }
        return resp.text()
    }).then(resp => {
        if (resp.startsWith('ref:')) {
            alert('/.git/HEAD found')
        }
    }).catch(() => {
        // ignore
    })
}

chrome.storage.local.get(['checkDotGit'], function(result) {
    if (result.checkDotGit) {
        doJob();
    }
});
