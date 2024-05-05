//your code here


const para=document.getElementById('para')

function handleclick(e){
	
	const clickedImage =e.target;
  clickedImage.classList.add('selected');
  
  const selectedImages = document.querySelectorAll('.selected');

	if(selectedImages.length==2){

		const firstImageClass = selectedImages[0].classList[1];
    const secondImageClass = selectedImages[1].classList[1];

		if(firstImageClass===secondImageClass)
		{
			para.textContent='You are a human. Congratulations!.'
		}


		 else {
      document.getElementById('para').innerText = 'We can\'t verify you as a human. You selected the non-identical tiles.';
    }
    
    document.getElementById('para').style.display = 'block';
    document.getElementById('verify').style.display = 'none';
      selectedImages.forEach(image => image.classList.remove('selected'));
	}

	else if(selectedImages.length>2){
		selectedImages.forEach(image=>image.classList.remove('selected'))
	}

	

	
}
