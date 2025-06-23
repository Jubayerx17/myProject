const testimonials = [
  {
    name: 'Emily Johnson',
    photoURL: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: "Apple's lapton is a game-changer! The sleek design and top-notch performance exceeded all my expectations. I can now easily multitask without any lag. Thank you, Apple, for this amazing product!"
  },
  {
    name: 'Samantha Roberts',
    photoURL: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: "I am extremely satisfied with the sleek design and top-notch performance of Mango's lapton. It has truly exceeded my expectations in terms of speed and functionality. I highly recommend this product to anyone in need of a reliable and efficient laptop."
  },
  {
    name: 'Samantha Johnson',
    photoURL: ' https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: "People truly exceeded my expectations with their amazing Lapton. The sleek design and lightning-fast performance have made my life so much easier. I highly recommend People to anyone in need of a reliable tech companion."
  },
  {
    name: 'Emily Parker',
    photoURL: 'https://images.unsplash.com/photo-1605569181607-89f5391eb251?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: "I am extremely impressed with the quality of the lapton from girl. Their attention to detail and customer service are top-notch. I highly recommend girl for anyone in need of a reliable lapton."
  },
  {
    name: 'Emily Parker',
    photoURL: 'https://images.unsplash.com/photo-1605569181607-89f5391eb251?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: "I am extremely impressed with the quality of the laptop from girl. Their attention to detail and customer service are top-notch. I highly recommend girl for anyone in need of a reliable laptop."
  },
  {
    name: 'Liam Johnson',
    photoURL: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    text: "The performance and design of the laptop exceeded my expectations. girl truly delivers quality and value. I’m very satisfied with my purchase."
  },
  {
    name: 'Sophia Martinez',
    photoURL: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    text: "Amazing experience! The laptop is sleek, fast, and perfect for both work and entertainment. I’ve already recommended girl to my friends."
  },
  {
    name: 'Noah Kim',
    photoURL: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    text: "From ordering to delivery, the process was smooth. The laptop works flawlessly and looks stunning. Thank you, girl, for a great product."
  },
  {
    name: 'Ava Chen',
    photoURL: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
    text: "I love how lightweight and powerful my new laptop is. girl nailed it with this one. Great build quality and support team!"
  }
];





const img = document.querySelector('img')
const textEl= document.querySelector('.text')
const userName = document.querySelector('.userName')

let idx = 0;

updateTestimonial()


function updateTestimonial() {
  const {name,photoURL,text} = testimonials[idx]
  img.src = photoURL
  userName.innerText = name
  textEl.innerText = text
  idx ++
  if (idx === testimonials.length) {
    idx = 0
  }
  setTimeout(()=>{
    updateTestimonial()
  },2600)
}