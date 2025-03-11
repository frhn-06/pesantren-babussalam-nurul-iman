const burgerMenu = () => {
    const m = document.querySelectorAll('.menu .m');
    const nav = document.querySelector('.nav');
    const gelap = document.querySelector('#home .gelap');
    m.forEach((mm) => {
        mm.classList.toggle('mm');
    });
    nav.classList.toggle('active');
    nav.querySelector('ul').classList.add('ul-animasi');
    
    gelap.classList.toggle('aktif');
}


const tutupNav = (e) => {
    const nav = document.querySelector('.nav');
    const burger = document.querySelector('.menu');
    const gelap = document.querySelector('#home .gelap');
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
        nav.querySelector('ul').classList.remove('ul-animasi');
        const burgerM = document.querySelectorAll('.menu .m');
        burgerM.forEach((classMM) => {
            if(classMM.classList.contains('mm')) {
                classMM.classList.remove('mm');
                gelap.classList.remove('aktif');
            }
        })
    }

}



const munculSambutan = (btn) => {
    const cap = document.querySelector('#sambutan .container .row .caption');

    if(!btn.querySelector('.buka-foto-pengasuh').classList.contains('buka-foto-pengasuh-kebalik')) {
        btn.querySelector('.buka-foto-pengasuh').classList.add('buka-foto-pengasuh-kebalik');
        cap.classList.add('caption-geser');
        cap.querySelector('p').classList.remove('p-height');
    } else {
        btn.querySelector('.buka-foto-pengasuh').classList.remove('buka-foto-pengasuh-kebalik');
        cap.classList.remove('caption-geser');
        cap.querySelector('p').classList.add('p-height');
    }
}


const tutupSambutan = (e) => {
    const rowSambutan = document.querySelector('#sambutan .container .row');
    const pSamb = rowSambutan.querySelector('.caption p');
    const iconBtn = rowSambutan.querySelector('.buka-foto-pengasuh');
    const cap = document.querySelector('.caption');

    if(!pSamb.classList.contains('p-height')) {
        if(!rowSambutan.contains(e.target)) {
            iconBtn.classList.remove('buka-foto-pengasuh-kebalik');
            pSamb.classList.add('p-height');
            cap.classList.remove('caption-geser');
        }
    }
}


const munculCaption = (e, s) => {
    e.preventDefault();
    const i = s.querySelector('.i');
    const caption = s.parentElement.previousElementSibling;
    if(!i.classList.contains('kebalik')) {
        i.classList.add('kebalik');
        caption.classList.add('terbuka');
            
    } else {
        i.classList.remove('kebalik');
        caption.classList.remove('terbuka');
    }
}


const munculfotoBesar = (b) => {
    const lihatFoto = document.querySelector('.lihat-foto');
        const fotoBesar = lihatFoto.querySelector('img');
        const srcFotoKecil = b.parentElement.previousElementSibling.querySelector('img').getAttribute('src');

        fotoBesar.setAttribute('src', srcFotoKecil);
        lihatFoto.classList.add('active');
}


const menutupFotoesar = () => {
    const lihatFoto = document.querySelector('.lihat-foto');
    lihatFoto.querySelector('img').removeAttribute('src');
    lihatFoto.classList.remove('active');
}


const geserFotoKanan = (kanan) => {
    const fotoBesar = kanan.parentElement.querySelector('img');
    const cards = document.querySelectorAll('.card');
    const kiri = kanan.parentElement.querySelector('.kiri');
    
    for (let i = 0; i < cards.length; i++) {
        const srcFotoKecil = cards[i].querySelector('img').getAttribute('src');
        const srcfotoBesar = fotoBesar.getAttribute('src');
        
        if(srcFotoKecil === srcfotoBesar) {
            if (cards[i].nextElementSibling) {
                const srcNextFoto = cards[i].nextElementSibling.querySelector('img').getAttribute('src');
                
                fotoBesar.setAttribute('src', srcNextFoto);
            }
            break;
        }
    }
}


const geserFotoKiri = (kiri) => {
    const fotoBesar = kiri.parentElement.querySelector('img');
    const cards = document.querySelectorAll('.card');

    for (let i = cards.length - 1; i > 0; i--) {
        const srcfotoBesar = fotoBesar.getAttribute('src');
        const srcFotoKecil = cards[i].querySelector('img').getAttribute('src');

        if (srcfotoBesar === srcFotoKecil) {
            if (cards[i].previousElementSibling) {
                const srcPreviousFoto = cards[i].previousElementSibling.querySelector('img').getAttribute('src');
                
                fotoBesar.setAttribute('src', srcPreviousFoto);
            }
            
            break;
        }
    }
}


