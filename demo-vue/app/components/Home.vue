<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <GridLayout>
      <StackLayout class="p-20">
        <Button text="show" class="t-20 text-center c-black" @tap="onTap"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import {
  CustomBottomsheet,
  CBSheetOption
} from "nativescript-custom-bottomsheet";

import { alert } from "tns-core-modules/ui/dialogs";

const customBottomsheet = new CustomBottomsheet();

export default {
  methods: {
    onTap() {
      const options = {
        icon: "contact",
        title: "John Doe",
        items: [
          {
            icon: "call",
            title: "Make a call"
          },
          {
            icon: "sms",
            title: "Send a text message"
          },
          {
            icon: "email",
            title: "Send an email"
          },
          {
            icon: "comments",
            title: "Leave a comment"
          },
          {
            icon: "delete",
            title: "Delete contact"
          }
        ],
        onItemTap: (index, item) => {
          console.log("index", index);
          if (item) {
            alert(`Action Selected : "${item.title}"`);
          }
        },
        cancelButtonText: "Cancel"
      };

      customBottomsheet.show(options);
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>
