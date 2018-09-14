<template>
    <li class="user">
        {{user.username}}
    </li>
</template>


<script>
    export default {
        props: ['user']
    }
</script>

<style>
.user {
  list-style-type: none;
  transition: all 2s;
}
.user:hover {
  opacity: 1;
}
</style>