const munculInformasi = (e) => {
    const overLay = document.querySelector('#informasi .show-informasi');
    const imgInform = overLay.querySelector('img');

    imgInform.setAttribute('src', e.target.getAttribute('src'));
    overLay.classList.add('active-inform');
}


const tutupInformasi = (e, overLay) => {
    const imgInform = overLay.querySelector('img');
    const inputNama = document.querySelector('input#nama');
    const inputEmail = document.querySelector('input#email');

    if(!imgInform.contains(e.target)) {
        imgInform.removeAttribute('src');
        overLay.classList.remove('active-inform');
       
    }
}


const munculalert = (e) => {
    const inputNama = document.querySelector('input#nama');
    const inputEmail = document.querySelector('input#email');
    const showAlert = document.querySelector('.show-alert');
    // console.log(input);
    if (!inputNama.value == '' && !inputEmail.value == '') {
        showAlert.classList.add('show-alert-muncul');
        e.preventDefault();
    } else {
        return;
    }
    
}


const tutupAlert = (e, o) => {
    const asert = o.querySelector('.alert');
    if(!asert.contains(e.target)) {
        o.classList.remove('show-alert-muncul');
    }
}


// memunculkan nav
const buger = document.querySelector('.menu');
buger.addEventListener('click', () => {
    burgerMenu();
});

// menutup nav
document.addEventListener('click', (e) => {
    tutupNav(e); 
});     


// memunculkan sambutan 
const btnSambutan = document.querySelector('.btn-samb');
btnSambutan.addEventListener('click', () => {
    munculSambutan(btnSambutan);
    // mengembalikanZcaption(btnSambutan);
});


// menutup sambutan
document.addEventListener('click', (e) => {
    tutupSambutan(e);
});


// memunculkan caption
const saklar = document.querySelectorAll('.saklar ');
saklar.forEach((s) => {
    s.addEventListener('click', (e) => {
        munculCaption(e, s);
    });
});


// melihat foto besar
const btn = document.querySelectorAll('.btn');
btn.forEach((b) => {
    b.addEventListener('click', () => {
        munculfotoBesar(b);
    });
});


// menutup foto besar
const X = document.querySelector('.btnX');
X.addEventListener('click', () => {
    menutupFotoesar();
});


// menggeser foto ke kanan
const btnKanan = document.querySelector('.lihat-foto .kanan');
btnKanan.addEventListener('click', (e) => {
    e.preventDefault();
    geserFotoKanan(btnKanan);
});


// menggeser foto ke kiri
const btnKiri = document.querySelector('.lihat-foto .kiri');
btnKiri.addEventListener('click', (e) => {
    e.preventDefault();
    geserFotoKiri(btnKiri);
});


// muncul informasi
const informasi = document.querySelectorAll('#informasi .cont img');
informasi.forEach((inform) => {
    inform.addEventListener('click', (e) => {
        munculInformasi(e);
    });
});


// tutup informasi
const overLay = document.querySelector('#informasi .show-informasi');
overLay.addEventListener('click', (e) => {
    tutupInformasi(e, overLay);    
});



// munucl alert
const btnKirim = document.querySelector('.btn-kirim');
btnKirim.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() => {
        munculalert(e);
    }, 1000)
});


// tutup alert
const overlayAlert = document.querySelector('.show-alert'); 
overlayAlert.addEventListener('click', (e) => {
    tutupAlert(e, overlayAlert);
});



// const textArea = document.querySelector('#kontak .container .row form .input-grup textarea');
// console.log(input);
// btnKirim.addEventListener('click', () => {
//     inputKedapKedip();
// });

// ------------------- intraksi di mobile ------------------ //


const muncuHoverFotoSambutan = (foto) => {
    const overLay = foto.querySelector('.overlay-pengasuh');
    const parPengMob = foto.querySelector('.overlay-pengasuh p');
    overLay.classList.add('overlay-pengasuh-mobile');
    parPengMob.classList.add('parPengasuh-mobile');
}


const tutupOverlaySambutan = (e) => {
    const gambarSambutan = document.querySelector('#sambutan .container .row .foto');
    const overLay = gambarSambutan.querySelector('.overlay-pengasuh');
    const parPengMob = gambarSambutan.querySelector('.overlay-pengasuh p');
    
    if (overLay.classList.contains('overlay-pengasuh-mobile') && parPengMob.classList.contains('parPengasuh-mobile')) {
        if (!gambarSambutan.contains(e.target)) {
            overLay.classList.remove('overlay-pengasuh-mobile');
            parPengMob.classList.remove('parPengasuh-mobile');
        }
    }
}


