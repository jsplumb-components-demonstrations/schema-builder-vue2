<template>
  <div id="app">
    <div id="schema">
      <jsplumb-schema-builder id="mySchema" url="schema-1.json"></jsplumb-schema-builder>
    </div>
    <div id="rhs">
      <jsplumb-schema-builder-palette schemaId="mySchema"></jsplumb-schema-builder-palette>
      <jsplumb-schema-builder-inspector schemaId="mySchema"></jsplumb-schema-builder-inspector>
    </div>
  </div>
</template>

<style>
  @import "../node_modules/@jsplumb-components/schema/jsplumb.components.schema.css";
  @import "../node_modules/@jsplumb-components/schema/jsplumb.components.schema.theme.default.css";
  @import "../assets/css/app.css";


</style>

<script>

export default {
  name: 'app',
  methods:{

  }
}
</script>

