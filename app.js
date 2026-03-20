/* ============================================
   عطارة الشايع - App Logic
   ============================================ */

// ==========================================
// Product Data
// ==========================================
const categories = [
    { id: 'coffee', name: 'القهوة', icon: '☕', emoji: '☕' },
    { id: 'spices', name: 'هيل وبهارات', icon: '🌶️', emoji: '🌶️' },
    { id: 'herbs', name: 'أعشاب', icon: '🌿', emoji: '🌿' },
    { id: 'honey', name: 'العسل', icon: '🍯', emoji: '🍯' },
    { id: 'oud', name: 'عود وبخور', icon: '🪵', emoji: '🪵' },
    { id: 'nuts', name: 'مكسرات', icon: '🥜', emoji: '🥜' }
];

const products = [
    // Coffee
    {
        id: 1, name: 'قهوة باشنفر', category: 'coffee',
        desc: 'بن باشنفر الأصلي هرري إثيوبي، الجودة العالية للقهوة العربية',
        price: 40, emoji: '☕', image: 'https://images.unsplash.com/photo-1447933601403-56dc2df9dd24?w=600&q=80', badge: 'best'
    },
    {
        id: 2, name: 'قهوة لقمتي', category: 'coffee',
        desc: 'بن لقمتي الفاخر إثيوبي، طعم غني ومميز للقهوة السعودية',
        price: 35, emoji: '☕', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&q=80', badge: null
    },
    {
        id: 3, name: 'قهوة هرري', category: 'coffee',
        desc: 'بن هرري درجة أولى من إثيوبيا بنكهة عطرية مميزة',
        price: 45, oldPrice: 50, emoji: '☕', image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&q=80', badge: 'sale'
    },
    {
        id: 4, name: 'قهوة خولاني', category: 'coffee',
        desc: 'بن خولاني يمني فاخر حمصة وسط بمذاق أصيل',
        price: 60, emoji: '☕', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', badge: 'new'
    },

    // Spices
    {
        id: 5, name: 'هيل فاخر درجة أولى', category: 'spices',
        desc: 'هيل أخضر فاخر من غواتيمالا بحبات كبيرة وعطر قوي',
        price: 120, emoji: '🫛', image: 'https://images.unsplash.com/photo-1599909533601-aa23a47fbb10?w=600&q=80', badge: 'best'
    },
    {
        id: 6, name: 'زعفران إيراني أصلي', category: 'spices',
        desc: 'زعفران نقيل سوبر نقين من إيران بلون أحمر داكن ونكهة فريدة',
        price: 150, emoji: '🌺', image: 'https://images.unsplash.com/photo-1636207543865-acf3ad382295?w=600&q=80', badge: 'best'
    },
    {
        id: 7, name: 'كركم طبيعي مطحون', category: 'spices',
        desc: 'كركم هندي طبيعي مطحون طازج بلون ذهبي زاهي',
        price: 25, emoji: '🟡', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80', badge: null
    },
    {
        id: 8, name: 'قرفة سيلانية', category: 'spices',
        desc: 'قرفة سيلانية أصلية بعطر فواح ومذاق حلو طبيعي',
        price: 35, emoji: '🪵', image: 'https://images.unsplash.com/photo-1591692741892-6e1c79aa5a14?w=600&q=80', badge: null
    },
    {
        id: 9, name: 'فلفل أسود حب', category: 'spices',
        desc: 'فلفل أسود هندي حبات كاملة غنية بالزيوت الطيارة',
        price: 20, emoji: '🫘', image: 'https://images.unsplash.com/photo-1599909230866-e6b4f43a97ef?w=600&q=80', badge: null
    },
    {
        id: 10, name: 'مسمار (قرنفل)', category: 'spices',
        desc: 'قرنفل حب كامل بجودة ممتازة وعطر قوي ونفاذ',
        price: 30, emoji: '🌶️', image: 'https://images.unsplash.com/photo-1606471191009-63994c53dbcf?w=600&q=80', badge: 'new'
    },

    // Herbs
    {
        id: 11, name: 'يانسون طبيعي', category: 'herbs',
        desc: 'يانسون حب طبيعي مهدئ للأعصاب ومفيد للهضم',
        price: 18, emoji: '🌿', image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23c?w=600&q=80', badge: null
    },
    {
        id: 12, name: 'نعناع مجفف', category: 'herbs',
        desc: 'نعناع مجفف طبيعي بنكهة منعشة مثالي للشاي والمشروبات',
        price: 15, emoji: '🍃', image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=600&q=80', badge: null
    },
    {
        id: 13, name: 'بابونج (كاموميل)', category: 'herbs',
        desc: 'زهور بابونج مجففة طبيعية مهدئة ومريحة للاسترخاء',
        price: 22, emoji: '🌼', image: 'https://images.unsplash.com/photo-1587241321027-8a0311153a73?w=600&q=80', badge: 'new'
    },
    {
        id: 14, name: 'ميرمية (مريمية)', category: 'herbs',
        desc: 'ميرمية طبيعية مجففة غنية بالفوائد الصحية وعطر مميز',
        price: 20, emoji: '🌿', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80', badge: null
    },
    {
        id: 15, name: 'حبة البركة (حبة سودا)', category: 'herbs',
        desc: 'حبة البركة السوداء الأصلية - شفاء من كل داء',
        price: 28, emoji: '⚫', image: 'https://images.unsplash.com/photo-1599909533601-aa23a47fbb10?w=600&q=80', badge: 'best'
    },

    // Honey
    {
        id: 16, name: 'عسل سدر يمني', category: 'honey',
        desc: 'عسل سدر يمني أصلي من أجود النحل باختبار جودة معتمد',
        price: 250, emoji: '🍯', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80', badge: 'best'
    },
    {
        id: 17, name: 'عسل زهور الربيع', category: 'honey',
        desc: 'عسل زهور طبيعي متعدد الأزهار بطعم لذيذ وفوائد متعددة',
        price: 80, emoji: '🍯', image: 'https://images.unsplash.com/photo-1587049352847-4d4b12fe38cd?w=600&q=80', badge: null
    },
    {
        id: 18, name: 'عسل مانوكا نيوزلندي', category: 'honey',
        desc: 'عسل مانوكا أصلي من نيوزلندا بتركيز MGO 400+',
        price: 380, oldPrice: 420, emoji: '🍯', image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?w=600&q=80', badge: 'sale'
    },

    // Oud & Incense
    {
        id: 19, name: 'عود كمبودي طبيعي', category: 'oud',
        desc: 'عود كمبودي طبيعي فاخر بدخان كثيف ورائحة مميزة تدوم طويل',
        price: 300, emoji: '🪵', image: 'https://images.unsplash.com/photo-1600612253971-422e7c3b4200?w=600&q=80', badge: 'best'
    },
    {
        id: 20, name: 'بخور معطر فاخر', category: 'oud',
        desc: 'بخور معطر بخلطة خاصة من العود والعنبر والمسك',
        price: 75, emoji: '💨', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80', badge: null
    },
    {
        id: 21, name: 'دهن عود أصلي', category: 'oud',
        desc: 'دهن عود طبيعي مقطر بعناية بتركيز عالي وثبات استثنائي',
        price: 450, emoji: '✨', image: 'https://images.unsplash.com/photo-1594035910387-fcd39ff5f3d9?w=600&q=80', badge: 'new'
    },

    // Nuts
    {
        id: 22, name: 'لوز محمص ومملح', category: 'nuts',
        desc: 'لوز أمريكي محمص بالملح الخفيف بقرمشة مثالية',
        price: 45, emoji: '🥜', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&q=80', badge: null
    },
    {
        id: 23, name: 'فستق حلبي فاخر', category: 'nuts',
        desc: 'فستق حلبي أخضر فاخر منتقى بعناية بحبات كبيرة',
        price: 90, emoji: '🟢', image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&q=80', badge: 'best'
    },
    {
        id: 24, name: 'جوز عين الجمل', category: 'nuts',
        desc: 'جوز عين جمل طبيعي غني بالأوميغا 3 والفوائد الصحية',
        price: 55, emoji: '🧠', image: 'https://images.unsplash.com/photo-1604515876632-c7ec8476c4e3?w=600&q=80', badge: null
    },
    {
        id: 25, name: 'كاجو محمص', category: 'nuts',
        desc: 'كاجو هندي محمص بدون ملح بنكهة طبيعية لذيذة',
        price: 65, oldPrice: 75, emoji: '🥜', image: 'https://images.unsplash.com/photo-1563292769-4e05b684851a?w=600&q=80', badge: 'sale'
    }
];

