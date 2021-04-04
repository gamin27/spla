<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <div>
      <img src="https://pbs.twimg.com/profile_images/1323753389654618112/mX1CvRms_400x400.jpg" alt="Aizutowai" />
    </div>
    <form>
      <label>First Name :</label>
      <input type="text" id="fName" />
      <label>Last Name :</label>
      <input type="text" id="lName" />
      <!-- set button onClick method to call function we defined passing input values as parameters -->
      <button type="button" onclick="callAPI(document.getElementById('fName').value,document.getElementById('lName').value)">
        Call API
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { DataStore } from '@aws-amplify/datastore'
import { Todo } from '@/models'

export default defineComponent({
  name: 'about',
  setup() {
    const message = ref('This is an about Aizutowai🍮')
    const createTodo = async () => {
      await DataStore.save(
        new Todo({
          name: 'Lorem ipsum dolor sit amet',
          description: 'Lorem ipsum dolor sit amet',
        }),
      )
    }
    const callAPI = (firstName, lastName) => {
      // instantiate a headers object
      var myHeaders = new Headers()
      // add content type header to object
      myHeaders.append('Content-Type', 'application/json')
      // using built in JSON utility package turn object to string and store in a variable
      var raw = JSON.stringify({ firstName: firstName, lastName: lastName })
      // create a JSON object with parameters for API call and store in a variable
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }
      // make API call with parameters and use promises to get response
      fetch('YOUR-API-INVOKE-URL', requestOptions)
        .then((response) => response.text())
        .then((result) => alert(JSON.parse(result).body))
        .catch((error) => console.log('error', error))
    }
    return { message, callAPI }
  },
})
</script>

<style>
body {
  background-color: #232f3e;
}
label,
button {
  color: #ff9900;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-left: 40px;
}
input {
  color: #232f3e;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-left: 20px;
}
</style>
