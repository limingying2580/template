<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-size: 14px;
  font-family: 'system-ui', 'sans-serif';
  /* for webkit */
  -webkit-font-smoothing: antialiased;
  /* for firefox */ 
  -moz-osx-font-smoothing: grayscale;

  /* full screen */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
