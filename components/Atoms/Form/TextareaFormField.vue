<template>
  <div>
    <fieldset>
      <label :for="name">
        {{ label }}
      </label>
      <div>
        <textarea
          :id="name"
          v-model="value"
          v-bind="$props"
          :class="{
            'error': errors,
          }"
          @input="$emit('input', value);"
          @keydown="$emit('keydown')"
        />
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
  name: 'TextareaFormField',
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
    required: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: String,
      default: '6',
    },
  },
  data() {
    return {
      value: '',
    };
  },
}
</script>
