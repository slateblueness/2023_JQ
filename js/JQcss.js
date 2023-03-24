// html에서 cdn으로 값을 가져온 후
// 다른 JS 파일에서도 제이쿼리에 접근할 수 있다

// .css()를 이용해서 style값을 바꿀 수 있다
$('#header').css('color', 'blue');

// css값을 여러 개 넣고 싶을 때는 객체 형태로 작성
// 속성 이름을 적을 때는 -(하이픈) 사용 불가능
// → 낙타 형태 글자로 작성 ex)font-size(X), fontSize(O)
// 속성 이름은 따옴표 없이도 사용 가능 ex)backgroundColor: 'gray'
// 값 안에 변수나 자바스크립트 계산식을 삽입하고 싶을 때는 `${}` 사용 가능
$('#header').css({
    backgroundColor: 'gray',
    'fontSize': '3rem'
});

// 버튼을 클릭했을 때 hidden클래스 추가
$('#btn').on('click', function(){
    // 형제태그를 통해 p태그를 찾아 클래스 추가
    // this를 통해서 현재 이벤트가 실행된 태그를 가져올 수 있다
    $(this).prev().addClass('hidden');
    console.log($(this));
})

// 버튼을 클릭했을 때, header가 숨김/보임 처리
$('#toggle-button').on("click", function(){
    $('#header').toggleClass('hidden');
});

/* todo의 input에 접근하여 클릭했을 때 체크 유무에 따라 디자인 변경 */
// 체크박스를 클릭했을 때 li에 디자인 넣기
$("#todo input[type='checkbox']").on('click', function(e){
    // 제이쿼리에서 자바스크립트의 내용 사용 가능
    console.log(e.target.checked);

    // this를 이용해서 이벤트가 발생한 태그를 가져올 수 있음
    // prop('속성이름'): 속성값 가져오기
    console.log($(this).prop('checked'));

    // 체크하면 true, 체크 해제하면 false 출력됨
    if(e.target.checked){
        $('#todo').css('color', 'red').addClass('checked');
    } else{
        $('#todo').css('color', '').removeClass('checked');
    }
});

/* number-btns 연습 */
// 자바스크립트를 이용하여 버튼에 이벤트 넣기
/*const btns = document.querySelectorAll("#number-btns button");
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(e){
    e.target.style.color = "red";
    e.target.disabled = "true";
    });
}*/

// 제이쿼리로 접근한 여러 개의 태그는
// 배열로 처리하지 않고 바로 메소드를 이용해 모두 적용할 수 있다
console.log($("#number-btns button"));
$("#number-btns button").css("color", "blue");

// 제이쿼리로 여러 개의 태그에 이벤트 추가
$("#number-btns button").on("click", function(){
    $(this).css("color", "red").prop("disabled", "true");
});