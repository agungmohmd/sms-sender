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
          <input type="text" class="form-control" id="from">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-2">
          <label for="to">To :</label>
        </div>
        <div class="col-md-8">
          <input type="text" class="form-control" id="to">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-2">
          <label for="message">Message :</label>
        </div>
        <div class="col-md-8">
          <textarea class="form-control" name="message" id="message" rows="10"></textarea>
        </div>
      </div>
      <br>
      <div class="row">
        <button type="button" class="btn btn-primary float-right">Send SMS</button>
      </div>
    </form>
  </div>
</template>

<script>

</script>
