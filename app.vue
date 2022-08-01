<template>
  <v-app>
    <v-container>
      <v-btn>
        <v-tooltip
          activator="parent"
          location="bottom"
        >
          Tooltip
        </v-tooltip>
        Button
      </v-btn>

      <!-- 
      <v-tooltip
        location="bottom"
      >
        <template #activator="{ props }">
          <v-btn v-bind="props">
            Button
          </v-btn>
        </template>
        <span>Tooltip</span>
      </v-tooltip> -->
    </v-container>
  </v-app>
</template>
