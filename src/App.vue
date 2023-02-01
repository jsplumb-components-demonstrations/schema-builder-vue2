<template>
  <div id="app">
    <div id="schema">
      <jsplumb-schema-builder id="mySchema"></jsplumb-schema-builder>
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
  mounted:function() {
    // on mount, load a schema and zoom to fit the whole dataset. 
    // You can also load a url via a `url` attribute on the `jsplumb-schema-builder` element.
    this.$refs.schema.loadUrl("schema-1.json", () => this.$refs.schema.zoomToFit())
  }
}
</script>

