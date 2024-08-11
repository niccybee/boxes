<script setup lang="ts">
// Simple data Fix later
// FIX
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://pocketbase-production-a082.up.railway.app');

const items = reactive(null);

const getItems = async (params: any) => {
  console.log(params);
  const itemsData = await pb.collection('Item').getFirstListItem('someField="test"', {
    expand: 'relField1,relField2.subRelField',
  });
  items.value = itemsData;
}

onMounted(() => {
  getItems();
})

</script>

<template>
  <div class="relative grid">
    <div class="absolute w-full bg-slate-100 ">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem v-for="item in items">{{ item }}</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Suggestions">
            <CommandItem value="calendar">
              Search Items
            </CommandItem>
            <CommandItem value="search-emoji">
              Search Boxes
            </CommandItem>
            <CommandItem value="calculator">
              Search Rooms
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem value="profile">
              Houses
            </CommandItem>
            <CommandItem value="settings">
              Preferences
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
    <div><Button>X</Button></div>
  </div>
</template>