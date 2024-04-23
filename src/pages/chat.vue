<script setup lang="ts">

</script>

<template>
<div>
  <div class="container">
    <div class="grid align-items-stretch mb-3">
      <div class="col-12 md:col-6">
        <Fieldset class="h-full" legend="Билим берүү ишин лицензиялоо">
          <Textarea style="min-height: 200px" class="w-full" placeholder="Билим берүү ишин лицензиялоо жөнүндө маалыматтар жазылган тексттик талаа"/>
        </Fieldset>
      </div>
      <div class="col-12 md:col-6">
        <Fieldset class="h-full" legend="Билим берүү стандарттарын бекитүү">
          <Textarea style="min-height: 200px" class="w-full" placeholder="Билим берүү стандарттарын бекитүү жөнүндө маалыматтар жазылган тексттик талаа"/>
        </Fieldset>
      </div>
    </div>
    <div class="flex justify-content-end w-full">
      <Button>Жөнөтүү</Button>
    </div>
  </div>
</div>
</template>

<style>
</style>
