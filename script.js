const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu-list");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menuBtn.classList.add("hide");
      cancelBtn.classList.add("show");
      body.classList.add("disabledScroll");
    }
    cancelBtn.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }

    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }


    function filterKegiatan(category) {
        var kegiatanItems = document.querySelectorAll('.kegiatan-item');
    
        kegiatanItems.forEach(function (item) {
            if (category === 'All' || item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    
document.querySelectorAll('.video-container video').forEach(vid => {
  vid.onclick = () =>{
    document.querySelector('.popup-video').style.display = 'block';
    document.querySelector('.popup-video video').src = vid.getAttribute('src');
  }
});

document.querySelector('.popup-video span').addEventListener('click', () => {
    document.querySelector('.popup-video').style.display='none';
});



