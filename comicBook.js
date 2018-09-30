$(document).ready(function(){
  
  $('.chapter').click(function(){
    $('#comic-index').addClass('d-none')
    $('#comic-content').removeClass('d-none')
  })

  $('.page-index h3').click(function(){
    $('#comic-content').addClass('d-none')
    $('#comic-index').removeClass('d-none')
  })   
})


 var comicImg = 'page1,https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-1.png;page2,https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-2.png;page3,https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-3.png;page4,https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-4.png;page5, https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-5.png;page6,https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-6.png;page7, https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-7.png;page8, https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-8.png;page9, https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-9.png;page10, https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-10.png;page11, https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-11.png;page12, https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/storyboard-12.png'  


// filter comicImg for first time
var arrayComicImg = comicImg.split(';')

// looping through arrayComicImg to built an object of comicPage in array
var comicPage = []
for (let i=0; i<arrayComicImg.length; i++){
    var newComicImg = arrayComicImg[i].split(',')
    
    comicPage[i] = {
      page: newComicImg[0],
      img: newComicImg[1],
      num: i 
    }
}

// comicbook thumbnail(縮圖)
var pageView = document.querySelector('.pageView') 
function comicThumbnails(){
 
  for (let i=0; i<comicPage.length; i++){ 
       
  var pageNum = document.createElement('div')
  pageNum.textContent = i+1
    
  var pageViewImg = document.createElement('img')
  pageViewImg.setAttribute('src',comicPage[i].img)
  pageViewImg.setAttribute('data-num',comicPage[i].num)
    
  var pageViewLi = document.createElement('LI')
  pageViewLi.appendChild(pageNum)
  pageViewLi.appendChild(pageViewImg) 
      
  pageView.appendChild(pageViewLi) 
  } 
}
comicThumbnails()

// change comicbook page
pageView.addEventListener('click',changeComicImg)
// click thumbnail, then change comicbook page
function changeComicImg(e){
  for (let i=0; i<comicPage.length; i++){
     var pageNum = e.target.dataset.num 
      if (pageNum == comicPage[i].num){
      var showComicImg = comicPage[i].img
    } 
  }
  var img = document.querySelector('.img img')
      img.setAttribute('src',showComicImg)
      img.setAttribute('data-num',pageNum)
  
  $('option').removeAttr('selected')
  var currentPage = document.querySelector(`[data-num="${pageNum}"]`)
   currentPage.setAttribute('selected','selected')
  
  $('.pageView img').removeClass('active')
  var currentThumbnail = e.target
  currentThumbnail.classList.add('active')
}

// create option tags for pages

var selectPage = document.querySelector('.custom-select-page')

for (let i=0; i<comicPage.length; i++){   
    var page = document.createElement('option')
    page.setAttribute('vlaue',comicPage[i].page)
    page.setAttribute('data-num',i)
    page.textContent = comicPage[i].page
    selectPage.appendChild(page)   
}

// changePages
selectPage.addEventListener('change',function(e){
  
  $('option').removeAttr('selected')
  var dataNum = $(this).find(':selected').data('num')
  var img = document.querySelector('.img img')
      img.setAttribute('src',comicPage[dataNum].img)
})

// click arrow-right and change the pages
var rightArrow = document.querySelector('.right-arrow')
rightArrow.addEventListener('click',function(){

    var img = document.querySelector('.img img') 
    var imgUrl = img.getAttribute('src')
    var imgNum = parseInt(img.getAttribute('data-page'))
    var imgPosition = imgUrl.indexOf('storyboard-')
    var newImgUrl = imgUrl.slice(0,imgPosition)
      
    img.setAttribute('data-page',`${imgNum+1}`)
    img.setAttribute('src',`${newImgUrl}storyboard-${imgNum+1}.png`)
})

// click arrow-left, then turn the page
var leftArrow = document.querySelector('.left-arrow')
leftArrow.addEventListener('click',function(){

    var img = document.querySelector('.img img') 
    var imgUrl = img.getAttribute('src')
    var imgNum = parseInt(img.getAttribute('data-page'))
    var imgPosition = imgUrl.indexOf('storyboard-')
    var newImgUrl = imgUrl.slice(0,imgPosition)
    
    img.setAttribute('data-page',`${imgNum-1}`)
    img.setAttribute('src',`${newImgUrl}storyboard-${imgNum-1}.png`)
})

//夜光模式

var viewMode = document.getElementById('view-mode')

function changeToDark(){
  if (viewMode.checked == true){
    var body = document.querySelector('body')
    body.classList.add('dark')
  }else {
    var body = document.querySelector('body')
    body.classList.remove('dark')
  }
}
