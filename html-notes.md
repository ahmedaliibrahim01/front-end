## HTML Etiketleri ve Özellikler

### Yapısal Etiketler
1. **`html`**: HTML belgesinin kök öğesi.
   - **`lang`**: Dil kodunu belirtir.

2. **`head`**: Belge hakkındaki meta bilgileri içerir.

3. **`title`**: Belgenin başlığını belirler. Tarayıcı sekmesinde görüntülenir.
   
4. **`body`**: Belgenin ana içeriğini içerir.

### Metin Biçimlendirme Etiketleri
1. **`h1 - h6`**: Başlıklar. **`h1`** en önemli, **`h6`** en az önemli başlığı belirtir.

2. **`p`**: Paragraf.

3. **`br`**: Satır sonu.

4. **`strong`**: Kalın yazı.

5. **`em`**: İtalik yazı.

6. **`a`**: Bağlantı (anchor). 
   - **`href`**: Bağlantı adresi.
   - **`target`**: Bağlantının nerede açılacağını belirtir (`_blank` yeni sekmede açar).

### Liste Etiketleri
1. **`ul`**: Sırasız liste (madde işaretli).

2. **`ol`**: Sıralı liste (numaralı).

3. **`li`**: Liste öğesi.

### Tablo Etiketleri
1. **`table`**: Tablo.
   - **`border`**: Tablonun kenarlık kalınlığını belirtir (artık önerilmez, CSS kullanımı tercih edilir).
   - **`width`**: Tablonun genişliğini belirtir.
   - **`cellpadding`**: Hücre içeriği ile hücre sınırı arasındaki boşluk miktarını belirtir.
   - **`cellspacing`**: Hücreler arasındaki boşluk miktarını belirtir.
2. **`tr`**: Tablo satırı.

3. **`td`**: Tablo hücresi.
   - **`colspan`**: Hücrenin kaç sütunu kaplayacağını belirtir.
   - **`rowspan`**: Hücrenin kaç satırı kaplayacağını belirtir.

4. **`th`**: Tablo başlığı hücresi.
   - **`colspan`**: Hücrenin kaç sütunu kaplayacağını belirtir.
   - **`rowspan`**: Hücrenin kaç satırı kaplayacağını belirtir.

Bu öznitelikler tabloları daha iyi biçimlendirmek ve düzenlemek için kullanılır. Herhangi başka bir konuda yardım gerekiyorsa, sormaktan çekinmeyin!

### Medya Etiketleri
1. **`img`**: Görüntü.
   - **`src`**: Görüntü kaynağı.
   - **`alt`**: Alternatif metin.
   - **`width`**: Genişlik.
   - **`height`**: Yükseklik.

2. **`video`**: Video.
   - **`src`**: Video kaynağı.
   - **`controls`**: Oynatma kontrolleri.

3. **`audio`**: Ses.
   - **`src`**: Ses kaynağı.
   - **`controls`**: Oynatma kontrolleri.

### Form Etiketleri
1. **`form`**: Form.
   - **`action`**: Form verilerinin gönderileceği URL.
   - **`method`**: Form verilerinin gönderilme yöntemi (`post` veya `get`).

2. **`input`**: Kullanıcıdan veri almak için giriş alanı.
   - **`type`**: Giriş türü (örneğin `text`, `password`, `submit`).
        - **`text`**: Metin girişi.
        - **`password`**: Şifre girişi.
        - **`email`**: E-posta girişi.
        - **`tel`**: Telefon numarası girişi.
        - **`number`**: Sayı girişi.
        - **`date`**: Tarih seçici.
        - **`checkbox`**: Onay kutusu.
        - **`radio`**: Radyo düğmesi (seçenekler arasından birini seçme).
        - **`file`**: Dosya yükleme.
        - **`submit`**: Form gönderme düğmesi.
        - **`reset`**: Form sıfırlama düğmesi.
        - **`button`**: Basit düğme.

   - **`name`**: Giriş alanının adı.
   - **`value`**: Giriş alanının varsayılan değeri.
   - **`placeholder`**: Örnek girdi metni.
   - **`required`**: Zorunlu alan.
   - **`checked`**: Onay kutusu veya radyo butonu için varsayılan olarak seçili yapar.

3. **`label`**: Form alanları için etiket.
   - **`for`**: Hangi giriş alanı ile ilişkilendirildiğini belirtir.

4. **`textarea`**: Çok satırlı metin girişi.
   - **`name`**: Giriş alanının adı.
   - **`rows`**: Satır sayısı.
   - **`cols`**: Sütun sayısı.
   - **`placeholder`**: Örnek girdi metni.
   - **`required`**: Zorunlu alan.

5. **`button`**: Düğme.
   - **`type`**: Düğme türü 
        - **`button`**
        - **`submit`**
        - **`reset`**
   - **`name`**: Düğme adı.
   - **`value`**: Düğme değeri.

### Diğer Yaygın Etiketler
1. **`div`**: Blok düzeyinde konteyner.

2. **`span`**: Satır içi konteyner.

3. **`header`**: Sayfa veya bölüm başlığı.

4. **`footer`**: Sayfa veya bölüm altbilgisi.

5. **`nav`**: Gezinti bağlantılarını içeren bölüm.

6. **`section`**: Genel içerik bölümü.

7. **`article`**: Bağımsız içerik birimi.

8. **`aside`**: Ana içeriğe ek bilgi içeren bölüm.