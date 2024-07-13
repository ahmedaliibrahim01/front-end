## CSS Konuları
1. **Selectors**
2. **Font**
3. **Text Formating**
4. **Background**
5. **Borders**
6. **Box Model**
7. **Display and Position**
8. **Float Layout**
9. **Flexbox**
10. **Grid**
11. **Styling Elements**

### Selectors
1. **Element Selector (Eleman Seçici)**: Belirli bir HTML elementini seçer.
2. **ID Selector (ID Seçici)**: Belirli bir ID'ye sahip olan elementi seçer. ID benzersiz olmalıdır.
3. **Class Selector (Sınıf Seçici)**: Belirli bir sınıfa sahip olan elementleri seçer.

### Font

1. **`font-family`**: Metin için kullanılacak yazı tipini belirler.
2. **`font-size`**: Metnin boyutunu ayarlar.
3. **`font-style`**: Yazı tipinin stilini belirler. Normal, italic veya oblique olabilir.
4. **`font-weight`**: Yazı tipinin kalınlığını ayarlar. Normal, bold veya 100-900 arasında sayısal değerlerle ifade edilebilir.
5. **`font-variant`**: Yazı tipinin varyantını belirler. Örneğin, küçük büyük harf dönüşümlerini ayarlamak için `small-caps` kullanılabilir.
6. **`line-height`**: Metin satırları arasındaki yüksekliği ayarlar.


### Text Formating

1. **`color`**: Metnin rengini belirler.
2. **`text-align`**: Metnin yatay hizalamasını ayarlar (sola, sağa, ortaya, veya iki yana yaslama).
3. **`text-decoration`**: Metin üzerinde dekoratif efektler (alt çizgi, üst çizgi, üstten çizgi) ekler veya kaldırır.
4. **`text-transform`**: Metnin büyük/küçük harf dönüşümlerini ayarlar (büyük harf, küçük harf, her kelimenin ilk harfi büyük).
5. **`text-indent`**: Paragrafların ilk satırını girintiler.
6. **`letter-spacing`**: Harfler arasındaki boşluğu ayarlar.
7. **`word-spacing`**: Kelimeler arasındaki boşluğu ayarlar.
8. **`line-height`**: Satır yüksekliğini ayarlar (yukarıda font özellikleri arasında da geçer).
9. **`text-shadow`**: Metne gölge efekti ekler.
10. **`white-space`**: Metnin beyaz boşluklarını nasıl işleyeceğini ayarlar (örneğin, normal, no-wrap, pre, pre-line, pre-wrap).


### Background

1. **`background-color`**: Arka plan rengini belirler.
2. **`background-image`**: Arka plan resmi ayarlar.
3. **`background-repeat`**: Arka plan resminin tekrar edilme şeklini belirler (örneğin, repeat, no-repeat, repeat-x, repeat-y).
4. **`background-position`**: Arka plan resminin konumunu belirler.
5. **`background-size`**: Arka plan resminin boyutunu ayarlar (örneğin, cover, contain, belirli piksel veya yüzde değerleri).
6. **`background-attachment`**: Arka plan resminin kaydırma davranışını belirler (scroll, fixed, local).
7. **`background-clip`**: Arka planın çizileceği alanı belirler (border-box, padding-box, content-box).
8. **`background-origin`**: Arka plan resminin veya renginin nereden başlayacağını belirler (border-box, padding-box, content-box).
9. **`background-blend-mode`**: Birden fazla arka plan resminin veya renginin nasıl karışacağını belirler.

### Border
1. **`border-width`**: Kenarlığın kalınlığını belirler.
2. **`border-style`**: Kenarlığın stilini belirler (solid, dashed, dotted gibi).
3. **`border-color`**: Kenarlığın rengini belirler.
4. **`border-radius`**: Kenarlık köşelerinin yuvarlaklığını belirler.

### Box Model
CSS'de box model (kutu modeli) özellikleri, bir HTML elemanının boyutunu ve davranışını belirlemek için kullanılır. İşte temel box model özellikleri:

1. **`width`**: Elemanın genişliğini belirler.
2. **`height`**: Elemanın yüksekliğini belirler.
3. **`padding`**: İç içe kutunun iç kenarlığını belirler. Örneğin: `padding: 10px;` (her yöne aynı), `padding: 10px 5px;` (dikey ve yatay sırasıyla).
4. **`border`**: Kenarlığı belirler. `border-width`, `border-style`, ve `border-color` özelliklerini birleştirir. Örneğin: `border: 1px solid #ccc;`.
5. **`margin`**: Elemanın dış kenarlığını belirler. Örneğin: `margin: 10px;` (her yöne aynı), `margin: 10px 5px;` (dikey ve yatay sırasıyla).
6. **`box-sizing`**: Kutunun genişliğini ve yüksekliğini nasıl hesaplayacağını belirler. `content-box` (varsayılan), `border-box` (padding ve border dahil).