// ==========================================
// State
// ==========================================
let cart = JSON.parse(localStorage.getItem('alshaye_cart')) || [];
let activeCategory = 'all';
let searchQuery = '';

// ==========================================
// DOM Elements
// ==========================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ==========================================
// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderFilterButtons();
    renderProducts();
    updateCartUI();
    initParticles();
    initScrollEffects();
    initSearch();
    initCart();
    initNavigation();
    initIntersectionObserver();
});

// ==========================================
// Render Categories
// ==========================================
function renderCategories() {
    const grid = $('#categoriesGrid');
    grid.innerHTML = categories.map(cat => {
        const count = products.filter(p => p.category === cat.id).length;
        return `
            <div class="category-card fade-in" onclick="filterCategory('${cat.id}')">
                <span class="category-icon">${cat.icon}</span>
                <div class="category-name">${cat.name}</div>
                <div class="category-count">${count} منتج</div>
            </div>
        `;
    }).join('');
}

// ==========================================
// Render Filter Buttons
// ==========================================
function renderFilterButtons() {
    const container = $('#productsFilter');
    const allBtn = `<button class="filter-btn active" data-category="all" onclick="filterCategory('all')">الكل</button>`;
    const catBtns = categories.map(cat =>
        `<button class="filter-btn" data-category="${cat.id}" onclick="filterCategory('${cat.id}')">${cat.name}</button>`
    ).join('');
    container.innerHTML = allBtn + catBtns;
}