const munculHoverLogo = (logo) => {
    logo.classList.add('foto-mobile');
}

const tutupHoverLogo = (e) => {
    const logo = document.querySelector('#sambutan .title .foto');
    if (logo.classList.contains('foto-mobile')) {
        if(!logo.contains(e.target)) {
            logo.classList.remove('foto-mobile');
        }
    }
}


const munculHoverCard = (c) => {
    c.classList.add('card-mobile');
}

const tutupHoverCard = (e, c) => {
    if (c.classList.contains('card-mobile')) {
        if (!c.contains(e.target)) {
            c.classList.remove('card-mobile')
        }
    }
}

const munculFotoCardOverlay = (c) => {
    c.querySelector('.foto').querySelector('.overlay').classList.add('overlay-mobile');
}

const tutupFotoCardOverlay = (e, c) => {
    const overlay = c.querySelector('.foto').querySelector('.overlay');
    if(overlay.classList.contains('overlay-mobile')) {
        if(!c.contains(e.target)) {
            overlay.classList.remove('overlay-mobile');
        }
    }
}

const hoverBtn = (btn) => {
    btn.classList.add('btn-mobile');
}

const tutuphoverBtn = (btn) => {
    btn.classList.remove('btn-mobile')
}


const munculHoverKontak = (k) => {
    k.classList.add('row-mobile');
}

const tutupHoverKontak = (e, k) => {
    if(k.classList.contains('row-mobile')) {
        if(!k.contains(e.target)) {
            k.classList.remove('row-mobile');
        }
    }
}


const hoverTmblKirim = (b) => {
    b.classList.add('btn-kirim-mobile');
}

const tutuphoverkirim = (b) => {
    b.classList.remove('btn-kirim-mobile');
}


const hoverNavSatu = (n) => {
    n.classList.add('mobile');
}

const hilangHoverNavSatu = (n) => {
    n.classList.remove('mobile');
}


const hoverNavDua = (n2) => {
    n2.classList.add('mobile');
}

const hilangHoverNavdua = (n2) => {
    n2.classList.remove('mobile');
}


// muncul hover logo
const logo = document.querySelector('#sambutan .title .foto');
logo.addEventListener('touchstart', () => {
    munculHoverLogo(logo);
    // alert('anjing!!!!1');
});
logo.addEventListener('touchmove', () => {
    munculHoverLogo(logo);
});

// menghilangakn hover logo
document.body.addEventListener('click', (e) => {
    tutupHoverLogo(e);
});

//  muncul overlay pengasuh
 const gambarSambutan = document.querySelector('#sambutan .container .row .foto');
 gambarSambutan.addEventListener('touchstart', () => {
    muncuHoverFotoSambutan(gambarSambutan);
 });

 gambarSambutan.addEventListener('touchmove', () => {
    muncuHoverFotoSambutan(gambarSambutan);
 })


//  menghilangkan overlay pengasuh 
document.body.addEventListener('click', (e) => {
    tutupOverlaySambutan(e);
})


// muncul hover card 
const card = document.querySelectorAll('#galeri .container .row .card');
card.forEach((c) => {
    c.addEventListener('touchstart', () => {
        munculHoverCard(c);
        munculFotoCardOverlay(c);
    });

    c.addEventListener('touchmove', () => {
        munculHoverCard(c);
        munculFotoCardOverlay(c);
    });

    document.body.addEventListener('touchstart', (e) => {
        tutupHoverCard(e, c);
        tutupFotoCardOverlay(e, c);
    });

    document.body.addEventListener('touchmove', (e) => {
        tutupHoverCard(e, c);
        tutupFotoCardOverlay(e, c);
    });

    const btn = c.querySelector('.btn');
    btn.addEventListener('touchstart', () => {
        hoverBtn(btn); 
    });
    btn.addEventListener('touchend', () => {
        tutuphoverBtn(btn);
    });

});


// muncul hover kontak
const kontak = document.querySelector('#kontak .container .row');
kontak.addEventListener('touchstart', () => {
    munculHoverKontak(kontak);
});
kontak.addEventListener('touchmove', () => {
    munculHoverKontak(kontak);
});


