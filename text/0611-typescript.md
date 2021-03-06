
# TypeScript

웹 페이지의 보조적인 기능을 수행하기 위해 한정적인 용도로 사용되던 초창기 자바스크립트.  
그로 인한 태생적 한계로 인한 문제를 극복하고자 등장한 AltJS의 하나가 타입스크립트.  
ES5의 상위확장이므로 기존의 자바스크립트 문법을 그대로 사용할 수 있고, Babel 같은 트랜스파일러를 사용하지 않아도 ES6의 기능을 기존의 자바스크립트 엔진(브라우저 또는 Node.js)에서 실행할 수 있다.  

## TypeScript의 장점  

1. 정적타입 지원
```typescript
function add(a: number, b: number) {
  return a + b;
}
console.log(1, 2); // 숫자만 넘겨줄 수 있다 
```
명시적인 정적타입 지정으로 개발자의 의도를 명확하게 코드로 기술할 수 있으며, 가독성을 높이고 예측 가능하게 하며 디버깅을 쉽게 한다.  

2. 도구의 지원  
IDE(통합개발환경)을 포함한 다양한 도구의 지원을 받을 수 있다. 

3. 객체지향 프로그래밍 지원 - 인터페이스, 제네릭 등  
크고 복잡한 프로젝트의 코드 기반을 쉽게 구성할 수 있게 돕고, 객체 지향 언어에 익숙한 개발자의 진입 장벽을 낮춘다.  

4. ES6 / ES Next 지원  
타입스크립트는 표준화가 유력한 스펙을 선제적으로 도입하므로 새로운 스펙의 유용한 기능을 안전하게 도입하는데 유리하다.  

5. Angular
Angular 문서, 커뮤니티 활동에서 가장 많이 사용되고 있는 것은 타입스크립트다. 

## 정적 타이핑  

타입스크립트는 변수명 뒤에 타입을 명시하는 것으로 타입을 선언할 수 있으며, 선언한 타입에 맞지 않는 값을 할당하면 컴파일 시점에 에러가 난다. 타입스크립트가 기본 제공하는 타입은 모두 소문자이다. 타입 추론이 가능하다면 굳이 타입을 명시해주지 않아야 좋다.  
```typescript
let name: string = 'Rudy';
```
변수의 타입 선언 없이 값이 할당될 때 동적으로 타입을 추론하면 동적 타이핑이다. 동적 타입 언어(자바스크립트)에서는 같은 변수에 여러 타입의 값을 교차하여 할당할 수 있다.  
반대로 변수를 선언할 때 타입을 명시적으로 선언하고, 선언한 타입에 맞는 값을 할당하는 것을 **정적 타이핑**이라고 한다. 타입스크립트는 정적 타이핑을 지원한다. 정적 타이핑은 변수, 함수의 매개변수, 반환값에도 사용할 수 있다. 정적 타이핑의 장점은 **코드 가독성, 예측성, 안정성의 향상** 등이 있다.  

타입스크립트에서 타입 선언을 생략하면 값이 할당될 때 동적으로 타입이 결정된다. 그리고 이렇게 타입이 결정된 후에는 타입을 변경할 수 없다.  
타입 선언을 생략하고 값도 할당하지 않아서 타입을 추론할 수 없으면 any 타입이 된다. any 타입이 되면 어떤 타입의 값도 재할당이 가능하지만 이는 타입스크립트를 사용하는 장점을 없애기 때문에 바람직하지 않다.  

- void 와 never  
void 는 종료는 하지만 반환을 안 하고, never 는 종료도 반환도 안 한다.  

- array  
사실 배열 안의 요소들은 타입이 다 같아야한다.  
타입스크립트에서는 any[] 는 금지다.  

- tuple  
배열인데 몇번째 요소가 어떤 타입인지 명시해준다.  

- enum  
상수를 가지고 싶은데 특별한 의미를 가지고 있을 필요는 없을 때.  
숫자를 대변하는 키워드들의 집합.

let str: String 은 스트링 생성자함수가 만든 인스턴스타입을 가리킴.  


## 클래스  

자바스크립트에서의 클래스 문법과 헷갈리지 말아야 한다!  
타입스크립트 클래스는 클래스 몸체에 클래스 프로퍼티를 사전 선언하여야 한다.  
타입스크립트가 자바스크립트의 수퍼셋이라고 해도 클래스는 예외다.  