// ==========================================
// Filter by Category
// ==========================================
function filterCategory(catId) {
    activeCategory = catId;
    searchQuery = '';
    const searchInput = $('#searchInput');
    if (searchInput) searchInput.value = '';

    // Update buttons
    $$('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === catId);
    });

    renderProducts();

    // Scroll to products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// Render Products
// ==========================================
function renderProducts() {
    const grid = $('#productsGrid');
    const countEl = $('#productsCount');

    let filtered = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.includes(q) || p.desc.includes(q) ||
            categories.find(c => c.id === p.category)?.name.includes(q)
        );
    }

    // Update count
    countEl.textContent = `عرض ${filtered.length} منتج${filtered.length !== 1 ? '' : ''}`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:60px 20px;">
                <span style="font-size:56px; display:block; margin-bottom:16px; opacity:0.4;">🔍</span>
                <p style="font-size:18px; color:var(--text-secondary); margin-bottom:8px;">لا توجد نتائج</p>
                <p style="font-size:14px; color:var(--text-muted);">جرّب كلمة بحث مختلفة</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => {
        const catName = categories.find(c => c.id === product.category)?.name || '';
        const badgeHtml = product.badge
            ? `<span class="product-badge badge-${product.badge}">${getBadgeLabel(product.badge)}</span>`
            : '';
        const oldPriceHtml = product.oldPrice
            ? `<span class="price-old">${product.oldPrice} ر.س</span>`
            : '';

        return `
            <div class="product-card fade-in" id="product-${product.id}" onclick="openProductModal(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" loading="lazy" alt="${product.name}">
                    ${badgeHtml}
                    <div class="product-add-overlay">
                        <span>إضافة للسلة</span>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-category">${catName}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-desc">${product.desc}</div>
                    <div class="product-footer">
                        <div class="product-price">
                            <span class="price-current">${product.price} ر.س/ك</span>
                            ${oldPriceHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Trigger fade-in animations
    requestAnimationFrame(() => {
        grid.querySelectorAll('.fade-in').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 60);
        });
    });
}

function getBadgeLabel(badge) {
    const labels = {
        'new': 'جديد',
        'sale': 'خصم',
        'best': 'الأكثر مبيعاً'
    };
    return labels[badge] || '';
}

// ==========================================
// Cart Functions
// ==========================================
function removeFromCart(cartItemId) {
    cart = cart.filter(item => (item.cartItemId || item.id) != cartItemId);
    saveCart();
    updateCartUI();
}

function updateQty(cartItemId, delta) {
    const item = cart.find(i => (i.cartItemId || i.id) == cartItemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(cartItemId);
        return;
    }

    saveCart();
    updateCartUI();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
    showToast('تم تفريغ السلة');
}

function saveCart() {
    localStorage.setItem('alshaye_cart', JSON.stringify(cart));
}

function getCartTotal() {
    return cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product ? (product.price * item.qty / 1000) : 0);
    }, 0);
}

function updateCartUI() {
    const countEl = document.querySelector('#cartCount');
    const itemsEl = document.querySelector('#cartItems');
    const emptyEl = document.querySelector('#cartEmpty');
    const footerEl = document.querySelector('#cartFooter');
    const totalEl = document.querySelector('#cartTotal');

    const totalItems = cart.length;

    countEl.textContent = totalItems;
    countEl.classList.toggle('show', totalItems > 0);

    if (cart.length === 0) {
        itemsEl.innerHTML = `
            <div class="cart-empty">
                <span class="cart-empty-icon">🛒</span>
                <p>السلة فارغة</p>
                <span>أضف منتجات للبدء بالتسوق</span>
            </div>
        `;
        footerEl.style.display = 'none';
        return;
    }

    footerEl.style.display = 'block';

    itemsEl.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return '';
        const itemPrice = (product.price * item.qty / 1000).toFixed(2);
        const roastHtml = item.roast ? `<div style="font-size: 11px; color: var(--accent); margin-top:2px;">حمسة: ${item.roast}</div>` : '';
        const cId = item.cartItemId || item.id;
        
        return `
            <div class="cart-item">
                <div style="width: 50px; height: 50px; border-radius: 12px; overflow: hidden; flex-shrink: 0;">
                    <img src="${product.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${product.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${product.name}</div>
                    ${roastHtml}
                    <div class="cart-item-price">${itemPrice} ر.س</div>
                </div>
                <div class="cart-item-controls">
                    <button onclick="updateQty('${cId}', -50)">−</button>
                    <span class="cart-item-qty" style="font-size:12px; width:45px; text-align:center">${item.qty}غ</span>
                    <button onclick="updateQty('${cId}', 50)">+</button>
                    <button class="cart-item-remove" onclick="removeFromCart('${cId}')">🗑</button>
                </div>
            </div>
        `;
    }).join('');

    totalEl.textContent = `${getCartTotal().toFixed(2)} ر.س`;
}

// ==========================================
// Checkout via WhatsApp
// ==========================================
function checkout() {
    if (cart.length === 0) return;

    let msg = '🌿 *طلب جديد من عطارة الشايع*\n\n';
    msg += '━━━━━━━━━━━━━━━\n';

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;
        const itemPrice = (product.price * item.qty / 1000).toFixed(2);
        const roastText = item.roast ? ` (حمسة ${item.roast})` : '';
        msg += `• ${product.name}${roastText} × ${item.qty}غ = ${itemPrice} ر.س\n`;
    });

    msg += '━━━━━━━━━━━━━━━\n';
    msg += `💰 *المجموع: ${getCartTotal().toFixed(2)} ر.س*\n\n`;
    msg += 'الموقع: القصيم - بريدة\n';
    msg += 'شكراً لتسوقكم من عطارة الشايع! 🌿';

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/966503938998?text=${encoded}`, '_blank');
}

