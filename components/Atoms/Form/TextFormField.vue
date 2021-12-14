<template>
  <div>
    <fieldset>
      <label :for="name">
        {{ label }}
      </label>
      <div
        :class="{
          'prepend': prepend,
        }"
      >
        <span v-if="prepend">
          <template v-if="prepend.startsWith('icon-')">
            <font-awesome-icon
              :icon="[
                prepend.startsWith('icon-fab') ? 'fab' : 'fa',
                prepend.startsWith('icon-fab') ? prepend.substring(9) : prepend.substring(5)
              ]"
            />
          </template>
          <template v-else>
            {{ prepend }}
          </template>
        </span>
        <input
          :id="name"
          v-model="value"
          v-bind="$props"
          :class="{
            'error': errors,
          }"
          @input="$emit('input', value)"
          @keydown="$emit('keydown')"
        >
      </div>

      <div
        v-if="errors"
        class="alert error mt-1"
      >
        {{ errors }}
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'TextFormField',
  components: {
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    errors: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    prepend: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'tel', 'email', 'number', 'password', 'search', 'url'].indexOf(value) !== -1
      },
    },
  },
  data() {
    return {
      value: '',
    };
  },
}
</script>
