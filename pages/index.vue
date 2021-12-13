<template>
  <!-- eslint-disable max-len -->
  <div class="p-8">
    <div class="text-center">
      <h1>
        Welcome
      </h1>
      <p class="text-lg font-light">
        This is just a dummy Nuxt template to build future projects on.
      </p>
      <p class="text-sm">
        <a
          :href="$siteDomain"
          class="hover:text-blue-500 p-2"
        >
          <font-awesome-icon
            :icon="['fab', 'github']"
            class="mr-1"
          />
          {{ $siteDomain }}
        </a>
      </p>
    </div>

    <hr class="my-8" />

    <form class="max-w-md mx-auto">
      <h2>Form example</h2>
      <text-form-field
        name="example-1"
        label="Regular input"
        placeholder="Input placeholder"
        type="text"
      />
      <text-form-field
        name="example-2"
        label="Has an error"
        placeholder="Input with error"
        errors="Please enter a value"
      />
      <text-form-field
        name="example-3"
        label="Input with prepend"
        placeholder="Input with prepend"
        prepend="icon-user-secret"
      />
      <fieldset>
        <div class="grid sm:grid-cols-3 gap-4">
          <button>
            Submit
          </button>
          <button
            class="loading"
            disabled
          >
            Loading
          </button>
        </div>
      </fieldset>
    </form>

    <hr class="my-8" />

    <div class="max-w-md mx-auto">
      <h2>Table example</h2>
      <table class="table stripe">
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Val 1</td>
            <td>Val 2</td>
          </tr>
          <tr>
            <td>Val 1.1</td>
            <td>Val 2.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TextFormField from '../components/Atoms/Form/TextFormField.vue';

export default {
  name: 'Index',
  components: {
    TextFormField,
  },
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
}
</script>
