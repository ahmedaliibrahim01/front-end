# HTML
## Tags
#### Yapısal Etiketler
1. **`html`**: HTML belgesinin kök öğesi.
2. **`head`**: Belge hakkındaki meta bilgileri içerir.
3. **`title`**: Belgenin başlığını belirler. Tarayıcı sekmesinde görüntülenir.
4. **`body`**: Belgenin ana içeriğini içerir.

#### Metin Biçimlendirme Etiketleri
1. **`h1 - h6`**: Başlıklar. **`h1`** en önemli, **`h6`** en az önemli başlığı belirtir.
2. **`p`**: Paragraf.
3. **`br`**: Satır sonu.
4. **`strong`**: Kalın yazı.
5. **`em`**: İtalik yazı.
6. **`a`**: Bağlantı (anchor). `href` özniteliği ile bağlantı adresi belirtilir.
7. **`span`**: Metin veya diğer öğeleri biçimlendirmek için kullanılan satır içi konteyner.

#### Liste Etiketleri
1. **`ul`**: Sırasız liste (madde işaretli).
2. **`ol`**: Sıralı liste (numaralı).
3. **`li`**: Liste öğesi. **`ul`** veya **`ol`** içinde kullanılır.

#### Tablo Etiketleri
1. **`table`**: Tablo.
2. **`tr`**: Tablo satırı.
3. **`td`**: Tablo hücresi.
4. **`th`**: Tablo başlığı hücresi. Genellikle satır veya sütun başlıkları için kullanılır.

#### Medya Etiketleri
1. **`img`**: Görüntü. `src` özniteliği ile görüntü kaynağı belirtilir.
2. **`video`**: Video.
3. **`audio`**: Ses.

#### Form Etiketleri
1. **`form`**: Form.
2. **`input`**: Kullanıcıdan veri almak için giriş alanı.
3. **`label`**: Form alanları için etiket.
4. **`textarea`**: Çok satırlı metin girişi.
5. **`button`**: Düğme.

#### Diğer Yaygın Etiketler
1. **`div`**: Blok düzeyinde konteyner.
2. **`span`**: Satır içi konteyner.
3. **`header`**: Sayfa veya bölüm başlığı.
4. **`footer`**: Sayfa veya bölüm altbilgisi.
5. **`nav`**: Gezinti bağlantılarını içeren bölüm.
6. **`section`**: Genel içerik bölümü.
7. **`article`**: Bağımsız içerik birimi.
8. **`aside`**: Ana içeriğe ek bilgi içeren bölüm.

## Attributes
### Yaygın Öznitelikler (Attributes)
1. **`id`**: Elementin benzersiz kimliğini tanımlar.
   ```html
   <div id="header"></div>
   ```

2. **`class`**: Elementin sınıfını tanımlar. Birden fazla sınıf, boşlukla ayrılarak kullanılabilir.
   ```html
   <div class="container main"></div>
   ```

3. **`style`**: Inline CSS tanımlar.
   ```html
   <p style="color: blue; font-size: 14px;"></p>
   ```

4. **`src`**: Kaynak dosya yolunu belirtir. Genellikle resim, video ve ses dosyaları için kullanılır.
   ```html
   <img src="image.jpg" alt="Açıklama">
   ```

5. **`alt`**: Alternatif metin. Görüntülenemeyen resimler için açıklama sağlar.
   ```html
   <img src="image.jpg" alt="Açıklama">
   ```

6. **`href`**: Hedef URL'yi belirtir. Genellikle bağlantılar için kullanılır.
   ```html
   <a href="https://www.example.com">Example</a>
   ```

7. **`title`**: Öğenin üzerine gelindiğinde görünen ek bilgi sağlar.
   ```html
   <a href="https://www.example.com" title="Example Site">Example</a>
   ```

8. **`target`**: Bağlantının açılma şeklini belirtir. `_blank`, `_self`, `_parent`, `_top` gibi değerler alır.
   ```html
   <a href="https://www.example.com" target="_blank">Example</a>
   ```

9. **`rel`**: Bağlantının hedefi ile ilişkisini tanımlar. Genellikle `nofollow`, `noopener`, `noreferrer` gibi değerler alır.
   ```html
   <a href="https://www.example.com" rel="noopener">Example</a>
   ```

10. **`type`**: Öğenin türünü belirtir. Genellikle `input` ve `button` elementleri için kullanılır.
    ```html
    <input type="text">
    <button type="submit">Submit</button>
    ```

11. **`value`**: Öğenin değerini belirtir. Genellikle form öğeleri için kullanılır.
    ```html
    <input type="text" value="Default Text">
    ```

12. **`name`**: Form elemanları için öğenin adını tanımlar.
    ```html
    <input type="text" name="username">
    ```

13. **`placeholder`**: Kullanıcıya örnek girdi metni gösterir. Genellikle form öğeleri için kullanılır.
    ```html
    <input type="text" placeholder="Enter your name">
    ```

14. **`disabled`**: Öğeyi devre dışı bırakır.
    ```html
    <input type="text" disabled>
    ```

15. **`readonly`**: Öğeyi salt okunur yapar.
    ```html
    <input type="text" readonly>
    ```

16. **`maxlength`**: Girdi öğesi için maksimum karakter sayısını belirtir.
    ```html
    <input type="text" maxlength="10">
    ```

17. **`checked`**: Onay kutusu veya radyo butonunu varsayılan olarak seçili yapar.
    ```html
    <input type="checkbox" checked>
    ```

18. **`selected`**: Seçim kutusundaki bir seçeneği varsayılan olarak seçili yapar.
    ```html
    <option value="1" selected>Option 1</option>
    ```