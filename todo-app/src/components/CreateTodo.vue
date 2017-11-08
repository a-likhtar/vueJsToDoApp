<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Id</label>
            <input v-model="idText" type='text' ref='title' defaultValue="">
          </div>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text' ref='project' defaultValue="">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm()">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idText: 1,
      titleText: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.idText > 0 && this.titleText.length > 0) {
        const id = Number(this.idText);
        const title = this.titleText;
        this.$emit('add-todo', {
          id,
          title,
          completed: false,
        });
        this.idText = '';
        this.titleText = '';
      }
      this.isCreating = false;
    },
  },
};
</script>