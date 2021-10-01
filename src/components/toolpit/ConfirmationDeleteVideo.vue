<template>

  <button onclick="document.getElementById('id01').style.display='block'">
     {{ $t('delete.btn1') }}
  </button>

  <div id="id01" class="modal">
    <span
      onclick="document.getElementById('id01').style.display='none'"
      class="close"
      title="Close Modal"
      >×</span
    >
    <form class="modal-content" action="/action_page.php">
      <div class="container">
        <p> {{ $t('delete.p') }}</p>

        <div class="clearfix">
          <button
            type="button"
            onclick="document.getElementById('id01').style.display='none'"
            class="cancelbtn"
          >
            {{ $t('delete.btn2') }}
          </button>
          <button
            type="button"
            onclick="document.getElementById('id01').style.display='none'"
            class="deletebtn"
          >
            {{ $t('delete.btn3') }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    // Get the modal
    var modal = document.getElementById("id01");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}
button {
  background-color: crimson;
  color: white;
  /* padding: 3px 0px ; */
  margin: 0px 5px;
  border: none;
  cursor: pointer;
  text-align: center;
  width: 40px;
  opacity: 0.9;
  border-radius: 5px;
  /* float: right; */
  outline: none;
}

button:hover {
  opacity: 1;
}

/* Float cancel and delete buttons and add an equal width */
.cancelbtn,
.deletebtn {
  float: none;
  width: 60px;
}

/* Add a color to the cancel button */
.cancelbtn {
  background-color: #ccc;
  color: black;
}

/* Add a color to the delete button */
.deletebtn {
  background-color: crimson;
  margin-left: 10px;
}

/* Add padding and center-align text to the container */
.container {
  padding: 16px;
  text-align: center;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  opacity: .9;
  top: 0;
  margin: 60px auto;
  width: 100%; /* Full width */
  height: 50%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  opacity: 1;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* The Modal Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and delete button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .deletebtn {
    width: 100%;
  }
}
 .loader{
    text-align: center;
    margin: 0px auto;
} 
</style>