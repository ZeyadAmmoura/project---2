$('body').css('background-color','white');
 $('i').css('color','red');
 $('i').css('font-size','4rem');
 $('span').css('font-size','3rem');
 
$('navbar').css('justify-content','flex-start')
const body=$('body');
const videos = [
    {
      id: "7yLxxyzGiko",
      title: "Kittens walk with a tiny chicken",
      thumbnail: "https://img.youtube.com/vi/7yLxxyzGiko/maxresdefault.jpg",
    },
    {
      id: "rS6cvjFXg9s",
      title: "Cute kitten named Garfield washes its paws and prepares to sleep.",
      thumbnail: "https://img.youtube.com/vi/rS6cvjFXg9s/maxresdefault.jpg",
    },
    {
      id: "BFNekjEgvuk",
      title: "Kitten sleeps sweetly with the Chicken 🐥",
      thumbnail: "https://img.youtube.com/vi/BFNekjEgvuk/maxresdefault.jpg",
    },
    {
      id: "te1fHMaw4UY",
      title: "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰",
      thumbnail: "https://img.youtube.com/vi/te1fHMaw4UY/maxresdefault.jpg",
    },
    {
      id: "MFyUZqSknvw",
      title: "Kittens meets and walk with a cute white bunny",
      thumbnail: "https://img.youtube.com/vi/MFyUZqSknvw/maxresdefault.jpg",
    },
    {
      id: "hlajmIPiphk",
      title: "Mom Cat playing and talking to her Cute Meowing baby Kittens",
      thumbnail: "https://img.youtube.com/vi/hlajmIPiphk/maxresdefault.jpg",
    },
    {
      id: "Cz47GimSxIc",
      title: "Funny Kitten wags its tail like a Puppy",
      thumbnail: "https://img.youtube.com/vi/Cz47GimSxIc/maxresdefault.jpg",
    },
    {
      id: "RmpuhbdnAfQ",
      title: "Kitty Coco and her Sleepy younger brother 🥰",
      thumbnail: "https://img.youtube.com/vi/RmpuhbdnAfQ/maxresdefault.jpg",
    },
  ];


  const list=$('#list')

//   iterate over video array
  videos.forEach(function(element,i){
    //   create an elemnt p
      const item=$('<p></p>')
    //   change the text to be the current elemnt (title)
      item.text(element.title)
    //   add this new elemnt to the list (div)
      list.append(item)
  });
 