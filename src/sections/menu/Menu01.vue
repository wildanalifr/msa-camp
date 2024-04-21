<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

type LawGraduateStats = {
  basic_monthly_mean: string
  basic_monthly_median: string
  degree: string
  employment_rate_ft_perm: string
  employment_rate_overall: string
  gross_monthly_mean: string
  gross_monthly_median: string
  gross_mthly_25_percentile: string
  gross_mthly_75_percentile: string
  school: string
  university: string
  vault_id: string
  year: string
}

const datas = ref<LawGraduateStats[]>([])

function fetchData() {
  fetch(
    'https://api-production.data.gov.sg/v2/internal/api/datasets/d_3c55210de27fcccda2ed0c63fdd2b352/rows?limit=1000'
  ).then((response) => {
    response.json().then((data) => {
      datas.value = data?.data?.rows
      localStorage.setItem('datas', JSON.stringify(datas.value))
    })
  })
}

const filterYear = ref<string>('')
function filterYearFunc(year: string) {
  if (year !== '') {
    datas.value = datas.value.filter((data) => data?.year?.includes(year))
  } else {
    datas.value = JSON.parse(localStorage.getItem('datas')!)
  }
}

const filterProp = ref<string>('')
function filterFunc(prop: string) {
  datas.value = datas.value.filter(
    (data) =>
      data?.university?.toLowerCase().includes(prop?.toLowerCase()) ||
      data?.degree?.toLowerCase().includes(prop?.toLowerCase()) ||
      data?.school?.toLowerCase().includes(prop?.toLowerCase())
  )
}

watch(filterYear, (newValue, oldValue) => {
  if (newValue) {
    setTimeout(() => {
      filterYearFunc(newValue)
    }, 400)
  }

  if (newValue !== oldValue) {
    datas.value = JSON.parse(localStorage.getItem('datas')!)
  }
})

watch(filterProp, (newValue, oldValue) => {
  if (newValue) {
    setTimeout(() => {
      filterFunc(newValue)
    }, 400)
  }

  if (newValue !== oldValue) {
    datas.value = JSON.parse(localStorage.getItem('datas')!)
  }
})

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div>
    <h4>Data Table</h4>
    <div class="flex justify-end space-x-5">
      <input type="number" placeholder="Filter by Year" v-model="filterYear" />
      <input type="text" placeholder="Filter by Feature" v-model="filterProp" />
    </div>
    <table class="table table-zebra table-xs max-h-80">
      <thead>
        <tr>
          <th>University</th>
          <th>Jurusan</th>
          <th>Per Bulan</th>
          <th>Year</th>
          <th>University</th>
          <th>University</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in datas">
          <td>{{ data.university }}</td>
          <td>
            {{ data?.degree }}
          </td>
          <td>
            {{ data?.basic_monthly_mean }}
            {{ data?.basic_monthly_median }}
          </td>
          <td>
            {{ data?.year }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
