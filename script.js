//your code here


const para=document.getElementById('para')
  const verify=document.getElementById('verify')
const reset=document.getElementById('reset')

function handleclick(event){
	
	const clickedImage =event.target;
  clickedImage.classList.add('selected');
  
  const selectedImages = document.querySelectorAll('.selected');

	if(selectedImages.length==2){

		const firstImageClass = selectedImages[0].classList[0];
    const secondImageClass = selectedImages[1].classList[0];

		verify.style.display = 'block';
		reset.style.display='block';

		verify.addEventListener('click',()=>{

			

			if(firstImageClass===secondImageClass)
		{
			para.textContent='You are a human. Congratulations!.'
		}


		 else {
      document.getElementById('para').innerText = 'We can\'t verify you as a human. You selected the non-identical tiles.';
    }
			
		})


		reset.addEventListener('click',()=>{
			selectedImages.forEach(image => image.classList.remove('selected'));

			para.style.display='none'
		})
		
    
  
                 
      
	}

	else if(selectedImages.length>2){
		selectedImages.forEach(image=>image.classList.remove('selected'))
	}

	

	
}
