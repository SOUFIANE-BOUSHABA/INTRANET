<template>
    <div class="pr-20 mt-10">
      <form class="mt-4">
        <!-- Photo de L'actualité -->
        <div class="mb-4">
          <label for="photo" class="block text-sm font-medium text-gray-700 dark:text-white">
            Photo de L'actualité
          </label>
          <input type="file" name="photo" id="photo" class="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
  
        <!-- Référence de Photo (Privacy) -->
        <div class="mb-4">
          <label for="reference" class="block text-sm font-medium text-gray-700 dark:text-white">
            Référence de Photo (Privacy)
          </label>
          <input type="text" name="reference" id="reference" class="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
  
        <!-- Titre de L'actualité -->
        <div class="mb-4">
          <label for="titre" class="block text-sm font-medium text-gray-700 dark:text-white">
            Titre de L'actualité
          </label>
          <input type="text" name="titre" id="titre" class="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
  
        <!-- Auteur -->
        <div class="mb-4">
          <label for="auteur" class="block text-sm font-medium text-gray-700 dark:text-white">
            Auteur
          </label>
          <input type="text" name="auteur" id="auteur" class="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
  
        <!-- Introduction -->
        <div class="mb-4">
          <label for="introduction" class="block text-sm font-medium text-gray-700 dark:text-white">
            Introduction
          </label>
          <textarea name="introduction" id="introduction" rows="4" class="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
        </div>
  
        <!-- Paragraph 1 -->
        <div class="mb-4">
          <label for="paragraph1" class="block text-sm font-medium text-gray-700 dark:text-white">
            Paragraph 1
          </label>
          <textarea name="paragraph1" id="paragraph1" rows="4" class="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
        </div>
  
        <!-- Conclusion -->
        <div class="mb-4">
          <label for="conclusion" class="block text-sm font-medium text-gray-700 dark:text-white">
            Conclusion
          </label>
          <textarea name="conclusion" id="conclusion" rows="4" class="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
        </div>
  
        <div class="flex justify-end">
          <button
            type="button"
            class="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
          >
            Quitter
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            Crée une admin
          </button>
        </div>
      </form>
    </div>
  </template>
  