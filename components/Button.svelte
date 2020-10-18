<script lang="ts">
  export let label: string;
  export let href: string;
  export let rel: string;
</script>

<style>
  a {
    display: inline-block;
    padding: 0.3em 1.2em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 300;
    color: #ffffff;
    background-color: #4eb5f1;
    text-align: center;
    transition: all 0.2s;
  }
  a:hover {
    background-color: #4095c6;
  }
</style>

<a {href} {rel}>{label}</a>