// ==========================================
// Search
// ==========================================
function initSearch() {
    const toggle = $('#searchToggle');
    const bar = $('#searchBar');
    const closeBtn = $('#searchClose');
    const input = $('#searchInput');

    toggle.addEventListener('click', () => {
        bar.classList.toggle('active');
        if (bar.classList.contains('active')) {
            input.focus();
        }
    });

    closeBtn.addEventListener('click', () => {
        bar.classList.remove('active');
        input.value = '';
        searchQuery = '';
        renderProducts();
    });

    let debounceTimer;
    input.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchQuery = e.target.value.trim();
            activeCategory = 'all';
            $$('.filter-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.category === 'all');
            });
            renderProducts();
        }, 300);
    });
}

// ==========================================
// Cart Sidebar
// ==========================================
function initCart() {
    const toggle = $('#cartToggle');
    const overlay = $('#cartOverlay');
    const closeBtn = $('#cartClose');
    const sidebar = $('#cartSidebar');
    const checkoutBtn = $('#checkoutBtn');
    const clearBtn = $('#clearCartBtn');

    const openCart = () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeCart = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    toggle.addEventListener('click', openCart);
    overlay.addEventListener('click', closeCart);
    closeBtn.addEventListener('click', closeCart);
    checkoutBtn.addEventListener('click', checkout);
    clearBtn.addEventListener('click', () => {
        clearCart();
        closeCart();
    });
}

