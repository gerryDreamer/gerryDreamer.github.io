let activateGallery = () => {
	let thumbnails = document.querySelectorAll('#gallery-thumbs > div > img') //.querySelectorAll('img')
	let mainImage = document.querySelector('#gallery-photo img')

	thumbnails.forEach(function(thumbnail){
		thumbnail.addEventListener('click',function(){
			//code to set clicked image as main images
			let newImageSrc = thumbnail.dataset.largeVersion
			mainImage.setAttribute('src', newImageSrc)
			//mainImage.setAttribute('alt', FILL_IN)
			
			// Change which image is current.
			let currentClass = 'current'
			document.querySelector('.current').classList.remove(currentClass)
			thumbnail.parentNode.classList.add(currentClass)
			
			//update image info
			let galleryInfo = document.querySelector('#gallery-info')
			let title = galleryInfo.querySelector('.title')
			let description = galleryInfo.querySelector('.description')
			
			title.innerHTML = thumbnail.dataset.title
			description.innerHTML = thumbnail.dataset.description
		})
	})
}
