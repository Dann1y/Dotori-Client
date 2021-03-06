# Dotori-Client-V1
광주소프트웨어마이스터고등학교 기숙사 편의 시스템, DOTORI 입니다.

## 기술 스택

- React (hooks)
- Typescript
- ContextApi

> 기존 Redux와 ReduxSaga로 구현예정이였지만, 
기술적으로 ContextApi가 효율적인거 같아 Redux와 Saga를 변경하기로 했습니다.

> 공식적인 지원은 웹을 기준으로 지원할 예정이며, 

>추후 React Native를 이용하여 앱 개발예정에 있습니다.

----
# COMMIT 규칙

> [COMMIT 종류] 설명 ex) [CREATE] 루트 파일 생성
- 괄호를 포함해서 모두 작성해야 합니다.
- 커밋은 최소 단위로 진행되어야만 합니다
- 두개 이상의 파일이 변경된 경우 제일 중요한 파일을 위주로 설명합니다.

## COMMIT 종류

- CREATE : 파일 생성
- ADD : 새기능을 추가하는 경우 
- UPDATE : 로직 등의 코드 변경
- DELETE : 기능을 삭제하는 경우
- FIX : 이슈 해결
- ETC : 기타 등등
- INIT : 프로젝트 초기화
> INIT을 사용할 경우 프로젝트 담당 리더에게 질문후 사용부탁드립니다.

> 또한, ETC를 사용할 경우 commit Description을 이용해 설명을 자세하게 적어주세요.

# PR 규칙

- 하나의 기능을 기준으로 작성합니다.
- 위의 기능이 의미하는 바는, 기획의 기능 하나를 의미합니다.
> 위 기능은 노션 **도토리/웹 프론트엔드/기능 나열** 을 참조해주세요.
- PR 단위 역시 작은 단위로 작성합니다.

## PR FLOW

- master : 실제 배포를 하게 되는 브랜치
- develop : 개발과정에서 확인을 하기 위한 브랜치
- feature/* : 기능 별 브랜치
- hotfix/* : 긴급 수정 브랜치
