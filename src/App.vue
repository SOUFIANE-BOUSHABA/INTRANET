<template>
  <div>
    <header
      class="flex items-center justify-between p-4 px-8 text-dark bg-white shadow-md"
    >
      <div class="flex items-center">
        <router-link to="/"
          ><img src="@/assets/logo.png" alt="Logo" class="w-24 h-12 mr-2"
        /></router-link>
      </div>

      <div class="flex gap-2 items-center">
        <router-link to="/Agenda" class="header-link mx-2" @click="hideDropdown">
          <div class="icon-with-text">
            <font-awesome-icon :icon="['fas', 'calendar']" class="fa-icon" />
            <span class="dollar-icon-contour">20</span>
          </div>
        </router-link>

        <router-link to="" class="header-link mx-2" @click="hideDropdown">
          <div class="icon-with-text">
            <font-awesome-icon :icon="['fas', 'sack-dollar']" class="fa-icon" />
            <span class="dollar-icon-contour">30</span>
          </div>
        </router-link>
        <router-link @click="hideDropdown"
          to="/Contact"
          class="header-link mx-2"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <font-awesome-icon :icon="['fas', 'headset']" class="fa-icon" />
        </router-link>
        <router-link @click="hideDropdown"
          to="/DemandAbs"
          class="header-link mx-2"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <font-awesome-icon :icon="['fas', 'pen-to-square']" class="fa-icon" />
        </router-link>
      </div>

      <div class="flex items-center">
        <div class="relative">
          <div
            ref="userDropdownBtn"
            @click="toggleDropdown"
            class="flex gap-4 border-2 w-16 rounded-full cursor-pointer"
          >
            <img
              src="@/assets/person.png"
              alt="User"
              class="w-8 h-8 rounded-full mr-2 cursor-pointer"
              id="userDropdownBtn"
            />
            <div
              class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
            >
              <svg
                :class="{ 'transform rotate-180': isDropdownOpen }"
                class="h-4 w-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
          <div
            v-if="isDropdownOpen"
            class="absolute droppp right-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg"
            id="userDropdown"
            :class="{ 'slide-in': isDropdownOpen }"
            ref="dropdown"
          >
            <div class="p-4">
              <div class="text-sm mb-2 font-semibold">{{ userName }}</div>
              <div class="text-xs">
                <span class="font-semibold">matricule : </span>
                <span class="text-slate-400">{{ matricule }}</span>
              </div>
            </div>
            <hr class="my-2" />
            <div class="px-4 py-2">
              <router-link to="/profile" class="text-sm">
                <font-awesome-icon :icon="['fas', 'user']" class="fa-icon" />
                Profile
              </router-link>
            </div>
            <hr class="my-2" />
            <div class="px-4 py-2 pb-4">
              <button @click="logout" class="text-sm text-red-500">
                <font-awesome-icon
                  :icon="['fas', 'sign-out-alt']"
                  class="fa-icon"
                />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <router-view @click="hideDropdown" @beforeRouteUpdate="hideDropdown"  />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      userName: "SOUFIANE BOUSHABA",
      matricule: "ABC123",
      currentTime: "",
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    logout() {},
    hideDropdown() {
      this.isDropdownOpen = false;
    },
  },
};
</script>

<style scoped>
*::-webkit-scrollbar {
  display: none;
}
header {
  position: sticky;
  top: 0;
  z-index: 100;
}
.text-custom-icon {
  color: #243464;
  transition: color 0.3s ease;
  cursor: pointer;
}
svg {
  transition: 0.6s ease;
}
.droppp {
  transition: 0.6s ease;
}
.text-custom-icon:hover {
  color: #cc1c24;
}

.header-link {
  position: relative;
  text-decoration: none;
  color: #243464;
  transition: color 0.3s ease;
}

.header-link:hover {
  color: #cc1c24;
}

.header-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #cc1c24;
  transition: width 1s ease;
}

.header-link:hover::after {
  width: 100%;
}
.fa-icon {
  font-size: 22px;
}
.icon-with-text {
  position: relative;
  display: inline-block;
}

.dollar-icon-contour {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px; 
  height: 12px; 
  background: #cc1c24; 
  border-radius: 50%;
  box-sizing: content-box;
  color: white;
  font-size: 8px;
  text-align: center;
  line-height: 12px;
}
</style>
