## 복습

- 데이터타입 : 동적타입과 정적타입  
정적타입 언어는 변수를 선언할 때 아예 데이터타입을 고정시켜놓는다. int a 이렇게. 그래서 a에는 int형의 데이터가 아니면 들어갈 수 없다. 자바스크립트는 동적타입언어다. 내가 let a 라고 선언했을 때 데이터타입을 고정시켜놓지 않았다. a에는 숫자도 문자도 함수도 객체도 다 들어갈 수 있다. 데이터타입은 값이 할당될 때 결정된다. let a = 10 일때, 자바스크립트 엔진은 let 키워드를 만나 식별자 a를 등록한다. 런타임 때에 다시 돌아오면 = 이라는 할당연산자를 만나고 그 뒤에 있는 10을 숫자타입으로 인식한다. 숫자타입으로 인식한 10을 a라는 메모리공간에 할당한다. 이렇게 값에 따라 데이터타입이 동적으로 결정되는 언어를 동적타입언어라고 한다.  

- 연산자는 피연산자를 받아 특정 연산을 해서 값을 만든다. 값을 만드는 것은 표현식. 문이 무엇인가?  
값으로 평가될 수 있는 문은 표현식인 문이며 그렇지 않은 문은 표현식이 아닌 문이다. 표현식은 식별자, 키워드, 리터럴, 함수호출 등의 조합이다. 10+20 과 같은 연산자 표현식도 있고 10 과 같은 리터럴 표현식도 있고 foo(1,2)처럼 함수호출표현식도 있고 a 같은 식별자 표현식도 있다.(a에 값이 할당되어있다면 a는 평가되어 그 값이 된다) 표현식은 값을 만드는 것 외에 다른 일은 할 수 없다. 하지만 문은 if, while, for 문으로 프로그램의 흐름을 제어할 수도있고, var, let, const function 등의 키워드를 만나 자바스크립트엔진에 명령을 내릴 수도 있다. 문은 하나 이상의 키워드와 표현식으로 이루어진 명령이다. 문의 끝에는 세미콜론을 붙여야하지만 코드블록에는 세미콜론을 붙이지 않는다. 문에는 제어문(if, for, while 등), 함수선언문(function foo () {}), 변수선언문(var a;), 할당문(x = 10) 등이 있다. 제어문, 함수선언문, 변수선언문은 값으로 평가될 수 없으므로 표현식이 아닌 문이고, 할당문은 값으로 평가될 수 있으므로 표현식인 문이다. 표현식이 아닌 문과 표현식인 문을 구별하는 가장 쉬운 방법은 변수에 할당해보는 것이다. 변수에는 하나의 값을 저장할 수 있다고 했다. 그렇다면 값으로 평가될 수 있는 표현식인 문은 변수에 할당할 수 있을 것이고, 값으로 평가될 수 없는 표현식이 아닌 문은 변수에 할당될 수 없을 것이다. 결국 프로그램은 문들의 조합이다.  

- 외부상태를 변경하는 함수: 비순수함수  
객체는 객체타입이므로 뮤터블하다. 함수 내부에서 외부 객체의 프로퍼티에 접근하여 값을 바꾸는 것이 가능하다는 이야기이다. 객체타입은 참조에 의한 전달이 일어난다. 실제 객체는 메모리공간 어딘가에 짱박혀있고, 식별자들은 그 공간의 주소만 할당받는다. 나랑 내친구 J 가 같은 집에 산다고 치자. 내가 집에 들어가서 갑자기 소파의 위치를 거실이 아니라 내 방으로 옮겨놓고 나왔다. 그럼 J 가 집에 갔을 때 볼 광경은 휑한 거실이다. 소파는 내 방에 있는 상태일 것이다. 이처럼 a와 b라는 식별자가 같은 객체를 참조할 때, 함수 내부에 있는 a가 외부에 있는 객체에 접근하여 데이터를 바꿔놓으면 그 상태는 b에게도 영향을 미친다. 이렇게 외부상태를 변경하는 함수를 비순수함수라고 한다. 이렇게 외부상태를 마음대로 바꿔버리면 이건 예기치않은 변경이기때문에 혼란이 생긴다.  

- 모던 자바스크립트에서 변수/반복문/비순수함수 싫어한다. -> 이것을 고려하며 프로그래밍하는게 함수형 프로그래밍  
변수를 왜 싫어할까? 특히 우리는 전역변수를 쓰지 말아야한다. 우리는 생명주기가 길고 누구나 참조할 수 있고 변경할 수 있는 변수를 최대한 쓰지말아야한다. 그런 변수를 사용하다보면 어디선가 누군가가 내 변수에 접근하여 값을 바꿔놓을 것이고 프로그램은 제대로 동작하지 않을 수도 있다. 그래서 변수는 빨리 쓰고 빨리 버려야한다. 스코프를 좁게 만들어야 한다는 뜻이다.
반복문은 유용하긴 하지만 가독성을 해치고 프로그램의 흐름을 어지럽게 한다.  

- 변경가능하다: 메모리공간을 유지하면서 그 안에서 변경가능  
이게 뮤터블한 객체타입. 원시값은 메모리공간을 유지하면서 막 자유자재로 변경할 수가 없다. 다른 공간에 새롭게 할당하는수밖에.  

- `++` 가 부수효과가 있는 이유? `+=` -> `=` 가 있기 때문에  
`++`은 부수효과가 있는 유일한 연산자라고 한다. 사실 실질적인 부수효과 역할을 하는 건 `=` 할당연산자이다. 왜냐면 i++은 곧 i += 1, i = i + 1 과 같기 때문이다. = 을 하는순간 오른쪽값이 왼쪽으로 넘어가는 효과가 생긴다.  

- 객체가 뮤터블이어서 생기는 부수효과: 참조에의한전달 -> 함수내부에서 외부상태변경가능  

- 객체를 얼린다 -> 순수함수(외부상태를 변경하지않는)를 만들기 위해  

- 객체는 상태데이터와 동작(메소드)로 이루어진 복합적 자료구조  

- 객체 리터럴은 = 에서 만들어진다.  
할당될 때 -> 객체가 만들어져서 메모리에 들어갈 때  
객체는 키와 밸류로 이루어진 복합적 자료구조다. 비슷하면서도 다르게 말하면 상태데이터와 동작을 논리적인 하나의 단위로 묶어놓은 복합적 자료구조. 동작은 상태데이터를 참조하고 변경할 수 있다. 동작은 메소드라고도 하는데, 객체에 프로퍼티로 함수가 들어와있으면 그것을 메소드라고 한다. 객체타입은 뮤터블이므로 변경가능하다. 사실 객체라고 하면 원시타입을 제외한 배열 함수 객체 등등 전부 객체라고 한다. 객체 리터럴은 할당될때 평가된다. 메소드는 호출하지않는이상 당연히 혼자 실행되진 않고.  

- 리턴문이 없는건 return; 과 같다  

- 프로토타입은, 어떤 객체의 부모(상위)객체의 역할을 하는 객체.(부모객체나 상위객체다- 라고 할 수는 없나보다.) 생성자함수객체는 런타임이전에 만들어질때 프로토타입도 만든다  