<script setup>
import RecordingDialog from '.././components/RecordingDialog.vue';
import Sidebar from '.././components/Sidebar.vue'
import videoData from './../assets/sample.json'
import { ref } from 'vue';
let dialogActive = ref(false)

const data = ref([])
const loading = ref(false)

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function fetchData () {
  loading.value = true
  try {
    const response = await resolveAfter2Seconds(videoData)
    console.log(response)
    data.value = response
  } catch (error) {
    alert('Something Went Wrong')
    console.log(error)
  } finally{
    loading.value = false
  }
}
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

            <button :class="[loading ? 'btn-disabled' : '']"  @click="fetchData" class="btn centered btn-primary">
              <span class="material-symbols-outlined">videocam</span>
              New Request
            </button>

            <button :class="[loading ? 'btn-disabled' : '']" class="btn centered btn-alert" @click="dialogActive = true">
              <div class="rec centered flex">
                REC
              </div>
              Start Recording
            </button>
          </div>
        </div>
      </section>

      <section>
        <table v-if="data.length" class="recordings">
          <tr>
            <th>Recordings</th>
            <th>Title</th>
            <th>Views</th>
            <th>Size</th>
            <th>Last Modified</th>
            <th></th>
          </tr>
          <tr v-for="(item, i) in data" :key="i">
            <td>
              <div class="table__video">
                <img :src="item.video" width="120px" height="40px" :alt="item.title">
                <span>{{item.duration}}</span>
              </div>
            </td>
            <td>
              <h4 class="text-body text--title">{{item.title}}</h4>
              <p class="text-sm text--primary">{{item.description}}</p>
            </td>
            <td class="text-md text--title">{{item.views}}</td>
            <td class="text-md text--title">{{item.size}}</td>
            <td class="text-md text--title">{{item.date}}</td>
            <td>
              <span class="material-symbols-outlined mt-2">more_horiz</span>
            </td>
          </tr>
        </table>
        
        <div v-else class="empty__state">
          <div class="empty__state-text">
            <h2>Say hello to the world!</h2>
            <p class="text--link text-sm">Record your first video/audio and share it what your team, friends, followers and customers.</p>
          </div>

            <div class="flex centered">
              <button :class="[loading ? 'btn-disabled' : '']" class="btn centered btn-alert" @click="dialogActive = true">
                <div class="rec centered flex">
                  REC
                </div>
                Start Recording
              </button>
              <button :class="[loading ? 'btn-disabled' : '']" @click="fetchData" class="btn centered btn-primary">
                <span class="material-symbols-outlined">videocam</span>
                New Request
              </button>
            </div>
        </div>
      </section>
    </article>
  </main>

</template>

