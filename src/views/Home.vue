<template>
  <div class="container">
    <div>
      <h1 class="text-center">Send SMS Form</h1>
    </div>
    <form id="smsForm">
      <div class="row">
        <div class="col-md-2">
          <label for="from">From :</label>
        </div>
        <div class="col-md-8">
          <input
            type="text"
            class="form-control"
            id="from"
            v-model="data.from"
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-2">
          <label for="to">To :</label>
        </div>
        <div class="col-md-8">
          <input type="text" class="form-control" id="to" v-model="data.to" />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-2">
          <label for="message">Message :</label>
        </div>
        <div class="col-md-8">
          <textarea
            class="form-control"
            name="message"
            id="message"
            rows="10"
            v-model="data.message"
          ></textarea>
        </div>
      </div>
      <br />
      <div class="row">
        <button
          type="button"
          class="btn btn-primary float-right"
          v-on:click="sendSMS"
        >
          Send SMS
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import api from "../api";
// import vue from 'vue'

export default {
  data() {
    return {
      data: {}
    };
  },

  mounted() {
    // this.getAllSMS();
  },
  methods: {
    sendSMS() {
      // console.log(this.data)
      let data = {
        from: this.data.from,
        to: this.data.to,
        message: this.data.message,
        sended_on: new Date()
          .toJSON()
          .slice(0, 19)
          .replace("T", " ")
      };
      console.log(data);
      api.request("post", "/sms", data).then(res => {
        console.log(res);
        alert(res.data.message);
      });
    }
  },

  getAllSMS() {
    api.request("get", "/sms").then(res => {
      console.log(res);
    });
  }
};
</script>