// tutup hover kontak
document.body.addEventListener('touchstart', (e) => {
   tutupHoverKontak(e, kontak);
});
document.body.addEventListener('touchmove', (e) => {
   tutupHoverKontak(e, kontak);
});


// muncul hover tombol kirim 
btnKirim.addEventListener('touchstart', () => {
    hoverTmblKirim(btnKirim);
});

// tutup hover tombol kirim
btnKirim.addEventListener('touchend', () => {
    tutuphoverkirim(btnKirim);
});


// hover nav 1
const nav = document.querySelectorAll('#home .container .header .nav ul li a');
nav.forEach((n) => {
    n.addEventListener('touchstart', () => {
        hoverNavSatu(n);
    });

    n.addEventListener('touchend', () => {
        hilangHoverNavSatu(n);
    });
});


// hover nav 2
const nav2 = document.querySelectorAll('#footer .container .row .nav-down ul li a');
nav2.forEach((n2) => {
    n2.addEventListener('touchstart', () => {
        hoverNavDua(n2);
    });

    n2.addEventListener('touchend', () => {
        hilangHoverNavdua(n2);
    })
});




// -------------------------- //
const inputan = document.querySelectorAll('#kontak .container .row form .input-grup input');
inputan.forEach((ipt) => {
    ipt.addEventListener('focus', () => {
        // ipt.classList.add('aktif');
        // alert('ok');
        ipt.style.border = '2px green solid';
    });
    ipt.addEventListener('blur', () => {
        ipt.style.border = 'none';
    })
});

const textArea = document.querySelector('#kontak .container .row form .input-grup textarea');
textArea.addEventListener('focus', () => {
    textArea.style.border = '2px green solid';
}); 

textArea.addEventListener('blur', () => {
    textArea.style.border = 'none';
});
// console.log(textArea)

// const anjing = document.querySelector('#home .header');
// console.log(anjing);


// const namaPondok = document.querySelector('#home .container .bg .judul h1');
// const namaPondokTeks = namaPondok.innerText;
// console.log(namaPondokTeks);
// const huruf = namaPondokTeks.split('');
// console.log(huruf);
// const hurufWithSpan = huruf.map((h) => {
//     `<span>${h}</span>`;
// }).join('');
// console.log(hurufWithSpan);


// const munculInformasi = (informfoto) => {
//     const imgBesar = document.querySelector('.lihat-informasi img');
//     const overLay = document.querySelector('.lihat-informasi');
     
//     imgBesar.setAttribute('src', informfoto.getAttribute('src'));
//     overLay.classList.add('active');
// }


// // memunculkan informasi
// const informFoto = document.querySelector('#informasi .container .row .cont img');
// informFoto.addEventListener('click', () => {
//     munculInformasi(informFoto);
// })




// const tutupCaption = () => {
//     const captions = document.querySelectorAll('.caption');  // Asumsi: semua elemen caption
//     captions.forEach(caption => {
//         const i = caption.querySelector('.i');
//         if (caption.classList.contains('terbuka') && i.classList.contains('kebalik')) {
//             caption.classList.remove('terbuka');
//             i.classList.remove('kebalik');
//         }
//     });
// }

// // Memastikan jika ada klik di luar elemen card dan saklar
// document.addEventListener('click', (e) => {
//     const saklar = e.target.closest('.saklar');
//     const card = e.target.closest('.card');
    
//     if (!saklar && !card) {  // Jika klik bukan di saklar atau di dalam card
//         tutupCaption();
//     }
// });


// const menutupCaption = () => {
//     const icon = document.querySelectorAll('.saklar .icon');
    
//     for (let i = 0; i < icon.length; i++) {
//         if (icon[i].classList.contains('kebalik')) {
//             alert(`icon ke ${i} terbuka`);
//             break;
//         }
//     }
// }

// menutup foto 
// const captions = document.querySelectorAll('.caption');
// console.log(captions);
// captions.forEach((cap) => {
//     if (cap.classList.length == 2) {
//         // document.addEventListener('click', () => {
//         //    alert('ada class 2'); 
//         // });
//         console.log('ada 2 class');
//     }
// });

// document.addEventListener('click', (e) => {
//     const icon = document.querySelectorAll('.saklar .i');
    
//     for (let i = 0; i< icon.length; i++) {
//         if(icon[i].classList[3] == 'kebalik') {
//             // icon[i].classList.remove('kebalik');
//             // icon[i].parentElement.previousElementSibling.classList.remove('terbuka');
//             console.log(`icon ke ${i + 1} memiliki class kebalik`);
//         }
//     }
// });