/* eslint-disable @typescript-eslint/camelcase */
export default {
  lang: 'Türkçe',
  auto: 'Otomatik',

  close: 'Kapat',
  no: 'Hayır',
  yes: 'Evet',
  cancel: 'İptal',
  ok: 'Tamam',

  start: 'Başlat',
  stop: 'Durdur',
  submit: 'Tamam',
  edit: 'Düzenle',
  delete: 'Sil',
  todo: 'Yapılacak',
  resume: 'Devam Et',
  pause: 'Duraklat',
  force_start: 'Zorla Başlat',
  info: 'Bilgi',
  reset: 'Sıfırla',
  login: 'Oturum Aç',
  search: 'Ara',
  refresh: 'Yenile',
  location: 'Kaydetme yeri',
  rename: 'Yeniden adlandır',
  trigger_application_shutdown: 'qBittorrent\'ten çık',
  reannounce: 'Yeniden Duyur',
  recheck: 'Yeniden Denetle',

  username: 'Kullanıcı Adı',
  password: 'Parola',

  name: 'Adı',
  size: 'Boyut',
  progress: 'İlerleme',
  status: 'Durum',
  seeds: 'Gönderim',
  peers: 'Kişi',
  dl_speed: 'İnd. Hızı',
  up_speed: 'Gön. Hızı',
  eta: 'TBS',
  ratio: 'Oran',
  added_on: 'Eklenme',

  settings: 'Ayarlar',
  logs: 'Günlükler',
  light: 'Aydınlık',
  dark: 'Karanlık',

  all: 'Tümü',
  category: 'Kategori |||| Kategoriler',
  uncategorized: 'Kategorilenmemiş',
  others: 'Diğerleri',
  sites: 'Siteler',
  files: 'Dosyalar',
  less: 'Daha Az',
  more: 'Daha Çok',
  feed: 'Bildirim',
  date: 'Tarih',
  query: 'Sorgu',
  plugin: 'Eklenti |||| Eklentiler',
  action: 'Eylem |||| Eylemler',
  search_engine: 'Arama motoru',
  usage: 'Kullanım',
  plugin_manager: 'Eklenti yöneticisi',

  title: {
    _: 'Başlık',
    add_torrents: 'Torrent ekle',
    delete_torrents: 'Torrent\'leri sil',
    set_category: 'Kategtori ayarla',
    edit_tracker: 'İzleyicileri Düzenle',
    set_location: 'Yeri ayarla...',
    recheck_torrents: 'Torrent\'leri yeniden denetle',
  },

  label: {
    switch_to_old_ui: 'Resmi Web Arayüzü\'ne geç',
    create_subfolder: 'Alt klasör oluştur',
    start_torrent: 'Torrent\'i başlat',
    skip_hash_check: 'Adresleme denetimini atla',
    in_sequential_order: 'Sıralı düzende indir',
    first_and_last_pieces_first: 'Önce ilk ve son parçaları indir',

    also_delete_files: 'Aynı zamanda sabit diskteki dosyaları da sil',

    auto_tmm: 'Otomatik Torrent Yönetimi',

    adding: 'Ekleniyor…',
    reloading: 'Yeniden yükleniyor…',
    deleting: 'Siliniyor…',
    moving: 'Taşınıyor…',
    moved: 'Taşındı.',
    next: 'İleri',
    back: 'Geri',
    confirm: 'Onayla',
    reannounced: 'Yeniden duyuruldu.',
    rechecking: 'Yeniden denetleniyor…',
    dht_nodes: '%{smart_count} düğüm |||| %{smart_count} düğüm',
    base_url: 'Ana makine URL',
  },

  msg: {
    item_is_required: '%{item} gerekli!',
  },

  dialog: {
    trigger_exit_qb: {
      title: 'qBittorrent\'ten Çık',
      text: 'qBittorrent uygulamasından çıkmak istediğinize emin misiniz?'
    },
    add_torrents: {
      placeholder: 'Torrentleri yüklemek için\nlinkleri buraya girin\nveya sağdaki ataç butonuna tıklayıp seçim yapın.',
      hint: 'Her satıra sadece bir bağlantı',
    },
    delete_torrents: {
      msg: 'Seçilen torrent\'leri aktarım listesinden silmek istediğinize emin misiniz?',
      also_delete_same_name_torrents: 'Aynı zamanda, aynı isimli bir torrenti de sil. |||| Aynı zamanda, aynı isimli %{smart_count} torrentleri de sil.',
    },
    set_category: {
      move: 'Seçilmiş torrentlerin kategorilerini, %{category} olarak değiştirmek istediğinize emin misiniz?',
      reset: 'Seçilmiş torrentlerin kategorilerini sıfırlamak istediğinize emin misiniz?',
      also_move_same_name_torrents: 'Aynı zamanda, aynı isimli bir torrenti de taşı. |||| Aynı zamanda, aynı isimli %{smart_count} torrentleri de taşı.',
    },
    switch_locale: {
      msg: 'Dili %{lang} olarak değiştirmek istediğinize emin misiniz?\nBu eylem sayfayı yeniden yükleyecek.',
    },
    recheck_torrents: {
      msg: 'Torrentleri yeniden denetlemek istediğinize emin misiniz?',
    },
    rss: {
      add_feed: 'Bildirim ekle',
      feed_url: 'Bildirim URL\'si',
      auto_refresh: 'Otomatik yenile',
      auto_download: 'Otomatik indir',
      delete_feeds: 'Seçilmiş bildirimlerin silmek istediğinize emin misiniz?',
      date_format: '%{date} (%{duration} önce)',
    },
    rss_rule: {
      add_rule: 'Yeni kural ekle',
      new_rule_name: 'Yeni kural adı',
      delete_rule: 'Seçilmiş kuralları silmek istediğinize emin misiniz?',
      title: 'RSS indirici',
      rule_settings: 'Kural ayarları',

      use_regex: 'Regex kullan',
      must_contain: 'İçermeli',
      must_not_contain: 'İçermemeli',
      episode_filter: 'Bölüm süzgeci',
      smart_episode: 'Akıllı bölüm süzgeci kullan',
      assign_category: 'Kategori ata',

      apply_to_feeds: 'Kuralı bildirimlere uygula',
    },
  },

  state: {
    _: 'Durum',

    downloading: 'İndiriliyor',
    seeding: 'Gönderiliyor',
    completed: 'Tamamlandı',
    resumed: 'Devam Edildi',
    paused: 'Duraklatıldı',
    active: 'Etkin',
    inactive: 'Etkin Değil',
    errored: 'Hata Oldu',
  }
}
