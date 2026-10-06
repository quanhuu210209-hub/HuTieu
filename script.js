// ════════════════════════════════════════════════════════════════
// DỰ ÁN: THẢO HỦ TIẾU MÌ XÀO
// FILE JAVASCRIPT ĐIỀU KHIỂN HOẠT ĐỘNG VÀ HIỂN THỊ DỮ LIỆU
// ════════════════════════════════════════════════════════════════

// ── 1. DỮ LIỆU DANH SÁCH MÓN ĂN VÀ NƯỚC UỐNG ──

// Danh sách các món ăn sáng
const danhSachMonAn = [
    {
        ten: "Hủ tiếu xương",
        moTa: "Nước lèo trong veo, thơm ngọt tự nhiên từ xương heo hầm kỹ",
        hinhAnh: "images/hu-tieu.jpg"
    },
    {
        ten: "Bánh canh giò heo",
        moTa: "Sợi bánh canh dai mềm, nước dùng sánh béo đậm đà",
        hinhAnh: "images/banh-canh.jpg"
    },
    {
        ten: "Mì xào bò/trứng",
        moTa: "Mì xào lửa lớn, sợi mì vàng giòn thơm lừng hành tỏi",
        hinhAnh: "images/Mi-Xao.jpg"
    },
    {
        ten: "Nui xào trứng",
        moTa: "Nui xoắn mềm xào cùng trứng béo ngậy, đơn giản mà ngon",
        hinhAnh: "images/nui-trung.jpg"
    },
    {
        ten: "Nui xào bò",
        moTa: "Nui xào cùng bò tươi mềm, đậm vị tiêu hành thơm phức",
        hinhAnh: "images/nui-xaobo.jpg"
    },
    {
        ten: "Nui giò heo/xương",
        moTa: "Nui nấu nước lèo giò heo, thơm ngọt béo ngậy từng muỗng",
        hinhAnh: "images/nui.jpg"
    }
];

// Danh sách các loại nước uống
const danhSachNuocUong = [
    {
        ten: "Cocacola",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/coca.jpg"
    },
    {
        ten: "Pepsi",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/peppsi.jpg"
    },
    {
        ten: "7UP",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/7up.jpg"
    },
    {
        ten: "C2 Chanh",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/C2.jpg"
    },
    {
        ten: "Ôlong Tea Plus",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/olong.jpg"
    },
    {
        ten: "Nước 247",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/247.webp"
    },
    {
        ten: "Red Bull",
        moTa: "Nước tăng lực",
        hinhAnh: "images/red-bull.jpg"
    },
    {
        ten: "Sting Vàng",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/sting-vang.jpg"
    },
    {
        ten: "Sting Đỏ",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/sting.jpg"
    },
    {
        ten: "Trà xanh 0 độ",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/tra-xanh.jpg"
    },
    {
        ten: "Trà tắc",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/tra-tac.jpg"
    },
    {
        ten: "Cà phê đá",
        moTa: "Đậm đà thơm ngon",
        hinhAnh: "images/ca-phe-da.jpg"
    },
    {
        ten: "Nước Cam",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/nuoc-cam.jpg"
    },
    {
        ten: "Nước Dừa",
        moTa: "Giải khát mát lạnh",
        hinhAnh: "images/nuoc-dua.jpg"
    }
];


// ── 2. HÀM HIỂN THỊ DỮ LIỆU LÊN TRANG WEB ──

// Hiển thị danh sách món ăn vào khung #foodGrid
function hienThiMonAn() {
    const foodGrid = document.getElementById('foodGrid');
    if (!foodGrid) return;

    foodGrid.innerHTML = danhSachMonAn.map(mon => `
        <div class="card">
            <img src="${mon.hinhAnh}" alt="${mon.ten}" loading="lazy">
            <h3>${mon.ten}</h3>
            <p>${mon.moTa}</p>
        </div>
    `).join('');
}

// Hiển thị danh sách nước uống vào khung #drinkGrid
function hienThiNuocUong() {
    const drinkGrid = document.getElementById('drinkGrid');
    if (!drinkGrid) return;

    drinkGrid.innerHTML = danhSachNuocUong.map(nuoc => `
        <div class="card">
            <img src="${nuoc.hinhAnh}" alt="${nuoc.ten}" loading="lazy">
            <h3>${nuoc.ten}</h3>
            <p>${nuoc.moTa}</p>
        </div>
    `).join('');
}


