<template>
  <div class="flex mt-8 items-center flex-col">
  <h3 class="text-2xl font-extrabold"><span class="first">  DEPARTEMENT</span><span class="second"> TECHNIQUE </span></h3>
    <div class="flex mt-8">
      <router-link to="" exact active-class="active-link">
      <div class="parent overlay1 hover-zoom mx-4 relative w-96 h-64 flex flex-col justify-center items-center">
        <img src="@/assets/Support Technique.jpg" alt="Image 1" class="w-full h-full object-cover absolute inset-0 z-10">
        <div class="overlay-content p-4 text-center relative z-20">
          <h3 class="mt-2 text-lg text-slate-100 font-extrabold">Support Technique</h3>
        </div>
      </div>
      </router-link>
      <router-link to="FixErrors/ListDesRapport" exact active-class="active-link">
      <div class="parent overlay hover-zoom mx-4 relative w-96 h-64 flex flex-col justify-center items-center">
        <img src="@/assets/Fix Errors.jpg" alt="Image 2" class="w-full h-full object-cover absolute inset-0 z-10">
        <div class="overlay-content p-4 text-center relative z-20">
          <h3 class="mt-2 text-lg text-slate-100 font-extrabold">Fix Errors</h3>
        </div>
      </div>
    </router-link>
    </div>
  </div>
</template>

<style scoped>
.parent {
  overflow: hidden;
  cursor: pointer;
  width: 300px;
}

body {
  overflow: hidden;
}

img {
  transition: 0.3s ease;
}

.hover-zoom:hover img {
  transform: scale(1.1);
}

.overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-color: #243464;
  z-index: 15;
}

.overlay1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-color: #cc1c24;
  z-index: 15;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.first{
    color:#cc1c24;
}
.second{
    color:#243464;
}
</style>
