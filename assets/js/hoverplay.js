const iframes = document.querySelectorAll('.video');

    iframes.forEach(iframe => {
        iframe.addEventListener('mouseover', () => {
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        });

        iframe.addEventListener('mouseout', () => {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
    });