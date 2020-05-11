<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ $t('Dashboard.title') }}</h1>
        </div>
      </div>
    </section>
    <div class="columns">
      <div class="column is-9">
        <Loader v-if="loading" />
        <div class="cards" v-else>
          <div class="card has-margin-bottom-7" v-for="project in projects" :key="project.id">
            <div class="card-content">
              <div class="columns is-vcentered">
                <div class="column is-4">
                  <h3 class="is-size-5 has-text-weight-bold">{{ project.name }}</h3>
                </div>
                <div class="column is-3">
                  <div class="tags has-addons">
                    <span class="tag">Client</span>
                    <span class="tag is-primary">{{ project.client.name }}</span>
                  </div>
                </div>
                <div class="column is-2">
                  <span class="has-text-weight-bold">4:23</span>
                </div>
                <div class="column is-3 has-text-right">
                  <div class="dropdown is-hoverable is-right">
                    <div class="dropdown-trigger">
                      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>{{ $t('Base.actions') }}</span>
                        <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                      <div class="dropdown-content">
                        <a href="#" class="dropdown-item">
                          <span>{{ $t('Base.view') }}</span>
                        </a>
                        <a href="#" class="dropdown-item">
                          <span>{{ $t('Base.edit') }}</span>
                        </a>
                        <a href="#" class="dropdown-item has-text-danger">
                          <span>{{ $t('Base.delete') }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-3">Clients</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({}),
  computed: {
    projects() {
      return this.$store.state.projects.projects;
    },
  },
  async mounted() {
    if (this.$route.query.message) {
      const { message, type } = this.$route.query;
      this.$toast.open({
        message: this.$t(message),
        type,
      });
    }
    try {
      await this.$store.dispatch('fetchProjects');
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
