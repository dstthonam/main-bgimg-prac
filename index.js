document.addEventListener("DOMContentLoaded", () => {
    const toggleBtns = document.querySelectorAll('.toggleBtn')
    const shbxElements = document.querySelectorAll('.shbx');
    const hd = document.querySelector('header');
    
    toggleBtns.forEach(toggleBtn => {
        toggleBtn.addEventListener('click', () => {
            shbxElements.forEach(shbx => {
                
                const shbxDisplay = window.getComputedStyle(shbx).display;

                if (shbxDisplay === "none") {
                    hd.style.height = "350px";
                    shbx.style.display = "block";
                } else {
                    hd.style.height = "75px";
                    shbx.style.display = "none";
                }
            });
        });
    });

    const desktopMinWidth = window.matchMedia('(min-width : 768px)').matches;
    
    if (desktopMinWidth) {
        shbxElements.forEach(shbx => {
            const shbxDisplay = window.getComputedStyle(shbx).display;

            if (shbxDisplay === "none") {
                shbx.style.display = "block";
                hd.style.height = "75px";
            } else {
                hd.style.height = "75px";
            }
        });
    }
});