// ==========================================
// Navigation
// ==========================================
function initNavigation() {
    const menuToggle = $('#menuToggle');
    const nav = $('#nav');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close nav on link click
    $$('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Active nav link on scroll
    const sections = ['hero', 'categories', 'products', 'about', 'contact'];
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        let current = 'hero';

        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section && section.offsetTop <= scrollY) {
                current = id;
            }
        });

        $$('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });
}

// ==========================================
// Scroll Effects
// ==========================================
function initScrollEffects() {
    const header = $('#header');
    const scrollTopBtn = $('#scrollTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Header background
        header.classList.toggle('scrolled', scrollY > 50);

        // Scroll to top button
        scrollTopBtn.classList.toggle('show', scrollY > 500);
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==========================================
// Intersection Observer for Animations
// ==========================================
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-in elements
    setTimeout(() => {
        $$('.fade-in').forEach(el => observer.observe(el));
    }, 100);
}

// ==========================================
// Hero Particles
// ==========================================
function initParticles() {
    const container = $('#heroParticles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${8 + Math.random() * 12}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.width = `${2 + Math.random() * 4}px`;
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ==========================================
// Toast Notification
// ==========================================
function showToast(message) {
    const toast = $('#toast');
    const msgEl = $('#toastMsg');

    msgEl.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// ==========================================
// Product Modal
// ==========================================
let currentModalProductId = null;
let currentModalRoast = null;
let currentModalWeight = 1000;

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentModalProductId = productId;
    currentModalRoast = product.category === 'coffee' ? 2 : null;
    currentModalWeight = 1000;

    renderModalContent(product);
    
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeProductModal);
document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('productModal')) closeProductModal();
});

