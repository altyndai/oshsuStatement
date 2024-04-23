<script setup lang="ts">

</script>

<template>
  <div>
    <div class="container">
      <div class="grid justify-content-end">
        <div class="col-12 sm:col-6 md:col-4">
          <div class="card flex align-items-end flex-column">
            <h4 class="mb-5">ОшМУнун ректору</h4>
            <span class="p-float-label w-full">
          <InputText id="rector" type="text" class="w-full"/>
          <label for="rector">Ректор</label>
        </span>
          </div>
        </div>
      </div>
      <h1 class="text-center">Арыз</h1>
      <div class="card">
        <p class="text-base md:text-lg mb-5 ">Төмөндө көрсөтүлгөн билим берүү ишин жүргүзүүгө лицензия берүүнү суранам.</p>
        <div class="grid">
          <div class="col-12 sm:col-6 lg:col-4">
        <span class="p-float-label mb-4">
          <InputText id="structureName" type="text" class="w-full"/>
          <label for="structureName">Cтруктуранын аталышы</label>
        </span>
            <span class="p-float-label mb-5">
          <InputText id="educationDirectionName" type="text" class="w-full"/>
          <label for="educationDirectionName">Билим берүү багытынын аталышы</label>
        </span>
            <span class="p-float-label">
          <InputText id="educationalProgram" type="text" class="w-full"/>
          <label for="educationalProgram">Билим берүү багытынын программасы (профили)</label>
        </span>
          </div>
        </div>
      </div>
      <div class="card">
        <p class="text-base md:text-lg mb-5 ">Лицензиялануучу билим берүү иши үчүн керектүүлөр көрсөтүлсүн</p>
        <div class="grid mb-4">
          <div class="col-12  lg:col-3">
            <div class="field-checkbox mb-3">
              <Checkbox id="checkOption1" name="option" value="башталгыч кесиптик билим берүү"/>
              <label for="checkOption1">башталгыч кесиптик билим берүү</label>
            </div>
            <div class="field-checkbox mb-3">
              <Checkbox id="checkOption2" name="option" value="орто кесиптик билим берүү"/>
              <label for="checkOption2">орто кесиптик билим берүү</label>
            </div>
            <div class="field-checkbox mb-3">
              <Checkbox id="checkOption3" name="option" value="жогорку кесиптик билим берүү"/>
              <label for="checkOption3">жогорку кесиптик билим берүү</label>
            </div>
            <div class="field-checkbox mb-3">
              <Checkbox id="checkOption4" name="option" value="жогорку окуу жайдан кийинки билим берүү"/>
              <label for="checkOption4">жогорку окуу жайдан кийинки билим берүү</label>
            </div>
            <div class="field-checkbox mb-3">
              <Checkbox id="checkOption5" name="option" value="кошумча кесиптик билим берүү"/>
              <label for="checkOption5">кошумча кесиптик билим берүү</label>
            </div>
            <div class="field-checkbox mb-3">
              <Checkbox id="checkOption6" name="option" value="кесиптик кайра даярдоо"/>
              <label for="checkOption6">кесиптик кайра даярдоо</label>
            </div>
            <div class="field-checkbox mb-3">
              <Checkbox id="checkOption7" name="option" value="квалификацияны жогорулатуу"/>
              <label for="checkOption7">квалификацияны жогорулатуу</label>
            </div>
          </div>
          <div class="col-12  lg:col-9">
            <div class="grid align-items-end mb-4">
              <div class="col-12 lg:col-6 xl:col-4">
                <div class="h-full flex flex-column">
                  <label for="name1" class="mb-2">Билим берүү стандарттарынын реестриндеги профилдин катталган номери</label>
                  <InputText id="name1" type="text" class="w-full mt-auto"/>
                </div>
              </div>

              <div class="col-12 lg:col-6 xl:col-4">
                <div class="h-full flex flex-column">
                  <label for="name2" class="mb-2">Билим берүү  багытынын  шифри</label>
                  <InputText id="name2" type="text" class="w-full mt-auto"/>
                </div>
              </div>

              <div class="col-12 lg:col-6 xl:col-4">
                <div class="h-full flex flex-column">
                  <label for="name3" class="mb-2">Квалификациясы</label>
                  <InputText id="name3" type="text" class="w-full mt-auto"/>
                </div>
              </div>
            </div>
            <div class="grid mb-4">
              <div class="col-12 sm:col-6 md:col-3">
                <div class="field-checkbox mb-3">
                  <Checkbox id="checkOption8" name="option" value="күндүзгү"/>
                  <label for="checkOption8">күндүзгү</label>
                </div>
              </div>
              <div class="col-12 sm:col-6 md:col-3">
                <div class="field-checkbox mb-3">
                  <Checkbox id="checkOption8" name="option" value="сырттан"/>
                  <label for="checkOption8">сырттан</label>
                </div>
              </div>
              <div class="col-12 sm:col-6 md:col-3">
                <div class="field-checkbox mb-3">
                  <Checkbox id="checkOption8" name="option" value="күндүзгү сырттан"/>
                  <label for="checkOption8">күндүзгү сырттан</label>
                </div>
              </div>
              <div class="col-12 sm:col-6 md:col-3">
                <div class="field-checkbox mb-3">
                  <Checkbox id="checkOption8" name="option" value="онлайн"/>
                  <label for="checkOption8">онлайн</label>
                </div>
              </div>
            </div>
            <div class="grid ">
              <div class="col-12 md:col-6">
                <div class="h-full flex flex-column">
                  <label for="name4" class="mb-2">Арыз ээсинин аты-жөнү</label>
                  <InputText id="name4" type="text" class="w-full mt-auto"/>
                </div>
              </div>
              <div class="col-12 md:col-6">
                <div class="h-full flex flex-column">
                  <label for="name5" class="mb-2">Арыз ээсинин электрондук почтасынын дареги</label>
                  <InputText id="name5" type="text" class="w-full mt-auto"/>
                </div>
              </div>
              <div class="col-12 md:col-6">
                <div class="h-full flex flex-column">
                  <label for="name6" class="mb-2">Арыз ээсинин телефон номери</label>
                  <InputText id="name6" type="text" class="w-full mt-auto"/>
                </div>
              </div>
              <div class="col-12 md:col-6">
                <div class="h-full flex flex-column">
                  <label  class="mb-2">Толтурулган күнү</label>
                  <Calendar  class="w-full mt-auto" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <p>Бекитилген негизги жана негизги кесиптик билим берүү программасын pdf жүктөө</p>
        <Button class="mr-3">PDF жүктөө</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-float-label label {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>
