let bookList = [
  { id: 1, title: 'HTML5', author: 'Lee', price: 2000 },
  { id: 2, title: 'CSS3', author: 'Kim', price: 3000 },
  { id: 3, title: 'JavaScript', author: 'Park', price: 5000 }
];
const tab = document.querySelector('.tbody');
const toggle = document.querySelector('#toggle');
const addBtn = document.querySelector('.btn-add');
const cancelBtn = document.querySelector('.btn-cancel1');
const input = document.querySelector('input[name="title"]');
const delBtn = document.querySelector('.btn-delete');
let data = {
  id: bookList.lengt + 1, 
  title: input.value,
  author: document.querySelector('input[name="author"]').value, 
  price: document.querySelector('input[name="price"]').value
};
//let toggleFlag = false;

function insertBook(bookList){
  bookList.map((book,i)=>{
    tab.insertAdjacentHTML('beforeend', `<tr>
  <td><input type="checkbox" id="${book.id}" name="check"></td>
  <th>${book.id}</th>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.price}</td>
  </tr>`);
  });  
};
insertBook(bookList);
const toggleHandle = toggle.addEventListener('change', () => {
   /* const check = document.getElementsByName('check');
    if(toggleFlag === false){
      for(i = 0; i<check.length;i++){
        check[i].checked =true;
      }
      toggleFlag = true;
    }else{
      for(i = 0; i<check.length;i++){
        check[i].checked =false;
      }
      toggleFlag = false;
    }*/
    let check = document.querySelectorAll('input[type="checkbox"]');
    
});

const addBook = addBtn.addEventListener('click', ()=>{
  if(document.querySelector('#form').className == "hide-form"){
    document.querySelector('.hide-form').className = "visible-form";
    cancelBtn.className = "btn visible btn-warning";
  }else{
    if(!input.value.trim()) return alert('필수항목');
    pushArray();
    bookList.push(data);
    document.querySelector('tbody').insertAdjacentHTML('beforeend', `<tr>
    <td><input type="checkbox" id="${data.id}" name="check"></td>
    <th>${data.id}</th>
    <td>${data.title}</td>
    <td>${data.author}</td>
    <td>${data.price}</td>
    </tr>`);
    console.log(bookList);
    //document.querySelector('.visible-form') = "hide-form";
    //cancelBtn.className = "btn-cancel1";
  } 
});
function pushArray(){
  data.id = bookList.length + 1;
  data.title = input.value;
  data.author = document.querySelector('input[name="author"]').value;
  data.price = document.querySelector('input[name="price"]').value;
}
const cancelForm = cancelBtn.addEventListener('click', ()=>{
  document.querySelector('.visible-form').className = "hide-form";
  cancelBtn.className = "btn-cancel1";
});
function del(e){
  const check = document.getElementsByName('check');
  let arr = Array.from(bookList);
  let d;
  for(let i = 0; i<bookList.length;i++){
    if(check[i].checked){
      d.push(arr.splice(i,1));
    }
  }
  console.log(d);
}
delBtn.addEventListener('click', del);
//function bookPost(bookList){
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/id',true);
//};

//var xhr = new XMLHttpRequest();
//xhr.open('get', '/id', true);

// 5. .add-form이 표시된 상태에서 필수입력 대상인 Title이 입력되었으면 Add Book 버튼이 클릭 시,
// bookList 객체에 .add-form의 입력값을 추가하고 DOM 갱신
// 6. .add-form이 표시된 상태에서 필수입력 대상인 Title이 입력되지 않았으면 
// alert으로 입력되지 않았음을 경고

// 8. 100,000숫자 표현식
// (*) 모든 선언문의 전역 선언 금지


// 1. Delete Book 버튼이 클릭되면 체크된 book 리스트를 삭제
// 2. 최상위 체크박스를 클릭하면 전체 체크박스 토글(on/off)
// 3. Add Book 버튼이 클릭되면 .add-form를 표시
// 4. Add Book 버튼이 클릭되면 Cancel 버튼 표시
