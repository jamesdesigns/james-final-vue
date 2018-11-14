<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      You now have the opportunity to choose who you want on your new team. Create two team options. Your first option may or may not be approved from the people you select.
      Just select any team member that best fits your ideal team and get an approval within minutes.
    </p>
    <br>
<h3>Drag and Drop</h3>   
      <div v-drag-and-drop:options="options" class="drag-wrapper">   
      
  <ul>
    <li>Member 1</li>
    <li>Member 2</li>
    <li>Member 3</li>
    <li>Member 4</li>
    <li>Member 5</li>
    <li>Member 6</li>
  </ul>
  <ul> 
      <li>Member 7</li>
      <li>Member 8</li>
      <li>Member 9</li>
      <li>Member 10</li>
      <li>Member 11</li>
      <li>Member 12</li>
  </ul>
</div>
<br>
<v-btn color="info" @click="getCourses">APPROVE</v-btn>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top:5%;
}
p {
  width: 50%;
  text-align:left;
  margin:0 auto;
}
h3 {
  text-align: center;
  margin-left:-2%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.drag-wrapper {
  display: flex;
  justify-content: center;
  margin-top:2%;
}

ul {
  display: flex;
  flex-direction: column;
  padding: 3px !important;
  min-height: 100px;
  width:210px;
  float:left;
  list-style-type:none;
  overflow-y:auto;
  border:2px solid #888;
  border-radius:0.2em;
  background:#ffff66;
  color:#000;
  margin-right: 20px;
}

/* drop target state */
ul[aria-dropeffect="move"] {
  border-color:#68b;
  background:#fff;
}

/* drop target focus and dragover state */
ul[aria-dropeffect="move"]:focus,
ul[aria-dropeffect="move"].dragover
{
  outline:none;
  box-shadow:0 0 0 1px #fff, 0 0 0 3px #68b;
}

/* draggable items */
li {
  display:block;
  list-style-type:none;
  margin:0 0 2px 0;
  padding:0.2em 0.4em;
  border-radius:0.2em;
  line-height:1.3;
}

li:hover {
  box-shadow:0 0 0 2px #68b, inset 0 0 0 1px #ddd;
}

/* items focus state */
li:focus
{
  outline:none;
  box-shadow:0 0 0 2px #68b, inset 0 0 0 1px #ddd;
}

/* items grabbed state */
li[aria-grabbed="true"]
{
  background:#5cc1a6;
  color:#fff;
}

@keyframes nodeInserted {
    from { opacity: 0.2; }
    to { opacity: 0.8; }
}

.item-dropzone-area {
    height: 2rem;
    background: #888;
    opacity: 0.8;
    animation-duration: 0.5s;
    animation-name: nodeInserted;
}

</style>