function renderModalContent(product) {
    const body = document.getElementById('modalBody');
    const catName = categories.find(c => c.id === product.category)?.name || '';
    
    let roastHtml = '';
    if (product.category === 'coffee') {
        roastHtml = `
            <div class="modal-section">
                <div class="modal-section-title">مستوى الحمسة</div>
                <div class="roast-options">
                    <div class="roast-option ${currentModalRoast === 2 ? 'selected' : ''}" onclick="selectRoast(2)">حمسة 2</div>
                    <div class="roast-option ${currentModalRoast === 2.5 ? 'selected' : ''}" onclick="selectRoast(2.5)">حمسة 2.5</div>
                    <div class="roast-option ${currentModalRoast === 3 ? 'selected' : ''}" onclick="selectRoast(3)">حمسة 3</div>
                </div>
            </div>
        `;
    }

    body.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="modal-image">
        <div class="modal-info">
            <div class="product-category" style="margin-bottom: 5px;">${catName}</div>
            <div class="modal-title">${product.name}</div>
            <div class="modal-desc">${product.desc}</div>
            
            ${roastHtml}

            <div class="modal-section">
                <div class="modal-section-title">اختر الكمية (غرام)</div>
                <div class="weight-options">
                    <div class="weight-option ${currentModalWeight === 250 ? 'selected' : ''}" onclick="selectWeight(250)">ربع كيلو</div>
                    <div class="weight-option ${currentModalWeight === 500 ? 'selected' : ''}" onclick="selectWeight(500)">نصف كيلو</div>
                    <div class="weight-option ${currentModalWeight === 1000 ? 'selected' : ''}" onclick="selectWeight(1000)">1 كيلو</div>
                </div>
                <div class="weight-custom">
                    <span>كمية مخصصة:</span>
                    <input type="number" id="customWeightInput" value="${currentModalWeight}" step="50" min="50" oninput="updateCustomWeight(this.value)">
                    <span>غ</span>
                </div>
            </div>

            <div class="modal-footer">
                <div class="modal-price" id="modalPrice">0 ر.س</div>
                <button class="add-btn" onclick="addToCartFromModal()">إضافة للسلة</button>
            </div>
        </div>
    `;

    updateModalPrice(product);
}

function selectRoast(level) {
    currentModalRoast = level;
    const product = products.find(p => p.id === currentModalProductId);
    if (product) renderModalContent(product);
}

function selectWeight(weight) {
    currentModalWeight = weight;
    const product = products.find(p => p.id === currentModalProductId);
    if (product) renderModalContent(product);
}

function updateCustomWeight(value) {
    const val = parseInt(value, 10);
    if (!isNaN(val) && val >= 0) {
        currentModalWeight = val;
        document.querySelectorAll('.weight-option').forEach(el => el.classList.remove('selected'));
        const product = products.find(p => p.id === currentModalProductId);
        if (product) updateModalPrice(product);
    }
}

function updateModalPrice(product) {
    const priceEl = document.getElementById('modalPrice');
    if (priceEl) {
        const itemPrice = (product.price * currentModalWeight / 1000).toFixed(2);
        priceEl.textContent = `${itemPrice} ر.س`;
    }
}

function addToCartFromModal() {
    if (!currentModalProductId || currentModalWeight <= 0) return;
    
    const product = products.find(p => p.id === currentModalProductId);
    
    const cartItemId = product.category === 'coffee' ? `${product.id}_roast_${currentModalRoast}` : product.id.toString();
    
    let existing = cart.find(item => item.cartItemId === cartItemId);
    
    // Fallback for older cart items
    if (!existing && cart.find(item => item.id == product.id && !item.roast)) {
         existing = cart.find(item => item.id == product.id && !item.roast);
         existing.cartItemId = cartItemId;
         existing.roast = currentModalRoast;
    }

    if (!existing) {
        cart.push({
            cartItemId: cartItemId,
            id: product.id,
            qty: currentModalWeight,
            roast: currentModalRoast
        });
    } else {
        existing.qty += currentModalWeight;
    }

    saveCart();
    updateCartUI();
    showToast(`تمت إضافة ${currentModalWeight}غ من "${product.name}" للسلة`);
    closeProductModal();
}
