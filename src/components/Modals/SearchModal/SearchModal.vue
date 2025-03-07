<template>
  <v-dialog
    v-model="dialog"
    scrollable
    :width="dialogWidth"
    :fullscreen="phoneLayout"
    :style="{ height: phoneLayout ? '100vh' : '' }"
  >
    <v-card :style="{ height: phoneLayout ? '100vh' : '' }">
      <v-card-text class="pa-0">
        <v-form
          ref="form"
          v-model="searchForm.valid"
        >
          <v-flex row class="my-1 py-1 px-2 mx-auto">
            <v-col class="pa-0" cols="8">
              <v-text-field
                v-model="searchForm.pattern"
                :prepend-inner-icon="mdiMagnify"
                label="Search"
                :rules="[v => !!v || 'Search term is required']"
                clearable
                style="width: 95%;"
                autofocus
                @keydown.enter.prevent="$refs.searchButton.click"
              />
            </v-col>
            <v-col class="pa-0 mt-2" cols="3">
              <v-btn
                ref="searchButton"
                class="mt-2 mx-0"
                :disabled="!searchForm.valid"
                :color="loading ? 'warning' : 'primary'"
                @click="loading ? stopSearch() : startSearch()"
              >
                {{ loading ? $t('modals.search.btnStopSearch') : $t('modals.search.btnStartSearch') }}
              </v-btn>
            </v-col>
          </v-flex>
        </v-form>
        <v-data-table
          id="searchTable"
          :headers="grid.headers"
          :items="search.results"
          :items-per-page="10"
          :loading="loading"
          :style="{ maxHeight: '60vh'}"
          :search="filter"
          :custom-filter="customFilter"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :mobile-breakpoint="0"
        >
          <template #top>
            <v-text-field
              ref="filterRef"
              v-model="filter"
              label="Filter"
              class="mx-4"
            />
          </template>
          <template #[`item.fileName`]="{ item }">
            <a
              :href="item.descrLink"
              target="_blank"
              v-text="item.fileName"
            />
          </template>
          <template #[`item.fileSize`]="{ item }">
            {{ item.fileSize | formatSize }}
          </template>
          <template #[`item.actions`]="{ item }">
            <v-icon @click="downloadTorrent(item)">
              {{ mdiDownload }}
            </v-icon>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions>
        <PluginManager />
      </v-card-actions>
      <v-fab-transition v-if="phoneLayout">
        <v-btn
          color="red"
          dark
          absolute
          bottom
          right
          @click="close"
        >
          <v-icon>{{ mdiClose }}</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import qbit from '@/services/qbit'
import { Modal, FullScreenModal, General } from '@/mixins'
import PluginManager from './PluginManager'
import { mdiClose, mdiMagnify, mdiDownload } from '@mdi/js'

export default {
  name: 'SearchModal',
  components: { PluginManager },
  mixins: [Modal, FullScreenModal, General],
  data() {
    return {
      search: {
        id: null,
        status: null,
        interval: null,
        results: []
      },
      loading: false,
      grid: {
        headers: [
          { text: this.$i18n.t('modals.search.columnTitle.name'), value: 'fileName' },
          { text: this.$i18n.t('modals.search.columnTitle.size'), value: 'fileSize' },
          { text: this.$i18n.t('modals.search.columnTitle.seeds'), value: 'nbSeeders' },
          { text: this.$i18n.t('modals.search.columnTitle.peers'), value: 'nbLeechers' },
          { text: this.$i18n.t('modals.search.columnTitle.search_engine'), value: 'siteUrl' },
          { text: this.$i18n.t('modals.search.columnTitle.action'), value: 'actions', sortable: false }
        ]
      },
      searchForm: {
        valid: false,
        pattern: ''
      },
      filter: '',
      mdiClose, mdiMagnify, mdiDownload,
      sortBy: 'nbSeeders',
      sortDesc: true
    }
  },
  computed: {
    ...mapGetters(['getSearchPlugins']),
    dialogWidth() {
      return this.phoneLayout ? '100%' : '70%'
    },
    enabledSearchPlugins() {
      return this.getSearchPlugins().filter(p => p.enabled)
    }
  },
  created() {
    this.$store.commit('FETCH_SEARCH_PLUGINS')
  },
  methods: {
    async startSearch() {
      if (this.searchForm.pattern.length && !this.search.interval) {
        this.loading = true
        this.search.status = 'Running'
        this.search.results = []
        this.$refs.filterRef.reset()
        const data = await qbit.startSearch(
          this.searchForm.pattern,
          this.enabledSearchPlugins.map(p => p.name)
        )
        this.search.id = data.id
        await this.getStatus()
        this.search.interval = setInterval(async () => {
          const status = await this.getStatus()
          if (status === 'Stopped') {
            clearInterval(this.search.interval)
            this.search.interval = null
          }
          await this.getResults()
        }, 500)
      }
    },
    async getStatus() {
      if (this.search.id) {
        const data = await qbit.getSearchStatus(this.search.id)

        return (this.search.status = data[0].status)
      }
    },
    async getResults() {
      const data = await qbit.getSearchResults(this.search.id)
      this.search.results = data.results
    },
    downloadTorrent(item) {
      this.createModal('addModal', { initialMagnet: item.fileUrl })
    },
    stopSearch() {
      qbit.stopSearch(this.search.id)
      this.loading = false
    },
    close() {
      this.dialog = false
    },
    customFilter(value, search, item) {
      const searchArr = search.trim().toLowerCase().split(' ')
      
      return value != null &&
        search != null &&
        typeof value === 'string' &&
        searchArr.every(i => (value.toString().toLowerCase().indexOf(i) !== -1))
    }
  }
}
</script>

<style lang="scss">
#searchTable {
  .v-data-footer {
    justify-content: center;
  }

  .v-data-footer__pagination {
    margin: 0 8px;
  }

  .v-select__slot {
    width: 4em;
    min-width: 100%;
  }
}
</style>
