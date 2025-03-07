const locale = {
  /** General */
  category: 'kategori',
  settings: 'pengaturan',
  pause: 'jeda',
  delete: 'hapus',
  save: 'simpan',
  cancel: 'batalkan',
  confirm: 'konfirmasi',
  edit: 'Edit',
  createNew: 'Buat Baru',
  path: 'Path',
  create: 'Buat',
  url: 'URL',
  directory: 'Direktori',
  unknown: 'tidak diketahui',
  status: 'Status',
  all: 'Semua',
  downloading: 'Mengunduh',
  seeding: 'Seeding',
  completed: 'Selesai',
  resumed: 'Dilanjutkan',
  paused: 'Terjeda',
  active: 'Aktif',
  inactive: 'Tidak Aktif',
  stalled: 'Ter-stall',
  errored: 'Bermasalah',
  login: 'Masuk',
  logout: 'Keluar',
  downloaded: 'Terunduh',
  uploaded: 'Terunggah',
  upload: 'Unggah',
  download: 'Unduh',
  ETA: 'Estimasi',
  peers: 'Peer',
  ratio: 'Rasio',
  seeds: 'Seed',
  tags: 'Tag',
  share: 'Berbagi',
  name: 'Nama',
  hash: 'Hash',
  magnet: 'Magnet',
  feed: 'feed',
  rule: 'rule',
  then: 'Lalu',

  /** Torrent */
  torrent: {
    title: 'judul',
    added: 'ditambahkan pada',
    availability: 'ketersediaan',
    size: 'ukuran',
    progress: 'progres',
    directory: 'direktori',
    downloaded: 'diunduh',
    uploaded: 'diunggah',
    created: 'dibuat oleh',
    comments: 'komentar',
    uploadedSession: 'Sesi Terunggah',
    torrentTitle: 'Judul Torrent'
  },

  /** Navbar */
  navbar: {
    currentSpeed: 'kecepatan saat ini',
    freeSpace: 'kosong',
    topActions: {
      addTorrent: 'tambah torrent',
      resumeSelected: 'lanjut torrent terpilih',
      pauseSelected: 'jeda torrent terpilih',
      removeSelected: 'hapus torrent terpilih',
      openSettings: 'buka pengaturan',
      searchNew: 'cari torrent baru'
    },
    sessionStats: {
      tooltip: 'Sejak terakhir kali qBittorrent dijalankan ulang'
    },
    filters: {
      stalled_uploading: 'Unggahan ter-stall',
      stalled_downloading: 'Unduhan ter-stall'
    },
    action: {
      altSpeed: 'Kecepatan alt',
      dark: 'Malam',
      light: 'Terang'
    }
  },

  /** Modals */
  modals: {
    newFeed: {
      feedName: 'Nama',
      url: 'URL'
    },
    newRule: {
      name: 'Nama',
      def: {
        mustContain: 'Harus mengandung',
        affectedFeeds: 'Terapkan Aturan ke Feeds'
      }
    },
    pluginManager: {
      title: 'Manajer plugin'
    },
    search: {
      title: 'Cari',
      btnStartSearch: 'Cari',
      btnStopSearch: 'Berhenti',
      columnTitle: {
        name: 'Nama',
        size: 'Ukuran',
        seeds: 'Seed',
        peers: 'Peer',
        search_engine: 'Situs',
        action: ''
      }
    },
    settings: {
      tabName: {
        VueTorrent: 'vuetorrent',
        downloads: 'Unduhan',
        connection: 'koneksi',
        bittorrent: 'bittorrent',
        rss: 'Rss',
        webUI: 'WEBUI',
        tagsAndCategories: 'tag & kategori'
      },
      pageVueTorrent: {
        tabName: {
          general: 'Umum',
          dashboard: 'Dashboard'
        },
        pageGeneral: {
          tip: 'Pengaturan berikut hanya untuk WebUI kustom',
          currentSpeed: 'Tampilkan Kec. Terkini',
          speedGraph: 'Tampilkan Grafik Kecepatan',
          sessionStats: 'Tampilkan Statistik Sesi',
          allTimeStats: 'Tampilkan Semua Statistik',
          freeSpace: 'Tampilkan Ruang Kosong',
          trackerFilter: 'Tampilkan Filter Tracker',
          rightDrawer: 'Drawer Kanan',
          language: 'Bahasa:',
          paginationSize: 'Ukuran halaman:',
          vueTorrentTitle: 'Judul VueTorrent:',
          currentVersion: 'Versi saat ini:',
          qbittorrentVersion: 'Versi qBittorrent:'
        },
        pageDashboard: {
          busyTorrentTip: 'Properti ditampilkan pada torrent yang sibuk',
          completedTorrentTip: 'Properti ditampilkan pada torrent yang selesai'
        }
      },
      pageDownloads: {
        subHeaderWhenAddTorrent: 'Saat menambahkan torrent',
        whenAddTorrent: {
          createSubFolder: 'Buat subfolder untuk torrent dengan banyak file',
          donotAutoStart: 'Jangan mengunduh secara otomatis'
        },
        subHeaderPublicSettings: 'Pengaturan Publik',
        publicSettings: {
          preAllocateDisk: 'Pra-alokasi disk untuk semua file',
          appendQBExtension: 'Tambahkan ekstensi .!qB pada file yang belum selesai'
        },
        subHeaderSaveManagement: 'Manajemen Penyimpanan',
        saveManagement: {
          autoManagement: 'Manajemen Penyimpanan Otomatis',
          relocate: 'Relokasi Torrent saat kategori berubah',
          defaultSavePath: 'Path Simpan Default',
          keepIncompleteIn: 'Simpan yang torrent belum selesai di:',
          autoEnabled: 'Nyalakan Autorun:',
          autorunProgram: 'Program Autorun',
          supportParamTitle: 'Parameter yang didukung (case sensitive):',
          supportParamN: '%N: Nama Torrent ',
          supportParamL: '%L: Kategori',
          supportParamG: '%G: Tag (dipisahkan dengan koma)',
          supportParamF: '%F: Path konten (sama dengan path root untuk torrent dengan banyak file)',
          supportParamR: '%R: Path root (path subdirektori torrent pertama)',
          supportParamD: '%D: Path simpan',
          supportParamC: '%C: Jumlah file',
          supportParamZ: '%Z: Ukuran torrent (bytes)',
          supportParamT: '%T: Tracker saat ini',
          supportParamI: '%I: Info hash'
        }
      },
      pageConnection: {
        subHeader: 'Batas Koneksi',
        globalMaxConnection: 'Jumlah maksimum koneksi global',
        perTorrentMaxConnection: 'Jumlah maksimum koneksi per torrent',
        globalMaxUploadSlots: 'Jumlah maksimum slot unggahan global',
        perTorrentMaxUploadSlots: 'Jumlah maksimum slot unggahan per torrent',
        proxySubHeader: 'Server Proxy',
        proxyPeerConnections: 'Gunakan proxy untuk koneksi peer',
        proxyTorrentOnly: 'Gunakan proxy hanya untuk torrent',
        proxyAuth: 'Autentikasi'
      },
      pageBittorrent: {
        subHeaderPrivacy: 'Privasi',
        enableDHT: 'Aktifkan DHT (jaringan terdesentralisasi) untuk menemukan banyak peer',
        enablePeX: 'Aktifkan Peer Exchange (PeX) untuk menemukan banyak peer',
        enableLPD: 'Aktifkan Local Peer Discovery untuk menemukan banyak peer',
        enableAnonymous: 'Aktifkan mode anonymous',
        torrentQueue: 'Antrean Torrent',
        maxActiveDownload: 'Maksimum unduhan aktif',
        maxActiveUpload: 'Maksimum unggahan aktif',
        maxActiveTorrent: 'Maksimum torrent aktif',
        excludeSlowTorrent: 'Jangan tampilkan torrent lambat pada batas tersebut',
        downloadRateLimit: 'Batas kecepatan unduh KiB/s',
        uploadRateLimit: 'Batas kecepatan unggah KiB/s',
        torrentInactivityTimer: 'Pengatur waktu torrent tidak aktif',
        subHeaderSeedLimits: 'Batas Seed',
        whenRatioReaches: 'Saat rasio mencapai',
        whenSeedingTimeReaches: 'Ketika waktu seeding mencapai',
        maxRatioPauseTorrent: 'Jeda torrent',
        maxRatioRemoveTorrent: 'Hapus torrent',
        maxRatioRemoveTorrentAndFiles: 'Hapus torrent beserta file',
        maxRatioTorrentSuperseeding: 'Aktifkan torrent super seeding'
      },
      pageRss: {
        tabName: {
          general: 'Umum',
          feeds: 'Feed',
          rules: 'Aturan'
        },
        pageRules: {
          rules: 'Aturan',
          btnCreateNew: 'Buat Aturan'
        },
        pageFeeds: {
          feeds: 'Feed',
          btnCreateNew: 'Tambah feed'
        },
        pageGeneral: {
          rssAutoProcessing: 'Pembaca RSS',
          rssAutoDownloader: 'Pengunduh Otomatis RSS Torrent',
          input: {
            enableRssAutoDownload: 'Aktifkan unduh otomatis RSS torrent',
            enableRssProcessing: 'Aktifkan pengambilan feed RSS',
            feedsRefreshInterval: 'Selang waktu refresh feed',
            feedsMaxArticles: 'Jumlah maksimum artikel per feed'
          }
        }
      },
      pageWebUI: {
        useAlternativeWebUI: 'Gunakan WebUI Alternatif',
        filesLocation: 'Lokasi file',
        webUserInterface: 'Web User Interface (Remote Control)',
        ipAddress: 'Alamat IP:',
        port: 'Port',
        authentication: 'Autentikasi',
        username: 'Nama Pengguna',
        password: 'Kata Sandi',
        maxAttempts: 'Percobaan Maks.',
        banDuration: 'Durasi Ban (detik)',
        sessionTimeout: 'Waktu sesi (detik)',
        bypassAuthenticationForClientsOnLocalhost: 'Lewati autentikasi untuk klien pada localhost',
        bypassAuthenticationForClientsInWhitelisted: 'Lewati autentikasi untuk klien pada whitelist subnet IP',
        whiteListExample: 'Contoh: 172.17.32.0/24, fdff:ffff:c8::/40'
      },
      pageTagsAndCategories: {
        btnCreateNew: 'Buat baru',
        subHeaderTags: 'Tag Tersedia:',
        subHeaderCategories: 'Kategori Tersedia:'
      }
    },
    shareLimit: {
      input: {
        globalLimit: 'Gunakan batas global',
        unlimited: 'Tidak terbatas'
      },
      limitRatio: 'Batas Rasio',
      titleDuration: 'Durasi',
      titleRatio: 'Rasio'
    },
    newCategory: {
      categoryName: 'Nama kategori',
      Path: 'Path',
      tipOnNoName: 'Nama kategori diperlukan',
      tipOnNameTooLong: 'Nama kategori harus kurang dari 15 karakter',
      tipOnNoPath: 'Path is required',
      TipOnPathTooLong: 'Path harus kurang dari 40 karakter'
    },
    newTag: {
      createNewTag: 'Buat Tag Baru',
      tagName: 'Nama tag'
    },
    detail: {
      title: 'Detail Torrent',
      tabTitleInfo: 'Info',
      tabTitleTrackers: 'Tracker',
      tabTitlePeers: 'Peer',
      tabTitleContent: 'Konten',
      tabTitleTagsCategories: 'Tag & Kategori',
      pageInfo: {
        pieceStates: 'Progres',
        torrentTitle: 'Judul torrent',
        hash: 'Hash',
        ratio: 'Rasio',
        downloadSpeed: 'Kec. Unduh',
        uploadSpeed: 'Kec. Unggah',
        eta: 'Estimasi',
        peers: 'Peer',
        seeds: 'Seed',
        status: 'Status',
        trackers: 'Tracker',
        createdBy: 'Dibuat Oleh',
        firstLastPiecePriority: 'Prio. Bag. Pertama/Akhir',
        sequentialDownload: 'Unduhan Sekuensial',
        autoTMM: 'TMM Oto.',
        shareRatioLimit: 'Batas Rasio Berbagi',
        shareTimeLimit: 'Batas Waktu Berbagi (menit)',
        downloadLimit: 'Batas Unggah',
        uploadLimit: 'Batas Unduh'
      },
      pagePeers: {
        ip: 'IP',
        connection: 'Koneksi',
        flags: 'Bendera',
        client: 'Klien',
        progress: 'Progres',
        downloadSpeed: 'Kecepatan Unduh',
        downloaded: 'Terunduh',
        upSpeed: 'Kecepatan Unggah',
        uploaded: 'Terunggah',
        relevance: 'Relevansi',
        files: 'File'
      },
      pageTagsAndCategories: {
        subHeaderTag: 'Tag Tersedia:',
        subHeaderCategories: 'Kategori Tersedia:'
      },
      pageTrackers: {
        url: 'URL',
        status: 'Status',
        peers: 'Peer',
        seeds: 'Seed',
        leeches: 'Leeches',
        downloaded: 'Terunduh',
        message: 'Pesan'
      }
    },
    add: {
      title: 'Tambah Torrent',
      selectFiles: 'Pilih file',
      urlHint: 'satu link per baris',
      downloadDirectory: 'Direktori Unduhan',
      starttorrent: 'Mulai torrent',
      skipHashCheck: 'Lewati cek hash',
      createSubfolder: 'Buat subfolder',
      automaticTorrentManagement: 'Manajemen Torrent Otomatis',
      dropHereForAdd: 'Jatuhkan di sini untuk menambah',
      oneOrMoreFilesInvalidTorrent: 'Satu atau lebih file bukan torrent yang valid'
    },
    changeLocation: {
      title: 'Ubah Lokasi',
      torrentName: 'Nama Torrent'
    },
    rename: {
      title: 'Ubah Nama',
      torrentName: 'Nama Torrent'
    },
    sort: {
      title: 'Sortir Torrent',
      reverse: 'Terbalik',
      sortBy: {
        availability: 'Ketersediaan',
        category: 'Kategori',
        completed: 'Selesai',
        downloaded: 'Terunduh',
        ETA: 'Estimasi',
        name: 'Nama',
        peers: 'Peer',
        priority: 'Prioritas',
        progress: 'Progres',
        ratio: 'Rasio',
        size: 'Ukuran',
        state: 'Status',
        uploaded: 'Terunggah',
        addedOn: 'Ditambahkan Pada',
        downloadSpeed: 'Kec. Unduh',
        timeActive: 'Waktu aktif',
        uploadSpeed: 'Kec. Unggah'
      }
    },
    speedLimit: {
      speedLimit: 'Batas Kec.'
    },
    delete: {
      check: 'Dan hapus berkas dari penyimpanan'
    }
  },

  /** Toast */
  toast: {
    loginSuccess: 'Berhasil masuk! 🎉',
    loginFailed: 'Gagal masuk 😕',
    settingsSaved: 'Pengaturan sukses disimpan!',
    categorySaved: 'Kategori sukses diubah!',
    feedSaved: 'Feed berhasil disimpan!',
    ruleSaved: 'Rule disimpan!'
  },

  /** RightClick **/
  rightClick: {
    resume: 'lanjutkan',
    forceResume: 'paksa lanjutkan',
    advanced: {
      advanced: 'lebih lanjut',
      changeLocation: 'ubah lokasi',
      rename: 'ubah nama',
      forceRecheck: 'Paksa periksa ulang',
      forceReannounce: 'Paksa umumkan ulang',
      sequentialDownload: 'Unduh Sekuensial',
      firstLastPriority: 'Prioritas Pertama/Terakhir',
      automaticTorrentManagement: 'Manajemen Torrent Otomatis'
    },
    prio: {
      prio: 'atur prioritas',
      top: 'atas',
      bottom: 'bawah',
      increase: 'naikkan',
      decrease: 'turunkan'
    },
    category: 'atur kategori',
    limit: 'atur batas',
    copy: 'salin',
    info: 'tampilkan info'
  }
}

export default locale
