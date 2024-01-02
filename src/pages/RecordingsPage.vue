<script setup>
import RecordingDialog from '.././components/RecordingDialog.vue';
import Sidebar from '.././components/Sidebar.vue'
import { ref } from 'vue';
let dialogActive = ref(false)

</script>

<template>
  <Sidebar />
  <RecordingDialog @close="dialogActive = false" v-if="dialogActive" />
  <main class="main">
    <article>
      <section>
        <div class="w-full flex item-center text-body text--link">
          <p>Snapbyte</p>
          <span class="material-symbols-outlined rotate"> expand_more </span>
          <p>My Recordings</p>
        </div>
        <div class="article__header flex item-center">
          <div class="article__title flex item-center">
            <h2 class="text-xl text--black">My Recordings</h2>
            <h2 class="text-xl text--link">25</h2>
          </div>

          <div class="flex item-center article__buttons">
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

            <button class="btn centered btn-alert" @click="dialogActive = true">
              <div class="rec centered flex">
                REC
              </div>
              Start Recording
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
            <td>
              <div class="table__video">
                <span>00:14</span>
              </div>
            </td>
            <td>
              <h4 class="text-body text--title">Getting it right the first time</h4>
              <p class="text-sm text--primary">The Video description is shown here if the user has added it.</p>
            </td>
            <td class="text-md text--title">324</td>
            <td class="text-md text--title">923KB</td>
            <td class="text-md text--title">3 months ago</td>
          </tr>

          <tr>
            <td>
              <div class="table__video">
                <span>00:14</span>
              </div>
            </td>
            <td>
              <h4 class="text-body text--title">Getting it right the first time</h4>
              <p class="text-sm text--primary">The Video description is shown here if the user has added it.</p>
            </td>
            <td class="text-md text--title">324</td>
            <td class="text-md text--title">923KB</td>
            <td class="text-md text--title">3 months ago</td>
            <td>
              <span class="material-symbols-outlined mt-2">more_horiz</span>
            </td>
          </tr>
        </table>
      </section>
    </article>
  </main>

</template>

