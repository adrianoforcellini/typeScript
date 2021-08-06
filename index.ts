const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', () => {
   const i = event.currentTarget as  HTMLInputElement;
   console.log(i.value)
} )
