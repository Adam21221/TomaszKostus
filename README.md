# Strona Internetowa - Tomasz Kostuś

Pełna, responsywna strona internetowa posła Tomasza Kostusia stworzona w czystym HTML, CSS i JavaScript.

## 📁 Struktura plików

```
Tomasz_Kostuś/
├── index.html              # Główny plik HTML strony
├── zyciorys.html           # Podstrona z życiorysem
├── styles.css              # Główne style CSS
├── zyciorys-styles.css     # Style dla podstrony życiorys
├── script.js               # Interaktywność JavaScript
└── README.md               # Ten plik
```

## 🚀 Jak uruchomić stronę

1. Otwórz plik `index.html` w przeglądarce internetowej (Chrome, Firefox, Safari, Edge)
2. Możesz również użyć lokalnego serwera (np. Live Server w VS Code)

## 🖼️ Brakujące zasoby

Aby strona wyglądała w pełni kompletnie, potrzebujesz dodać następujące obrazy:

### Obrazy wymagane:
- `img/st1.jpg` - zdjęcie główne w hero section i na podstronie życiorys (sidebar) ✅
- `img/2ANN_6865.jpeg` - zdjęcie w sekcji "O mnie" na stronie głównej ✅
- `img/logo/Logo_Koalicja_Obywatelska_2023.svg` - logo Koalicji Obywatelskiej w menu ✅
- `img/logo/2560px-Sejm_RP_logo_and_wordmark.png` - logo Sejmu RP w menu ✅
- `img/logo/Polsat_News_Poziome_2021.svg.png` - logo Polsat News ✅
- `img/logo/TVP_Info_logo.svg.png` - logo TVP Info ✅
- `img/logo/Logotyp_Polskiego_Radia_24.svg.png` - logo Polskie Radio 24 ✅
- `img/logo/op111_167266578512.jpg` - logo Opolskie (4. logo w sekcji media) ✅
- `news1.jpg`, `news2.jpg`, `news3.jpg` - zdjęcia aktualności (opcjonalne)

### Opcjonalne:
- `hero-bg.jpg` - tło dla sekcji hero (opcjonalne, używane jako nakładka)

**Uwaga:** Jeśli nie dodasz obrazów, strona będzie działać z placeholderami.

## ✨ Funkcje strony

### 📱 Responsywna
- Pełna responsywność na wszystkich urządzeniach
- Optymalizacja dla mobile, tablet i desktop

### 🎨 Nowoczesny design
- Gradient backgrounds
- Animacje on scroll
- Hover effects
- Smooth scrolling

### 📋 Strona główna (index.html):
1. **Header** - nawigacja sticky z logami KO i Sejmu
2. **Hero "PRACA W SEJMIE"** - split layout (zdjęcie po lewej, tekst po prawej), animacje, efekty
3. **O mnie** - informacje o pośle (zdjęcie pionowe + tekst + podpis)
4. **Statystyki** - aktywność w liczbach (animowane wykresy kołowe)
5. **Aktualności** - 3 najnowsze newsy
6. **Filmy** - 4 pionowe video placeholdery
7. **Galeria** - elegancki kolaż 8 zdjęć z `img/collage/`
8. **W mediach** - 4 loga mediów
9. **Kontakt** - dwa biura + formularz kontaktowy (obok siebie)
10. **Stopka** - elegancka stopka z gradientem

### 📋 Podstrona życiorys (zyciorys.html):
1. **Hero z tytułem** - elegancki header
2. **O mnie** - wprowadzenie i misja
3. **Działalność parlamentarna** - komisje i grupy
4. **Priorytety i działania** - dla regionu i kraju
5. **Kontakt z wyborcami** - spotkania i dyżury
6. **Osiągnięcia** - karty z najważniejszymi sukcesami
7. **Media i komunikacja** - obecność w mediach
8. **Sidebar** - profil, statystyki, komisje, kontakt, social media
9. **CTA Section** - zachęta do kontaktu
10. **Stopka** - informacje końcowe

### 🔧 Funkcjonalności JavaScript:
- Smooth scrolling przy kliknięciu w linki nawigacji
- Animacje pojawiania się sekcji przy scrollowaniu
- Działający formularz kontaktowy z walidacją
- Efekt parallax na hero section
- Active state dla nawigacji podczas scrollowania

## 🎯 Dostosowywanie

### Kolory
Kolory można łatwo zmienić w pliku `styles.css` w sekcji `:root`:

```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #2c3e50;
    --accent-color: #c41e3a;
    --text-color: #333;
    --light-bg: #f8f9fa;
    --white: #ffffff;
    --gray: #666;
}
```

### Treść
Cała treść znajduje się w pliku `index.html` i można ją łatwo edytować.

### Formularz kontaktowy
Obecnie formularz wyświetla komunikat sukcesu po wysłaniu. 
Aby podłączyć prawdziwy backend, zmodyfikuj funkcję w `script.js`:

```javascript
// Przykład integracji z backend
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
```

### Media społecznościowe
Linki do mediów społecznościowych są ustawione na przykładowe adresy:
- Facebook: `https://www.facebook.com/tomaszkostus`
- Instagram: `https://www.instagram.com/tomaszkostus`
- TikTok: `https://www.tiktok.com/@tomaszkostus`
- X (Twitter): `https://twitter.com/tomaszkostus`

Aby zmienić linki na prawdziwe, edytuj sekcję Social Media w pliku `index.html` (linie 223-242).

## 🌐 Hosting

Stronę możesz hostować na:
- GitHub Pages (darmowy)
- Netlify (darmowy)
- Vercel (darmowy)
- Dowolny hosting www

## 📞 Kontakt

Strona zawiera formularz kontaktowy oraz informacje o dwóch biurach:
- **Biuro Poselskie Opole** - ul. Katowicka 55 lok. 2.9
- **Biuro Regionu Opole** - ul. Krakowska 31

Email: poselkostus@gmail.com

## 📄 Licencja

Strona stworzona na podstawie oficjalnej strony Tomasza Kostusia.

---

**Przygotowane przez:** AI Assistant  
**Data:** Październik 2025

