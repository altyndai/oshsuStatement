import {  defineStore } from 'pinia'
import { MenuItem } from "primevue/menuitem";
import { ref, Ref } from "vue";

export const useBreadcrumbStore = defineStore('breadcrumb', ()=>{
  const breadcrumb: Ref<MenuItem[]> = ref([]);
  const home = ref({
    label: 'Главная',
    to: '/'
  });
  return {
    breadcrumb,home
  };
})
