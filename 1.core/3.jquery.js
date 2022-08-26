$('#myId') //<div id='myId'></div>

//과제: class myClass DOM들을 찾아라
$('.myClass')

//과제: name attribute value가 surname 인 input DOM들을 찾아라
$('input[name="surname"]') //<input name='surname'/>

$('#contents ul.people li')
/** 
<body>
    <div id='contents'>
        <ul class='people'>
            <li>a</li>
            <li>b</li>
        </ul>
    </div>
</body>
*/

$('a.external: first') //첫번째 class
/**
 <a class='external'></a> 
 <a class='external'></a>
 */

 $('tr:odd')
 /** 홀수번째
  * <tr/>0
  * <tr/>1 --
  * <tr/>2
  * <tr/>3--
  */

 $('div:visible')

 $('div:gt(1)') //1번째 인덱스를 초과하는 값부터(0, 1, 2)
 /**
  * <div></div>0
  * <div></div>1
  * <div></div>2 --
  */

 $('div:animated')

 $('a[rel$="thinger"]') //thinger로 끝나는것들
 /**
  * <a href='do-nothinger'></a>
  * <a href='so-thinger'></a>
  */

 $('div.foo').has('p') 
 //p를 갖고있는 <class='foo'> element를 찾아라
 /**
  * <div class='foo'>
  *     <p></p>
  * </div>
  * <div class='foo'></div>
  */

 $('ul li').filter('.current')
 //<li>중에 <class='current'> 가 있는 element를 찾아라. 
 /**
  * <ul>
  *     <li class='current'><li>
  *     <li></li>
  * </ul>
  */

$('ul li').not('.current')
//<li>중에 <li class='current'>가 없는 element를 찾아라.

$('ul li').eq(1)
//1번 index를 찾아라. (0~n)  

$('form :button')
/**
 * <form>
 *      <button></button>
 *      <input type='button'>
 * </form>
 */
$('form :radio') //<input type='radio'/>
$('form :checkbox') //<input type='checkbox'/>

$('form :checked') //마우스로 데이터 입력하는것중 체크된것
/**
 * <input type='radio'/>
 * <input type='checkbox'/>
 * <select><option></option></select>
 */

$('form : seleted')
/**
 * <select><option></option></select>
 */

$('form :enabled')
$('form :diabled')
$('form :file') //<input type='file'/>

$('form :input')
/**
 * <input type='text'/>
 * <textarea></textarea>
 * <select></select>
 * <button type='submit'></button>
 */

$('form :text') //<input type='text'/>

$('form :password') //<input type='password'/>

$('form input[name="gender"]:radio')
//과제: 위 selector 에 해당하는 html code를 작성하라.
/*
<form>
    <input type='radio' name='gender'/>
</form>
*/

$('form :rest') //<input type='reset'/>

$('form: submit') //<input type='submit'/>