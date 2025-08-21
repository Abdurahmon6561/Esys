<script setup>
import { ref, onMounted } from "vue";

const leftButton = ref(null);
const rightButton = ref(null);
const leftPath = ref(null);
const rightPath = ref(null);

const moveArrow = (button, path, e, isLeft = true) => {
  const rect = e.currentTarget.getBoundingClientRect();
  let y = e.clientY - rect.top;

  // clamp
  y = Math.max(40, Math.min(y, rect.height - 40));
  button.style.top = `${y - 24}px`; // center arrow (48px height)

  // update curve
  const percent = (y / rect.height) * 100;
  if (isLeft) {
    path.setAttribute("d", `M0,0 Q0.6,${percent / 100} 0,1 L0,1 Z`);
  } else {
    path.setAttribute("d", `M1,0 Q0.4,${percent / 100} 1,1 L1,1 Z`);
  }
};

onMounted(() => {
  const leftSide = document.getElementById("leftSide");
  const rightSide = document.getElementById("rightSide");

  // set initial curve to middle
  leftPath.value.setAttribute("d", "M0,0 Q0.6,0.5 0,1 L0,1 Z");
  rightPath.value.setAttribute("d", "M1,0 Q0.4,0.5 1,1 L1,1 Z");

  // enable hover interactions
  leftSide.addEventListener("mousemove", (e) => {
    moveArrow(leftButton.value, leftPath.value, e, true);
  });
  rightSide.addEventListener("mousemove", (e) => {
    moveArrow(rightButton.value, rightPath.value, e, false);
  });
});
</script>

<template>
  <section class="flex items-center justify-center min-h-screen bg-cover bg-center hero rounded-tl-lg rounded-tr-lg"
    style="background-image: url('/images/bg-hero.jpg')">
    <div class="flex justify-between w-full items-center h-screen">
      <!-- left side -->
      <div id="leftSide" class="relative h-[50%] w-28">
        <svg class="absolute inset-0 w-full h-full">
          <defs>
            <clipPath id="clipLeft" clipPathUnits="objectBoundingBox">
              <path ref="leftPath" d="M0,0 Q0.6,0.5 0,1 L0,1 Z" fill="white" />
            </clipPath>
          </defs>
          <rect width="100%" height="100%" fill="white" clip-path="url(#clipLeft)" />
        </svg>
        <button ref="leftButton" class="absolute left-2 top-1/2  text-black text-6xl font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700 rotate-180" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div class="relative z-10 text-center text-white flex-1">
        <h1 class="text-4xl md:text-[72px] font-extrabold leading-tight">
          Цифровые решения,<br />
          которые помогают вашему <br />
          бизнесу расти быстрее
        </h1>

        <div class="mt-8 flex justify-center gap-4">
          <button
            class="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
            Наши проекты
          </button>
          <button
            class="px-6 py-3 bg-transparent border border-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
            Связаться
          </button>
        </div>
      </div>

      <!-- right side -->
      <div id="rightSide" class="relative h-[50%] w-28">
        <svg class="absolute inset-0 w-full h-full">
          <defs>
            <clipPath id="clipRight" clipPathUnits="objectBoundingBox">
              <path ref="rightPath" d="M1,0 Q0.4,0.5 1,1 L1,1 Z" fill="white" />
            </clipPath>
          </defs>
          <rect width="100%" height="100%" fill="white" clip-path="url(#clipRight)" />
        </svg>
        <button ref="rightButton" class="absolute right-2 top-1/2 text-black text-6xl font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.hero {
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}
</style>