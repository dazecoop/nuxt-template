<template>
  <div class="p-8">
    <div class="text-center">
      <h1>
        {{ $t(`${locale}.intro.title`, { siteName: $siteName }) }}
      </h1>
      <p class="text-lg font-light">
        {{ $t(`${locale}.intro.p-1`) }}
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

    <hr class="my-8">

    <form class="max-w-md mx-auto">
      <h2>Form example</h2>
      <text-form-field
        v-model="form.example_1"
        name="example-1"
        label="Regular input"
        placeholder="Input placeholder"
        type="text"
      />
      <text-form-field
        v-model="form.example_2"
        name="example-2"
        label="Has an error"
        placeholder="Input with error"
        errors="Please enter a value"
      />
      <text-form-field
        v-model="form.example_3"
        name="example-3"
        label="Input with prepend"
        placeholder="Input with prepend"
        prepend="icon-user-secret"
      />
      <textarea-form-field
        v-model="form.example_4"
        name="example-4"
        label="Textarea"
        placeholder="Textarea"
        rows="4"
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
      <pre class="bg-gray-100 p-4 text-sm text-gray-500">{{ form }}</pre>
    </form>

    <hr class="my-8">

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
export default {
  name: 'Index',
  data() {
    return {
      locale: 'pages.index',
      form: {},
    };
  },
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
  },
}
</script>
