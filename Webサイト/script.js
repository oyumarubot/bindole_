window.addEventListener('DOMContentLoaded', () => {
    // ローディング画面の処理
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const mainImage = document.querySelector('.hero-image img');

    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainContent.classList.add('visible');
        document.body.style.overflow = 'auto';
        
        // フェードインをトリガー
        mainImage.classList.add('visible');
    }, 2000); // ローディング後2秒で切り替え
});

// TOPに戻るアイコン
     const topIcon = document.getElementById('top-icon');
     topIcon.addEventListener('click', () => {
         window.scrollTo({ top: 0, behavior: 'smooth' });
     });
 
// ハンバーガーメニュー
     const menuIcon = document.getElementById('menu-icon');
     const menu = document.getElementById('menu');
     menuIcon.addEventListener('click', () => {
         menu.classList.toggle('open');
     });
 
 
// main_2の画像とテキストの表示アニメーション
         const mainImage = document.querySelector('#main-image-container');
         const text1 = document.getElementById('text1');
         const text2 = document.getElementById('text2');
         const text3 = document.getElementById('text3');
     
         window.addEventListener('scroll', () => {
             const scrollY = window.scrollY;
             if (scrollY > 500) { // スクロール位置が200pxを超えたら表示
                 mainImage.style.opacity = 1;
                 text1.style.opacity = 1;
                 text2.style.opacity = 1;
                 text3.style.opacity = 1;
             }
         });


// モーダル要素と画像を取得
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

// image1 をクリックしたときに modal1 を表示
image1.addEventListener('click', () => {
    modal1.style.display = 'flex'; // modal1を表示
});

// image2 をクリックしたときに modal2 を表示
image2.addEventListener('click', () => {
    modal2.style.display = 'flex'; // modal2を表示
});

// モーダル以外の場所をクリックしたときに modal を閉じる
window.addEventListener('click', (e) => {
    if (e.target === modal1) {
        modal1.style.display = 'none'; // modal1を非表示
    }
    if (e.target === modal2) {
        modal2.style.display = 'none'; // modal2を非表示
    }
});



// NEJIMOJI画像の切り替え

const taipoImages = ['assets/images/taipo.png', 'assets/images/taipo_2.png']; // 画像パスを配列に格納
let currentTaipoIndex = 0;
const taipoImageElement = document.querySelector('#taipo-image'); // IDを選択


// 画像を切り替える関数
function switchTaipoImage() {
    // 画像のインデックスを切り替え
    currentTaipoIndex = (currentTaipoIndex + 1) % taipoImages.length;

    // 新しい画像のパスを設定
    taipoImageElement.src = taipoImages[currentTaipoIndex];
}

// マウスオーバー時に画像を切り替える処理
taipoImageElement.addEventListener('mouseenter', () => {
    // フェードアウトを始める前に画像を切り替え
    taipoImageElement.style.opacity = 0;  // まずフェードアウト

    // 画像を切り替えた後、少し待ってからフェードイン
    setTimeout(() => {
        switchTaipoImage(); // 画像を切り替え
        taipoImageElement.style.opacity = 1;  // フェードインを開始
    }, 1000); // 2秒後に画像切り替えとフェードインを行う
});


// NEJIpattern画像の切り替えロジック
const patternImages = ['assets/images/pattern.png', 'assets/images/pattern_2.png'];
let currentPatternIndex = 0;
const patternImageElement = document.querySelector('.pattern-img');

patternImageElement.addEventListener('mouseenter', () => {
    patternImageElement.style.opacity = 0; // フェードアウト
    setTimeout(() => {
        currentPatternIndex = (currentPatternIndex + 1) % patternImages.length;
        patternImageElement.src = patternImages[currentPatternIndex]; // 画像切り替え
        patternImageElement.style.opacity = 1; // フェードイン
    }, 1000);
});

// Bindoles画像の切り替えロジック
const bindolesImages = ['assets/images/bindoles.png', 'assets/images/bindoles_2.png'];
let currentBindolesIndex = 0;
const bindolesImageElement = document.querySelector('.bindoles-img');

bindolesImageElement.addEventListener('mouseenter', () => {
    bindolesImageElement.style.opacity = 0; // フェードアウト
    setTimeout(() => {
        currentBindolesIndex = (currentBindolesIndex + 1) % bindolesImages.length;
        bindolesImageElement.src = bindolesImages[currentBindolesIndex]; // 画像切り替え
        bindolesImageElement.style.opacity = 1; // フェードイン
    }, 1000); // 1秒で切り替え
});
