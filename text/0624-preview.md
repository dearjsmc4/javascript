## Angular Lifecycle Hooks  

컴포넌트와 디렉티브는 생명주기를 갖는다. 생명주기는 디렉티브가 생성하고 소멸되기까지의 여러 과정을 말한다. Angular는 생명주기를 통해 컴포넌트와 디렉티브를 생성하고 렌더링하며, 프로퍼티의 변화를 체크하고 DOM에서 제거하는 일련의 과정을 관리한다. 

### 생명주기 훅 메소드 (Lifecycle hooks)  
생명주기 훅 메소드는 인터페이스의 형태로 제공된다.  
생명주기에는 동일한 이름의 인터페이스가 존재하며, 인터페이스는 생명주기 이름 앞에 ng 가 붙은 추상메소드를 포함한다. -> OnInit에 처리되어야 할 행위를 정의하려면 인터페이스 OnInit의 추상메소드 ngOnInit을 구현한다.  

- `ngOnChanges`  
  부모 컴포넌트에서 자식 컴포넌트의 입력 프로퍼티(@Input 데코레이터로 장식된 프로퍼티)로 바인딩한 값이 초기화 또는 변경되었을 때 실행된다. ngOnInit 이전에 입력 프로퍼티가 존재하는 경우, 최소 1회 호출되고 그 후엔 입력 프로퍼티가 변경될 때마다 반복 호출된다. **원시 타입의 값이 재할당**되었을 때와 **객체의 참조가 변경**되었을 때만 반응한다. 

- `ngOnInit`  
  ngOnChanges 이후, 입력 프로퍼티를 포함한 모든 프로퍼티의 초기화가 완료된 시점에 **한 번만** 호출된다. Angular의 경우 프로퍼티 초기화 처리는 constructor가 아닌 ngOnInit에서 수행하는 것이 좋다. ngOnInit에서는 입력 프로퍼티의 참조가 보장되기 때문이다. 또한 서버에서 데이터를 가져와 할당하는 것과 같은 복잡한 처리는 ngOnInit에서 수행해야 한다.  

- `ngDoCheck`  
  ngOnInit 이후, 컴포넌트 또는 디렉티브의 모든 상태 변화가 발생할 때(변화 감지 로직이 실행될 때)마다 호출된다. Angular의 변화 감지에 의해 감지되지 않거나 감지할 수 없는 변경 사항을 수동으로 더티 체크(dirty check)하기 위해 사용한다. 하지만 모든 상태 변화가 발생할 때마다 호출되기 때문에 성능에 악영향을 줄 수 있다. 또한 ngOnChange와 달리 **모든 상태 변경**에 의해 호출된다.  

- **ngOnChanges & ngDoCheck**  
  ngOnChanges는 입력 프로퍼티의 초기화, 입력 프로퍼티의 참조 변경 시에 호출된다.  
  반면 ngDoCheck는 *모든* 상태 변화 시점, 즉 변화 감지(Change detection) 로직이 실행될 때 호출된다.  


## Angular Service & Dependency Injection  

### 서비스  
컴포넌트의 주 관심사 이외의 부가적인 기능을 분리할 때 사용한다. 애플리케이션 전역의 관심사를 서비스로 분리하여 외부에서 관리할 수 있다면, 컴포넌트는 자신의 관심사(뷰를 생성하고 관리)에 집중할 수 있다. 따라서 복잡도는 낮아지고 서비스는 재사용이 가능하게 된다.  
  -> ex) 뷰를 구성하기 위해 서버로부터 데이터를 취득하는 기능은 컴포넌트의 주 관심사가 아니지만 애플리케이션 전역에서 필요한 기능이기때문에 서비스로 분리하여 이용한다.  


