if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('worker.js').then(function () {
            console.log('Service worker registration successful');
        }, function (error) {
            console.log('Service worker registration failed: ', error);
        });
    });
}
