## Angular Forms

- HTML 표준 폼의 단점  
  - submit 버튼 클릭 시 서버로 데이터를 전송하고 페이지 전환  
  - HTML 표준 폼이 제공하는 유효성 검증 어트리뷰트는 에러 정보가 명확하지 않고, 포커스를 옮기면 에러 정보가 사라짐. 에러 메세지 팝업의 스타일 변경 곤란.  
  - 유효성 검증이 세밀하지 못하여 로직을 추가하여야 함.  

위와 같은 단점을 보완하기 위하여 Angular 에서는 템플릿 기반 폼과 리액티브(모델 기반) 폼을 제공한다.  

### 템플릿 기반 폼(Template-driven Forms)  

- **NgForm**
  NgForm 디렉티브는 템플릿 기반 폼 전체를 관리하는 디렉티브이다. 루트 모듈이 FormsModule 을 추가하면 모든 폼 요소에 NgForm 디렉티브가 자동 적용되어 템플릿 기반 폼으로 동작한다.  

  `<form novalidate></form>` : HTML 표준 폼으로써의 동작을 막는다.  
  `<form ngNoForm></form>` : NgForm 디렉티브의 적용을 취소하고 HTML 표준 폼으로 동작한다.  
  `<form (ngSubmit)="onNgSubmit()" novalidate></form>` :
  NgForm 디렉티브가 적용된 템플릿은 submit 이벤트의 기본 동작을 막기 때문에 ngSubmit 이벤트를 대신 사용한다.  
  `<form #f="ngForm" (ngSubmit)="onNgSubmit(f)" novalidate></form>` :
  템플릿 기반 폼에도 템플릿 참조 변수를 사용할 수 있다. 이때 NgForm 인스턴스를 가리키도록 할당해준다.  
  NgForm 디렉티브는 NgForm 인스턴스를 생성할 때 자신이 적용된 폼 요소의 값이나 유효성 검증 상태를 추적할 수 있는 기능을 제공하는 FormGroup을 생성하고 NgForm 인스턴스의 프로퍼티로 추가한다.  
