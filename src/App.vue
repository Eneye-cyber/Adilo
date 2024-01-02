<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Header></Header>
  <Sidebar />
  <main class="main">
    <article>
      <section>
        <div class="w-full flex item-center">
          <p>Snapbyte</p>
          <p>My Recordings</p>
        </div>
        <div class="flex item-center">
          <div class="flex item-center">
            <h2>My Recordings</h2>
            <h2>25</h2>
          </div>

          <div class="flex item-center">
            <button class="btn centered btn-outline">
              <span class="material-symbols-outlined rotate">sync_alt</span>
              By Date
            </button>

            <button class="btn centered btn-outline">
              <span class="material-symbols-outlined"> filter_alt </span>
              Add filter
              <span class="material-symbols-outlined"> expand_more </span>
            </button>

            <button class="btn centered btn-primary">
              <span class="material-symbols-outlined">videocam</span>
              New Request
            </button>

            <button class="btn centered btn-alert">
              <div class="rec centered flex">
                REC
              </div>
              New Request
            </button>
          </div>
        </div>
      </section>

      <section>
        <table class="recordings">
          <tr>
            <th>Recordings</th>
            <th>Title</th>
            <th>Views</th>
            <th>Size</th>
            <th>Last Modified</th>
            <th></th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>
              <h4>Getting it right the first time</h4>
              <p>The Video description is shown here if the user has added it.</p>
            </td>
            <td>324</td>
            <td>923KB</td>
            <td>3 months ago</td>
          </tr>
        </table>
      </section>
    </article>
  </main>
</template>

