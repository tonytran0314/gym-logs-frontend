<script setup>
  import CloseButton from '@/components/modals/CloseButton.vue'
</script>

<template>
    <div class="inner">
      <h2>This is a modal window!</h2>
      <p>You have done such great work! Congratulations on reaching this step!</p>
      <CloseButton />
    </div>
</template>
  
  
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.inner {
  background-color: white;
  padding: 1rem;
  padding-top: 3rem;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  position: relative;
}

.inner > h2 {
  font-size: 3rem;
  font-weight: bold;
}

.inner > p {
  font-size: 1.8rem;
  font-weight: 300;
}

.inner > button {
  position: absolute;
  top: 3%;
  right: 2%;
  cursor: pointer;
}
</style>