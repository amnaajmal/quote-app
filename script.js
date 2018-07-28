 let books = [
 {

   name :"Abe-e-Hayat",
   author:"umera ahmed",
   imageURL :"muh.jpg",
   quote:"Gunah ni choot raha ye fikar ki bat hai,magr,zameer malamat nahi kar raha ye khatrey ki bat hai",
   wikiLink:"https://paksociety.com/reading/novels/umaira-ahmad/aab-e-hayat-complete.html",
 }, 
 {
   name :"Peer-e-Kamil",
   author:"umera ahmed",
   imageURL :"abdul.jpg",
   quote:"The fragrance of the Prophet (pbuh) lingers on my fingers, my lips,So often did I write and kiss his blessed name.",
   wikiLink:"http://www.urdubooks.org/category/umera-ahmed/peer-e-kamil-s-a-w",
 }, 
 {
   name:"AmerBail",
   author:"umera ahmed",
   imageURL:"ben.jpg",
   quote:"kisi cheez ko sirf meri mohabbat mere pas nahi la saki",
   wikiLink:"http://umeraahmed.urdunovels.org/2011/05/amar-bail-by-umera-ahmed/",

 },

 {
   name:"La Hasil",
   author:"umera ahmed",
   imageURL:"fatima.jpg",
   quote:"Dunya aurat k maazi ko kabhi nahi bholti ,dunya sirf mard k maazi ko bhool jati hy",
   wikiLink:"http://www.urdubooks.org/category/umera-ahmed/la-hasil",

 },
 {
   name:"Mushaf",
   author:"Nimra ahmed",
   imageURL:"imran.jpg",
   quote:"mujhy nahi maloom hijab wajib hai ya mustajib, me itna janti hu ye ALLAH ko pasand hy mjhy b pasand huna chaiye",
   wikiLink:"http://www.urdunovels.org/2012/07/mushaf-by-nimra-ahmed-new-book/",
 },
 {

   name:"Aks",
   author:"umera ahmed",
   imageURL:"malala.jpg",
   quote:"ALLAH par tawakkul bari shay hai,ALLAH k pas khob se khob tar huta hai,Ju hamein kamil lagta hai ALLAH k ps usme bhi umda chez huti hy",
   wikiLink:"http://umeraahmed.urdunovels.org/category/aks/",

 },
 {
   name:"Eman umeed Or Mohabbat",
   author:"umera ahmed",
   imageURL:"nusrat.jpg",
   quote:"Hamara har amal ALLAH k leay hona chaheyay. Hamrai dosti, hamari dushmani hamari mohabbat hamari nafrat apnay leay kuch nae hona chaheyay",
   wikiLink:"http://www.urdubooks.org/iman-umeed-aur-mohabbat-page-1.html",
 },

 ];

 function initialize(){
   let divEl = document.querySelector(".main-div");
   for (let i =0; i <books.length; i++){
     divEl.innerHTML += `<div class='main-img-div' style='background-image: url(pics/${books[i].imageURL});' onclick='changeInfo(${i})'>
     <p class="book-name"> ${books[i].name}</p>
     </div>`;
   }
 }
 function changeInfo(indexNum) {
  document.querySelector(".card-title").innerHTML=books[indexNum].name;
  document.querySelector(".card-subtitle").innerHTML = books[indexNum].author;
  document.querySelector(".book-img").style = `background-image: url(pics/${books[indexNum].imageURL});`;
  document.querySelector(".card-text").innerHTML=books[indexNum].quote;
  document.querySelector(".card-link").href = books[indexNum].wikiLink;

}