// ── 3. CÁC TÍNH NĂNG TƯƠNG TÁC GIAO DIỆN ──

// Xử lý bật/tắt Menu trên thiết bị di động
function khoiTaoMenuMobile() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (!menuToggle || !navMenu) return;

    // Khi nhấn nút menu burger
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });

    // Tự động đóng menu khi bấm vào bất kỳ liên kết nào
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });
}

// Hiệu ứng xuất hiện dần khi cuộn trang (Scroll Reveal)
function khoiTaoHieuUngCuonTrang() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    // Quan sát tất cả các phần tử có class .reveal hoặc .card
    const elementsToReveal = document.querySelectorAll('.reveal, .card');
    elementsToReveal.forEach(el => {
        revealObserver.observe(el);
    });
}

// Đổi màu thanh Header khi cuộn trang
function khoiTaoHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const scrollViTri = window.scrollY;
        if (scrollViTri > 50) {
            header.style.background = 'rgba(10, 8, 6, 0.92)';
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.background = 'rgba(10, 8, 6, 0.78)';
            header.style.boxShadow = 'none';
        }
    }, { passive: true });
}

// Hiệu ứng tương tác Parallax và 3D Tilt cho Hero Visual Showcase
function khoiTaoBannerParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    if (!heroVisual) return;

    // Hiệu ứng dịch chuyển nhẹ khi cuộn trang
    window.addEventListener('scroll', () => {
        const scrollViTri = window.scrollY;
        const chieuCaoManHinh = window.innerHeight;

        if (scrollViTri < chieuCaoManHinh) {
            const progress = scrollViTri / chieuCaoManHinh;
            const translate = progress * 40;
            heroVisual.style.transform = `translateY(${translate}px)`;
        }
    }, { passive: true });

    // Hiệu ứng 3D nghiêng nhẹ theo chuột trên Desktop
    if (window.innerWidth > 992) {
        const heroWrapper = document.querySelector('.hero-image-wrapper');
        if (heroWrapper) {
            heroVisual.addEventListener('mousemove', (e) => {
                const rect = heroVisual.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                heroWrapper.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-8px)`;
            });

            heroVisual.addEventListener('mouseleave', () => {
                heroWrapper.style.transform = '';
            });
        }
    }
}

// Hiệu ứng hạt bụi phát sáng bay lơ lửng (Floating Particles)
function khoiTaoHatPhatSang() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const mauSacHat = [
        'rgba(235, 170, 84, 0.5)',
        'rgba(255, 107, 61, 0.4)',
        'rgba(118, 204, 86, 0.35)',
        'rgba(242, 185, 101, 0.4)',
    ];

    function taoMotHat() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 2;
        const color = mauSacHat[Math.floor(Math.random() * mauSacHat.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 18 + 12;
        const delay = Math.random() * 10;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${left}%;
            bottom: -10px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            box-shadow: 0 0 ${size * 3}px ${color};
        `;

        particlesContainer.appendChild(particle);

        // Xóa hạt cũ và tạo lại hạt mới để hiệu ứng chạy liên tục
        setTimeout(() => {
            particle.remove();
            taoMotHat();
        }, (duration + delay) * 1000);
    }

    // Tạo 18 hạt ban đầu
    for (let i = 0; i < 18; i++) {
        taoMotHat();
    }
}

// Hiệu ứng ánh sáng rọi theo con trỏ chuột trên các thẻ Card
function khoiTaoHieuUngChuotTrenCard() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}


// ── 4. KÍCH HOẠT KHI TRANG WEB TẢI XONG (DOM READY) ──
document.addEventListener('DOMContentLoaded', () => {
    // 1. Hiển thị danh sách món ăn & nước uống từ mảng JS
    hienThiMonAn();
    hienThiNuocUong();

    // 2. Kích hoạt các hiệu ứng và tính năng giao diện
    khoiTaoMenuMobile();
    khoiTaoHieuUngCuonTrang();
    khoiTaoHeaderScroll();
    khoiTaoBannerParallax();
    khoiTaoHatPhatSang();
    khoiTaoHieuUngChuotTrenCard();
});