```typescript
class Person {
  name: string; // 클래스 프로퍼티 사전 선언

  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`Hi, I'm ${this.name}.`)
  }
}
```

### 접근 제한자  
- public  
  클래스 내부, 자식 클래스 내부, 클래스 인스턴스에서 모두 접근 가능  
- protected  
  클래스 내부, 자식 클래스 내부에서 접근 가능  
- private  
  클래스 내부에서만 접근 가능  

접근 제한자를 명시하지 않으면 암묵적으로 pulic이 선언된다.  
접근 제한자는 생성자 파라미터에도 선언할 수 있는데, 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언되고 생성자 내부에서 암묵적으로 초기화된다. 만약 생성자 파라미터에 접근 제한자를 선언하지 않으면 생성자 내부에서만 유효한 지역변수가 되어 생성자 외부에서 참조가 불가능하다.  

### readonly  
readonly가 선언된 클래스 프로퍼티는 선언 시 또는 생성자 내부에서만 값을 할당할 수 있다. 그 외에는 오직 읽기만 가능하다. 메소드에서도 재할당이 금지된다.  

### static  
타입스크립트에서는 static 키워드를 클래스 프로퍼티에도 사용할 수 있다.  

### 추상클래스  
하나 이상의 추상 메소드를 포함한다(없으면 일반 클래스). 추상 메소드는 내용 없이 메소드 이름과 타입만 선언된 메소드이며 abstract 키워드를 사용한다. 추상클래스도 abstract 키워드를 사용하여 정의하며, 상속만을 위해 사용된다. 추상클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현하여야 한다.  

- 추상메소드  
  실체가 없다. 상속용 메소드. 다른 클래스가 상속받는다. 그 클래스에서는 이 추상메소드를 반드시 구현해야 함. 

클래스 기반 언어는 설계가 중요하다. 애플리케이션을 만들기 전에 클래스관계를 다 구성해놓아야 한다. 대규모 개발에 필요하다. 강제적인 방법을 동원하는 것.  

## 인터페이스  
설계서라고 생각하면 된다.  
일반적으로 **타입체크를 위해** 사용되며 변수, 함수, 클래스에 사용할 수 있다. 여러 프로퍼티로 이루어진 새로운 타입을 만드는 것과 유사하다. 인터페이스에 선언된 프로퍼티 또는 메소드의 구현을 강제하여 일관성을 유지할 수 있게 한다. 직접 인스턴스를 생성할 수 없고, **모든 메소드는 추상메소드**이다. 단, abstract 키워드를 사용하지 않는다.  
let todos: Todo[] = [];
배열에 요소가 있는데 Todo 인터페이스에 안 맞으면 문제. 그러나 요소가 없다면 괜찮다.  
```
interface SquareFunc {
  (num: number): number;
}
// 파라미터는 한 개의 넘버이며, 리턴도 넘버이다. 이 형식에 맞춰야한다. 
```
클래스에서는 extends 대신 implements 라고 써서, 인터페이스를 '구현' 하는 것이다.  
해당 클래스가 만드는 인스턴스가 인터페이스에서 정한 프로퍼티를 가지고 있어야 한다.  
인터페이스에서 추상메소드를 정해놨다면 인스턴스는 메소드를 구현해야 한다.  

인터페이스는 보통 변수의 타입으로 쓸 때가 많다.  

타입스크립트에서는 해당 인터페이스에서 정의한 프로퍼티나 메소드를 가지고 있다면(결과물이 인터페이스에서 정한 메소드를 가지고 있다면) 그 인터페이스를 구현한 것으로 인정하는데 이것을 **덕 타이핑** 또는 구조적 타이핑이라고 한다. implements 했냐 안 했냐가 중요한 게 아니라, 그 인터페이스를 구현했느냐 안했느냐가 중요하다.  

선택적 프로퍼티의 경우 프로퍼티명 뒤에 `?`를 붙이며, 물음표가 붙은 프로퍼티는 구현할 때 생략해도 에러가 발생하지 않는다.  
 
인터페이스와 클래스의 접근제한자가 핵심이다.